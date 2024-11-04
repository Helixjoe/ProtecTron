import logo from '../assets/images/Logo.png'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className="w-full py-2 px-3">
      <header className="flex justify-between items-center py-4">
        <div className="flex items-center">
          <img src={logo}></img>
          <h1 className="text-2xl font-bold text-blue-700">ProtecTron</h1>
        </div>
        <Link to="/register">
          <button className="px-4 py-2  border-blue-700 text-blue-700 rounded-full border-2 hover:bg-blue-100">
            Create an account
          </button>
        </Link>
      </header>
    </div>
  )
}

export default Header
