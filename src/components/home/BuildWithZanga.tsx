import React from 'react'
import Link from 'next/link'
import { FiAward, FiBriefcase, FiGlobe, FiArrowRight } from 'react-icons/fi'
import type { IconType } from 'react-icons'
import BoldZanga from '@/components/ui/BoldZanga'

type Track = {
  title: string
  description: string
  Icon: IconType
  color: string
}

const tracks: Track[] = [
  {
    title: 'For coaches and practitioners',
    description: 'Use Zanga assessments with clients, access practitioner resources and join the expert network.',
    Icon: FiAward,
    color: '#c55e36',
  },
  {
    title: 'For organisations and institutions',
    description: 'Explore white-label, embedded, research and institutional partnership opportunities.',
    Icon: FiBriefcase,
    color: '#a3a748',
  },
  {
    title: 'For regional and commercial partners',
    description: 'Bring Zanga products to new sectors and markets through referral, reseller or franchise models.',
    Icon: FiGlobe,
    color: '#0F3460',
  },
]

export default function BuildWithZanga() {
  return (
    <section className="md:py-20 py-14 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
          Partnerships
        </span>

        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-[2.8rem] font-bold mt-3 mb-6 font-MonaSans leading-tight text-gray-700">
            Build with <strong>Zanga</strong>.
          </h2>
        </div>

        <div className="grid lg:grid-cols-[550px_1fr] gap-10 lg:gap-16 items-start mt-4">
          <div>
            <p className="text-gray-500 font-Montserrat leading-relaxed mb-8">
<strong>Zanga</strong> works with coaches, consultants, institutions, technology companies, researchers
              and regional partners to make culturally intelligent people and stakeholder insight
              more accessible.
            </p>

            <div>
              {tracks.map((track, i) => (
                <div key={track.title} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span
                      className="shrink-0 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center"
                      style={{ color: track.color }}
                    >
                      <track.Icon size={22} aria-hidden="true" />
                    </span>
                    {i < tracks.length - 1 && (
                      <span
                        className="flex-1 w-px border-l border-dashed border-gray-300 my-1"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <div className={i < tracks.length - 1 ? 'pb-8' : ''}>
                    <h3 className="font-bold text-gray-900 font-MonaSans mb-1">{track.title}</h3>
                    <p className="text-sm text-gray-600 font-Montserrat leading-relaxed">
                      <BoldZanga text={track.description}/>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-olive text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-olive/90 transition-colors font-Montserrat"
              >
                Partner with Zanga
                <FiArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-900 px-7 py-3.5 rounded-md font-semibold text-sm hover:border-gray-400 transition-colors font-Montserrat"
              >
                Coach Login
              </Link>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <img
              src="/images/12.jpg"
              alt="Zanga partners collaborating over workforce data"
              className="w-full h-[20rem] sm:h-[26rem] object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
