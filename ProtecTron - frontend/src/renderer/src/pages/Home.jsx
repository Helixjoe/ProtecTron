import homepage from '../assets/images/homepage.png'

import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className="flex items-center justify-center  bg-white">
      {/* Main container */}
      <div className="w-full max-w-4xl flex flex-col p-6 ">
        {/* Header */}
        {/* Main content */}
        <div className="flex items-center justify-center mt-10">
          {/* Left - Illustration */}
          <div className="flex justify-center">
            <img
              src={homepage} // Replace with the path to your illustration image
              alt="Security Illustration"
              className="w-80"
            />
          </div>

          {/* Right - Text and Button */}
          <div className="ml-10 flex flex-col items-center">
            <h2 className="text-4xl font-bold text-blue-700 leading-tight">
              Your Digital Shield: <br />
              Stronger, Smarter, Safer!
            </h2>
            <Link to="/login">
              <button className="mt-8 px-8 py-3 bg-white border-2 border-blue-700 text-blue-700 rounded-full text-lg font-semibold hover:bg-blue-100 transition">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
