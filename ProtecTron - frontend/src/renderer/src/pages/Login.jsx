import google from '../assets/images/google-icon.png'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header type="login" />
      <div className="w-full max-w-md p-8  bg-white border border-gray-200 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-blue-700 py-6">Login</h2>

        <form className="space-y-4">
          {/* Username or Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email - ID</label>
            <input
              type="text"
              placeholder="Enter your username or email"
              className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:ring-blue-700 focus:border-blue-700"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:ring-blue-700 focus:border-blue-700"
            />
            <p className="mt-1 text-xs text-right text-blue-700 cursor-pointer hover:underline">
              Forgot your password?
            </p>
          </div>

          {/* Login Button */}
          <Link to="/dashboard">
            <button
              type="submit"
              className="w-full py-2 mt-4 text-sm font-semibold text-white bg-blue-700 rounded-md hover:bg-blue-800"
            >
              Login
            </button>
          </Link>
          {/* OR Separator */}
          <div className="flex items-center justify-center mt-4">
            <span className="text-xs text-gray-500">OR</span>
          </div>

          {/* Google Login Button */}
          <button
            type="button"
            className="flex items-center justify-center w-full py-2 mt-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100"
          >
            <img
              src={google} // replace with Google logo URL
              alt="Google"
              className="w-4 h-4 mr-2"
            />
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
