import { useState } from 'react'
import scanfiles from '../assets/images/scanfiles.png'
import quicktime from '../assets/images/quicktime.png'
import ram from '../assets/images/ram.png'
import advanceai from '../assets/images/advancedai.png'

function AntivirusFeatures() {
  const [selectedFeature, setSelectedFeature] = useState(null)

  // Content to display for each feature
  const renderFeatureContent = () => {
    switch (selectedFeature) {
      case 'scanfiles':
        return <div>Scan Files Content</div>
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
    <div className="mt-8 flex">
      <div>
        {/* Left Panel */}
        <div className="flex flex-col py-1 h-[116%] gap-2 border-2">
          <div
            onClick={() => setSelectedFeature('scanfiles')}
            className="py-7 px-6 text-blue-600 flex items-center gap-4 hover:underline underline-offset-2 cursor-pointer"
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
      <div className="w-full  p-4">{renderFeatureContent()}</div>
    </div>
  )
}

export default AntivirusFeatures
