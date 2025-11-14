import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="pt-20 pb-10 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight text-gray-900">
          Superintelligence for work.
        </h1>
      </div>

      <div className="relative h-[320px] sm:h-[420px] md:h-[520px]">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/30 to-white/80" />
      </div>
    </section>
  )
}
