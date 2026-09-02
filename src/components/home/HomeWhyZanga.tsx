import React from 'react'

const whyZanga = [
  {
    title: 'Africa-Rooted Expertise',
    description: 'Coaches who understand the cultural, economic, and strategic nuances of African markets.',
  },
  {
    title: 'Data-Driven Outcomes',
    description: 'Every engagement is measured. Our Big Data Report tracks impact across industries and regions.',
  },
  {
    title: 'Curated Coach Network',
    description: 'Only the top 5% of applicants join our network—vetted for excellence and impact.',
  },
]

export default function HomeWhyZanga() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
            Why <strong>Zanga</strong>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-MonaSans">
            Built for African Business. <br />Designed for Global Impact.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyZanga.map((item) => (
            <div
              key={item.title}
              className="bg-gray-50 border border-gray-100 rounded-xl p-8 hover:border-olive/40 transition-colors"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-MonaSans">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-Montserrat">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
