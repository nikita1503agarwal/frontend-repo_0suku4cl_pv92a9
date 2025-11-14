import React from 'react'

const logos = [
  { name: 'Workday' },
  { name: 'NVIDIA' },
  { name: 'OpenAI' },
  { name: 'Google' },
  { name: 'Microsoft' },
  { name: 'Stripe' },
]

export default function LogoRow() {
  return (
    <div className="w-full py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-70">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="text-center text-gray-500 text-sm md:text-base tracking-wider font-medium select-none"
          >
            <div className="mx-auto h-10 flex items-center justify-center">
              <span className="uppercase">{logo.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
