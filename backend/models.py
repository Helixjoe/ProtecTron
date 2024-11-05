# models.py
from pymongo import MongoClient
from bson.objectid import ObjectId
from config import MONGO_URI

client = MongoClient(MONGO_URI)
db = client['protectronDB']  # Replace 'quiz_db' with your database name

# Collections
users_collection = db['users']
questions_collection = db['questions']
scores_collection = db['scores']