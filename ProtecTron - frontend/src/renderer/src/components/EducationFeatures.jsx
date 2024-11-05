import { useState } from 'react'
import homedu from '../assets/images/homedu.png'
import quiz from '../assets/images/quiz.png'
import info from '../assets/images/info.png'
import educat from '../assets/images/educat.png'
import Quiz from './Quiz'
import EduHome from './EduHome'
function EducationFeatures() {
  const [selectedFeature, setSelectedFeature] = useState('home')

  // Content to display for each feature
  const renderFeatureContent = () => {
    switch (selectedFeature) {
      case 'home':
        return <EduHome />
      case 'quiz':
        return <Quiz />
      case 'ram':
        return <div>Ram Booster Content</div>
      case 'advanceai':
        return <div>Advanced AI Scan Content</div>
      default:
        return <div>Select a feature to see more details.</div>
    }
  }

  return (
    <div className=" flex">
      <div>
        {/* Left Panel */}
        <div className="flex flex-col py-1 mx-2 h-full gap-2 border-2 bg-blue-600 rounded-2xl mt-8 text-white">
          <div
            onClick={() => setSelectedFeature('home')}
            className={`py-7 px-6  flex items-center gap-4 ${selectedFeature === 'home' ? 'underline' : 'hover:underline'} underline-offset-2 cursor-pointer`}
          >
            <img src={homedu} className="h-7" />
            <h1>Home</h1>
          </div>
          <div
            onClick={() => setSelectedFeature('quiz')}
            className="py-7 px-6 flex items-center gap-4 hover:underline underline-offset-2 cursor-pointer"
          >
            <img src={quiz} className="h-7" />
            <h1>Quiz</h1>
          </div>
          <div
            onClick={() => setSelectedFeature('ram')}
            className="py-7 px-6  flex items-center gap-4 hover:underline underline-offset-2 cursor-pointer"
          >
            <img src={info} className="h-6" />
            <h1>Information Hub</h1>
          </div>
          <div
            onClick={() => setSelectedFeature('advanceai')}
            className="py-7 px-6  flex items-center gap-4 hover:underline underline-offset-2 cursor-pointer"
          >
            <img src={educat} className="h-6" />
            <h1>Course Pathway</h1>
          </div>
        </div>
      </div>
      {/* Right Panel - Render Selected Feature Content */}
      <div className="w-full">{renderFeatureContent()}</div>
    </div>
  )
}

export default EducationFeatures
