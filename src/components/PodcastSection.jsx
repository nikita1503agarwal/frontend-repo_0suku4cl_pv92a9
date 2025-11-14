import React from 'react'

const items = [
  { name: 'Jensen Huang', img: 'https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Daphne Koller', img: 'https://images.unsplash.com/photo-1525026198548-4baa812f1183?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Ethan Mollick', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Geoffrey Hinton', img: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=1600&auto=format&fit=crop' },
]

export default function PodcastSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-16">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-900 mb-8">Our podcast.</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((it) => (
          <div key={it.name} className="space-y-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 shadow-md">
              <img src={it.img} alt={it.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="h-14 w-14 rounded-full bg-white/90 backdrop-blur text-gray-900 shadow ring-1 ring-black/10 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="translate-x-[2px]">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
            <p className="text-center text-gray-700">{it.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
