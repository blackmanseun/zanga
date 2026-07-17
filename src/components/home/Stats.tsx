import React from 'react'

const stats = [
  { value: '200+', label: 'Certified Coaches' },
  { value: '50+', label: 'Industries Served' },
  { value: '1,000+', label: 'Leaders Transformed' },
  { value: '15+', label: 'Countries Reached' },
]

export default function Stats() {
  return (
    <section className="bg-gray-50 py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-4xl font-bold text-terracotta font-MonaSans">{stat.value}</p>
            <p className="text-gray-500 text-sm mt-1 font-Montserrat">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
