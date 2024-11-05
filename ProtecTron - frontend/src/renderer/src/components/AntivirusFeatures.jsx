import { useState } from 'react'
import scanfiles from '../assets/images/scanfiles.png'
import quicktime from '../assets/images/quicktime.png'
import ram from '../assets/images/ram.png'
import advanceai from '../assets/images/advancedai.png'
import ScanFiles from './ScanFiles.jsx'
function AntivirusFeatures() {
  const [selectedFeature, setSelectedFeature] = useState('scanfiles')

  // Content to display for each feature
  const renderFeatureContent = () => {
    switch (selectedFeature) {
      case 'scanfiles':
        return <ScanFiles />
      case 'quicktime':
        return <div>Quick Time Scanning Content</div>
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
        <div className="flex flex-col py-1 mx-2 h-full gap-2 border-2 border-blue-300 rounded-2xl mt-8">
          <div
            onClick={() => setSelectedFeature('scanfiles')}
            className={`py-7 px-6 text-blue-600 flex items-center gap-4 ${selectedFeature === 'scanfiles' ? 'underline' : 'hover:underline'} underline-offset-2 cursor-pointer`}
          >
            <img src={scanfiles} className="h-8" />
            <h1>Scan Files</h1>
          </div>
          <div
            onClick={() => setSelectedFeature('quicktime')}
            className="py-7 px-6 text-blue-600 flex items-center gap-4 hover:underline underline-offset-2 cursor-pointer"
          >
            <img src={quicktime} className="h-8" />
            <h1>Quick Time Scanning</h1>
          </div>
          <div
            onClick={() => setSelectedFeature('ram')}
            className="py-7 px-6 text-blue-600 flex items-center gap-4 hover:underline underline-offset-2 cursor-pointer"
          >
            <img src={ram} className="h-8" />
            <h1>Ram Booster</h1>
          </div>
          <div
            onClick={() => setSelectedFeature('advanceai')}
            className="py-7 px-6 text-blue-600 flex items-center gap-4 hover:underline underline-offset-2 cursor-pointer"
          >
            <img src={advanceai} className="h-8" />
            <h1>Advanced AI Scan</h1>
          </div>
        </div>
      </div>
      {/* Right Panel - Render Selected Feature Content */}
      <div className="w-full">{renderFeatureContent()}</div>
    </div>
  )
}

export default AntivirusFeatures
