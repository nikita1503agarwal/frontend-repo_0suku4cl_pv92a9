import React from 'react'

const columns = [
  {
    title: 'Sana Agents',
    links: ['Overview', 'Agent Studio', 'Pricing', 'Security']
  },
  {
    title: 'Sana Learn',
    links: ['Product', 'Content', 'Analytics', 'Integrations']
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Press', 'Contact']
  }
]

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded bg-gray-900 text-white flex items-center justify-center font-bold">S</div>
            <span className="font-semibold text-gray-900">Sana</span>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-700">Subscribe to our newsletter</p>
            <div className="flex items-center gap-2">
              <input placeholder="Email" className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
              <button className="px-4 py-2 rounded-lg bg-gray-900 text-white">Subscribe</button>
            </div>
            <p className="text-xs text-gray-500">© Sana Labs AB 2025</p>
          </div>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-gray-900 font-medium mb-4">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l}>
                  <a className="text-sm text-gray-600 hover:text-gray-900" href="#">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  )
}
