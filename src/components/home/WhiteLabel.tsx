import React from 'react'
import Link from 'next/link'
import { FiPlus } from 'react-icons/fi'

const audiences = ['Enterprise Organisations', 'Consulting Firms', 'Learning Providers', 'Certified Coaches']

const frameworkItems = ['Strategic Thinking', 'People Leadership', 'Execution Excellence']

export default function WhiteLabel() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#282A30]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-olive text-md uppercase tracking-widest font-Montserrat font-semibold">
            White-Label & Customisation
          </span>
          <h2 className="text-3xl md:text-[2.75rem] font-bold mt-3 mb-6 font-MonaSans leading-tight">
            <span className="text-white">Built Around Your Organisation.</span>
            <br />
            <span className="text-olive">Branded as Your Own.</span>
          </h2>
          <p className="text-white/70 font-Montserrat leading-relaxed mb-4">
            Every organisation is different. That&apos;s why Zanga&apos;s platform can be customised to reflect your
            brand, industry, and operating context. From white-label assessments and co-branded reports to
            tailored competency frameworks and sector-specific insights, we help you deliver a seamless experience
            that feels like an extension of your organisation — not an external tool.
          </p>
          <p className="text-white/70 font-Montserrat leading-relaxed mb-8">
            Zanga gives you the flexibility to own the client experience while benefiting from world-class
            leadership science.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {audiences.map((audience) => (
              <span
                key={audience}
                className="text-xs font-medium text-white/70 border border-white/10 bg-white/5 rounded-full px-3 py-1.5 font-Montserrat"
              >
                {audience}
              </span>
            ))}
          </div>

          <Link
            href="/solutions"
            className="inline-block bg-olive text-white px-8 py-4 rounded-md font-semibold text-base hover:bg-olive/90 transition-colors font-Montserrat"
          >
            Explore White-Label Solutions
          </Link>
        </div>

        <div
          className="rounded-2xl border border-gray-200 shadow-sm p-6"
          style={{ backgroundColor: 'rgb(250, 248, 246)' }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="w-24 h-8 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center">
              <span className="text-[10px] text-gray-400 font-Montserrat">Your Logo</span>
            </div>
            <span className="text-[10px] text-gray-400 font-Montserrat">Sample Assessment Report</span>
          </div>

          <p className="text-xs uppercase tracking-wide font-semibold text-gray-400 font-Montserrat mb-2">
            Brand Colours
          </p>
          <div className="flex gap-2 mb-6">
            <span className="w-8 h-8 rounded-full bg-olive border-2 border-white shadow-sm" />
            <span className="w-8 h-8 rounded-full bg-terracotta border-2 border-white shadow-sm" />
            <span className="w-8 h-8 rounded-full bg-gray-900 border-2 border-white shadow-sm" />
            <span className="w-8 h-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-300">
              <FiPlus size={14} aria-hidden="true" />
            </span>
          </div>

          <p className="text-xs uppercase tracking-wide font-semibold text-gray-400 font-Montserrat mb-3">
            Competency Framework
          </p>
          <div className="space-y-2">
            {frameworkItems.map((item) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-lg border border-gray-100 px-3 py-2"
              >
                <span className="text-md text-gray-700 font-Montserrat">{item}</span>
                <span className="text-[10px] text-gray-400 font-Montserrat">Customisable</span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100 text-center">
            <span className="text-[10px] text-gray-300 font-Montserrat">Powered by Zanga</span>
          </div>
        </div>
      </div>
    </section>
  )
}
