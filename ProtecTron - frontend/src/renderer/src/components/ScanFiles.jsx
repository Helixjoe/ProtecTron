function ScanFiles() {
  return (
    <div className="px-6 h-full flex items-center justify-center">
      <div className="flex flex-wrap max-w-5xl w-full gap-6">
        {/* System Protection Card */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md flex flex-col items-center min-w-[280px]">
          <h2 className="text-lg font-semibold text-gray-600 mb-2">Your System Protection</h2>
          <div className="relative w-32 h-32 mb-4">
            <div className="absolute inset-0 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="text-4xl font-bold text-blue-700">15%</span>
            </div>
            <div
              className="absolute inset-0 rounded-full border-8 border-blue-600"
              style={{ clipPath: 'inset(80% 0 0  0 )' }}
            ></div>
          </div>
          <p className="text-gray-500">System Scanned</p>
          <button className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800">
            Scan now
          </button>
        </div>

        {/* Files Scanned Card */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-xl flex flex-col items-center justify-center min-w-[280px]">
          <h2 className="text-lg font-semibold text-gray-600 mb-2">Files Scanned</h2>
          <div className="flex justify-between w-full mb-4">
            <div className="bg-blue-100 flex flex-col items-center justify-center text-blue-700 p-4 rounded-lg text-center flex-1 mx-2">
              <p className="text-2xl font-bold">47</p>
              <p className="text-gray-500">Scanned Today</p>
            </div>
            <div className="bg-blue-100 flex flex-col items-center justify-center text-blue-700 p-4 rounded-lg text-center flex-1 mx-2">
              <p className="text-2xl font-bold">862</p>
              <p className="text-gray-500">Total Files Scanned</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScanFiles
