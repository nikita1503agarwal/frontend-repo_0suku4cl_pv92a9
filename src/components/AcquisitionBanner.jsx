import React from 'react'

export default function AcquisitionBanner() {
  return (
    <section className="px-4 md:px-6 py-8">
      <div className="max-w-6xl mx-auto rounded-2xl p-6 md:p-8 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white shadow-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded bg-white/90 text-gray-900 flex items-center justify-center font-bold shadow">W</div>
            <div className="h-10 w-10 rounded bg-white/90 text-gray-900 flex items-center justify-center font-bold shadow">S</div>
          </div>
          <div className="flex-1">
            <p className="text-lg md:text-xl font-medium">
              Sana is now part of Workday — bringing AI learning experiences to over <span className="font-semibold">75M</span> users.
            </p>
          </div>
        </div>
        <div className="mt-8 text-right italic font-handwritten">
          <span className="inline-block">Joel</span>
        </div>
      </div>
    </section>
  )
}
