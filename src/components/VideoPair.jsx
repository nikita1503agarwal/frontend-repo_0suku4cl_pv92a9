import React from 'react'

function VideoCard({ theme = 'dark', exploreColor = 'bg-yellow-300', title = '', poster = '' }) {
  const isDark = theme === 'dark'
  return (
    <div className={`rounded-2xl p-4 ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-xl ring-1 ring-black/5`}> 
      <div className="flex items-center gap-3 mb-4">
        <button className={`px-4 py-1.5 rounded-full text-sm font-medium ${exploreColor} ${isDark ? 'text-gray-900' : 'text-white'} shadow-sm`}>Explore</button>
        <button className={`px-4 py-1.5 rounded-full text-sm font-medium ${isDark ? 'bg-white text-gray-900' : 'bg-white text-gray-900'} shadow-sm`}>Book an intro</button>
      </div>
      <div className={`aspect-[16/9] w-full overflow-hidden rounded-xl ${isDark ? 'bg-black' : 'bg-gray-100'} relative`}> 
        <img src={poster} alt={title} className="w-full h-full object-cover opacity-90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-16 w-16 rounded-full bg-white/90 backdrop-blur shadow ring-1 ring-black/10 flex items-center justify-center">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="text-gray-900 translate-x-[2px]">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function VideoPair() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <VideoCard theme="dark" exploreColor="bg-yellow-300" title="AI chat & analytics" poster="https://images.unsplash.com/photo-1551281044-8b59a0b47b5a?q=80&w=1600&auto=format&fit=crop" />
        <VideoCard theme="light" exploreColor="bg-pink-500" title="Automation on mobile" poster="https://images.unsplash.com/photo-1611078489935-0cb964de46d6?q=80&w=1600&auto=format&fit=crop" />
      </div>
    </section>
  )
}
