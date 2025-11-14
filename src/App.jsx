import React from 'react'
import Hero from './components/Hero'
import LogoRow from './components/LogoRow'
import VideoPair from './components/VideoPair'
import AcquisitionBanner from './components/AcquisitionBanner'
import PodcastSection from './components/PodcastSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <Hero />
        <LogoRow />
      </div>
      <VideoPair />
      <AcquisitionBanner />
      <PodcastSection />
      <Footer />
    </div>
  )
}

export default App
