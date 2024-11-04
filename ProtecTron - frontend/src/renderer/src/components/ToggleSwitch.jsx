import React, { useState } from 'react'
import antivirus from '../assets/images/antivirus.png'
import education from '../assets/images/education.png'
function ToggleSwitch({ onToggle }) {
  const [isAntivirus, setIsAntivirus] = useState(true)

  const handleToggle = () => {
    setIsAntivirus(!isAntivirus)
    onToggle(!isAntivirus)
  }

  return (
    <div className="flex items-center gap-4">
      <h1 className="text-2xl font-bold text-blue-700">
        {isAntivirus ? 'Antivirus' : 'Education'}
      </h1>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={isAntivirus}
          onChange={handleToggle}
          className="sr-only peer"
        />
        <div className="flex items-center w-[8rem] h-[4rem] bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-400 rounded-full peer dark:bg-blue-600 peer-checked:bg-blue-600 transition duration-300 ease-in-out">
          <img
            className={`z-10 absolute rounded-full transform transition duration-300 ease-in-out ${
              isAntivirus
                ? 'translate-x-1 w-[3rem] h-[3rem]'
                : 'translate-x-[5rem] w-[2.7rem] h-[2.7rem] left-[0.12rem]'
            }`}
            src={isAntivirus ? antivirus : education}
          />
          <span
            className={`absolute w-[3rem] h-[3rem] bg-white rounded-full shadow-md transform transition duration-300 ease-in-out ${
              isAntivirus ? 'translate-x-1' : 'translate-x-[5rem]'
            }`}
          ></span>
        </div>
      </label>
    </div>
  )
}

export default ToggleSwitch
