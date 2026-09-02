import React from 'react'
import Link from 'next/link'

const industries = [
  'Financial Services', 'Energy & Resources', 'Healthcare', 'Technology',
  'Education', 'Government', 'Manufacturing', 'Telecommunications',
]

export default function HomeIndustries() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
            Industries
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-MonaSans">
            Sector-Specific Coaching Expertise
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {industries.map((industry) => (
            <div
              key={industry}
              className="bg-white border border-gray-200 rounded-lg px-4 py-5 text-center text-sm font-semibold text-gray-700 hover:border-olive hover:text-olive transition-colors font-Montserrat cursor-pointer"
            >
              {industry}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/industries"
            className="text-olive font-semibold text-sm hover:underline font-Montserrat"
          >
            Explore all industries →
          </Link>
        </div>
      </div>
    </section>
  )
}
