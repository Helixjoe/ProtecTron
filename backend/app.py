# app.py
from flask import Flask, jsonify, request
from flask_bcrypt import Bcrypt
from bson.objectid import ObjectId
from flask_cors import CORS
import models

app = Flask(__name__)
app.config.from_pyfile('config.py')
CORS(app)
bcrypt = Bcrypt(app)

@app.after_request
def add_security_headers(response):
    # Allow connections to the Flask app
    response.headers['Content-Security-Policy'] = "default-src 'self'; connect-src 'self' http://127.0.0.1:5000;"
    return response
# Route: GET questions
@app.route('/questions', methods=['GET'])
def get_questions():
    questions = []
    for q in models.questions_collection.find():
        question = {
            "_id": str(q["_id"]),
            "question": q["question"],
            "options": q["options"],
            "answer": q["answer"]
        }
        questions.append(question)
    return jsonify({"questions": questions}), 200

# Route: POST register
@app.route('/register', methods=['POST'])
def register_user():
    data = request.get_json()
    full_name = data.get("fullName")
    email = data.get("email")
    password = data.get("password")

    if not full_name or not email or not password:
        return jsonify({"error": "All fields are required!"}), 400
    
    # Hash password before saving
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    
    user = {
        "fullName": full_name,
        "email": email,
        "password": hashed_password
    }
    user_id = models.users_collection.insert_one(user).inserted_id
    return jsonify({"message": "User registered successfully", "userId": str(user_id)}), 201

# Route: POST score/<userID>
@app.route('/score/<userID>', methods=['POST'])
def save_score(userID):
    try:
        score_data = request.get_json()
        score = score_data.get("score")

        if score is None:
            return jsonify({"error": "Score is required"}), 400

        # Ensure user exists
        user = models.users_collection.find_one({"_id": ObjectId(userID)})
        if not user:
            return jsonify({"error": "User not found"}), 404

        # Save score
        score_entry = {
            "userId": ObjectId(userID),
            "score": score
        }
        models.scores_collection.insert_one(score_entry)
        return jsonify({"message": "Score saved successfully"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)
