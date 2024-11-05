import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Quiz = () => {
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [results, setResults] = useState([])
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    setQuestions([
      {
        _id: '67299c3331c28a09f1af726c',
        answer: 'B',
        options: {
          A: 'To allow unauthorized access',
          B: 'To block malicious traffic',
          C: 'To slow down internet speed',
          D: 'To monitor CPU usage'
        },
        question: 'What is the purpose of a firewall in cybersecurity?'
      },
      {
        _id: '67299c3331c28a09f1af726d',
        answer: 'C',
        options: {
          A: '123456',
          B: 'password',
          C: 'MySecurePassword!',
          D: 'abcd1234'
        },
        question: 'Which of the following is considered a strong password?'
      },
      {
        _id: '67299c3331c28a09f1af726e',
        answer: 'A',
        options: {
          A: 'A cyberattack that tricks individuals into revealing personal information',
          B: 'A technique to speed up internet browsing',
          C: 'A method for encrypting passwords',
          D: 'A way to improve software performance'
        },
        question: "What does 'phishing' mean in the context of cybersecurity?"
      },
      {
        _id: '67299c3331c28a09f1af726f',
        answer: 'D',
        options: {
          A: 'It contains grammatical errors',
          B: 'It asks for personal information',
          C: 'It has a suspicious link',
          D: 'All of the above'
        },
        question: 'Which of the following is a common sign of a phishing email?'
      },
      {
        _id: '67299c3331c28a09f1af7270',
        answer: 'B',
        options: {
          A: 'A type of network protocol',
          B: 'Malicious software intended to harm a system',
          C: 'A form of secure communication',
          D: 'A method for speeding up computers'
        },
        question: 'What is malware?'
      },
      {
        _id: '67299c3331c28a09f1af7271',
        answer: 'C',
        options: {
          A: 'To make logging in faster',
          B: 'To allow users to have multiple accounts',
          C: 'To provide an extra layer of security',
          D: 'To disable password protection'
        },
        question: 'What is the purpose of two-factor authentication (2FA)?'
      },
      {
        _id: '67299c3331c28a09f1af7272',
        answer: 'D',
        options: {
          A: 'Avoid logging into sensitive accounts',
          B: 'Use a VPN',
          C: 'Only use HTTPS websites',
          D: 'All of the above'
        },
        question: 'Which of the following is the safest practice when using public Wi-Fi?'
      },
      {
        _id: '67299c3331c28a09f1af7273',
        answer: 'B',
        options: {
          A: 'Software that randomly deletes files',
          B: 'Software that locks files and demands payment',
          C: 'A program that backs up data automatically',
          D: 'An application that increases computer speed'
        },
        question: "What does the term 'ransomware' mean?"
      },
      {
        _id: '67299c3331c28a09f1af7274',
        answer: 'C',
        options: {
          A: 'To speed up internet connections',
          B: 'To increase storage space',
          C: 'To protect data by encoding it',
          D: 'To delete unnecessary files'
        },
        question: 'What is encryption used for in cybersecurity?'
      },
      {
        _id: '67299c3331c28a09f1af7275',
        answer: 'D',
        options: {
          A: 'Avoid opening email attachments from unknown senders',
          B: 'Keep software up to date',
          C: 'Install antivirus software',
          D: 'All of the above'
        },
        question: 'Which of the following is a good way to protect your computer from malware?'
      },
      {
        _id: '67299cac31c28a09f1afdd4c',
        answer: 'B',
        options: {
          A: 'To allow unauthorized access',
          B: 'To block malicious traffic',
          C: 'To slow down internet speed',
          D: 'To monitor CPU usage'
        },
        question: 'What is the purpose of a firewall in cybersecurity?'
      }
    ])
    // Fetch questions from the backend
    axios
      .get('http://127.0.0.1:5000/questions')
      .then((response) => {
        setQuestions(response.data.questions)
      })
      .catch((error) => console.error('Error fetching questions:', error))
  }, [])

  const handleAnswerSelection = (option) => {
    setSelectedAnswer(option)
  }

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return

    const currentQuestion = questions[currentQuestionIndex]
    const isCorrect = selectedAnswer === currentQuestion.answer

    // Update score and results
    if (isCorrect) {
      setScore(score + 1)
    }

    setResults((prevResults) => [
      ...prevResults,
      {
        question: currentQuestion.question,
        selectedAnswer,
        correctAnswer: currentQuestion.options[currentQuestion.answer],
        isCorrect
      }
    ])

    // Move to the next question
    setSelectedAnswer(null)
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      // All questions answered, show results
      setShowResults(true)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-full p-4 w-full">
      {!showResults ? (
        questions.length > 0 && (
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Question {currentQuestionIndex + 1}
            </h2>
            <p className="text-lg mb-6">{questions[currentQuestionIndex].question}</p>
            <div className="flex flex-col gap-3">
              {Object.entries(questions[currentQuestionIndex].options).map(([key, option]) => (
                <button
                  key={key}
                  className={`py-2 px-4 rounded-lg border ${selectedAnswer === key ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-500 hover:text-white transition-colors`}
                  onClick={() => handleAnswerSelection(key)}
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              onClick={handleSubmitAnswer}
              className="mt-6 w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Submit Answer
            </button>
          </div>
        )
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Results</h2>
          <p className="text-lg mb-2">Total Correct Answers: {score}</p>
          <p className="text-lg mb-6">Total Incorrect Answers: {questions.length - score}</p>
          <h3 className="text-xl font-semibold mb-4">Review Answers</h3>
          <ul className="space-y-4 text-left h-[15rem] overflow-y-scroll">
            {results.map(
              (result, index) =>
                result.isCorrect && (
                  <li key={index} className="p-4 rounded-lg w-full bg-red-400">
                    <strong>Question:</strong> {result.question}
                    <br />
                    <strong>Your Answer:</strong> {result.selectedAnswer} <br />
                    {!result.isCorrect && (
                      <>
                        <strong>Correct Answer:</strong> {result.correctAnswer}
                      </>
                    )}
                  </li>
                )
            )}
            {results.map(
              (result, index) =>
                !results.isCorrect && (
                  <li key={index} className="p-4  rounded-lg w-full bg-green-300">
                    <strong>Question:</strong> {result.question}
                    <br />
                    <strong>Your Answer:</strong> {result.selectedAnswer} <br />
                    {!result.isCorrect && (
                      <>
                        <strong>Correct Answer:</strong> {result.correctAnswer}
                      </>
                    )}
                  </li>
                )
            )}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Quiz
