import React, { useState } from 'react'
import ToggleSwitch from '../components/ToggleSwitch'
import logo from '../assets/images/Logo.png'
import { Link } from 'react-router-dom'
import AntivirusFeatures from '../components/AntivirusFeatures'
function Dashboard() {
  const [isAntivirusMode, setIsAntivirusMode] = useState(true)
  return (
    <div className="flex flex-col  py-4 w-full">
      <header className=" flex justify-between px-3 py-2 w-full">
        <Link to="/">
          <div className="flex items-center cursor-pointer">
            <img src={logo}></img>
            <h1 className="text-2xl font-bold text-blue-700">ProtecTron</h1>
          </div>
        </Link>
        <ToggleSwitch onToggle={setIsAntivirusMode} />
      </header>
      <div className="w-full">{isAntivirusMode ? <AntivirusFeatures /> : 'Bye '}</div>
    </div>
  )
}

export default Dashboard
