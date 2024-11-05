import React from 'react'

function CoursePathway() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg p-6 gap-6 max-w-4xl w-full">
        {/* Course Pathway Section */}
        <div className="flex-1 bg-blue-50 rounded-lg p-6">
          <h2 className="text-blue-700 text-lg font-semibold mb-4">Course Pathway</h2>

          <div className="flex flex-col gap-4">
            {/* Course Item 1 */}
            <div className="flex items-center justify-between bg-blue-100 p-4 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-blue-700">1</div>
                <div>
                  <h3 className="text-blue-900 font-semibold">Fundamentals of Cybersecurity</h3>
                </div>
              </div>
              <button className="bg-blue-700 text-white rounded-full px-4 py-2 text-sm">
                In progress
              </button>
            </div>

            {/* Course Item 2 */}
            <div className="flex items-center justify-between bg-blue-100 p-4 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-blue-700">2</div>
                <div>
                  <h3 className="text-blue-900 font-semibold">Network Security</h3>
                </div>
              </div>
              <button className="bg-blue-700 text-white rounded-full px-4 py-2 text-sm">
                Start
              </button>
            </div>

            {/* Course Item 3 */}
            <div className="flex items-center justify-between bg-blue-100 p-4 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-blue-700">3</div>
                <div>
                  <h3 className="text-blue-900 font-semibold">Application Security</h3>
                </div>
              </div>
              <button className="bg-blue-700 text-white rounded-full px-4 py-2 text-sm">
                Start
              </button>
            </div>
          </div>
        </div>

        {/* Progress Summary Section */}
        <div className="w-full lg:w-1/3 bg-blue-50 rounded-lg p-6 flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 text-2xl font-bold border-4 border-blue-700 mb-4">
            7.5%
          </div>
          <p className="text-gray-700 font-semibold mb-2">Total number of chapters: 6</p>
          <p className="text-gray-700 font-semibold mb-4">Total number of sessions: 36</p>
          <div className="bg-blue-700 text-white rounded-lg px-4 py-2 text-sm w-full">
            Current Progress <br /> Chapter 1 <br /> 2/6
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursePathway
