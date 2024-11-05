import React from 'react'

function EduHome() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg p-6 gap-6 max-w-3xl">
        {/* Points Card */}
        <div className="flex-1 bg-blue-50 border border-blue-200 rounded-lg p-6 flex flex-col items-center">
          <div className="flex flex-col items-center mb-4">
            <div className="w-28 h-28 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 text-5xl font-bold border-4 border-blue-700">
              136
            </div>
            <p className="text-gray-700 font-semibold mt-2">points</p>
          </div>
          <div className="bg-blue-700 text-white rounded-lg px-4 py-2 text-center text-sm mb-2">
            Just 4 more points away from the Cybersecurity Analyst Badge!
          </div>
          <p className="text-gray-500 text-center text-xs">
            Tip: Earn more points by completing daily quizzes!
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col gap-4">
          <button className="bg-blue-700 text-white flex items-center justify-center gap-2 py-3 px-6 rounded-lg hover:bg-blue-800 shadow-md">
            <span>🏆</span> Daily Quiz
          </button>
          <button className="bg-blue-700 text-white flex items-center justify-center gap-2 py-3 px-6 rounded-lg hover:bg-blue-800 shadow-md">
            <span>🔠</span> Daily Challenge
          </button>

          <button className="bg-blue-200 text-blue-700 flex items-center justify-center gap-2 py-3 px-6 rounded-lg hover:bg-blue-300 shadow-md">
            <span>📖</span> Continue pathway
          </button>
        </div>
      </div>
    </div>
  )
}

export default EduHome
