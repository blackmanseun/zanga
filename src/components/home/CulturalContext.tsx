import React from 'react'
import Link from 'next/link'
import { FiArrowRight, FiAlertCircle } from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'

function BarRow({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="mb-2 last:mb-0">
      <div className="flex justify-between text-[9px] text-gray-500 font-Montserrat mb-1">
        <span>{label}</span>
        <span className="font-semibold text-gray-700">{value}%</span>
      </div>
      <div className="h-1 rounded-full bg-gray-100">
        <div className="h-full rounded-full" style={{ width: `${value}%`, backgroundColor: color }} />
      </div>
    </div>
  )
}

export default function CulturalContext() {
  return (
    <section className="md:py-28 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div
            className="relative overflow-hidden md:rounded-[2rem] px-4 py-20 sm:p-12 lg:p-16"
            style={{ backgroundColor: '#282A30' }}
          >
            <div
              className="pointer-events-none absolute -left-40 md:right-24 md:-bottom-20 -bottom-40 sm:left-1/2 sm:-top-32"
              aria-hidden="true"
            >
              <div className="w-[30rem] h-[30rem] rounded-[50%] border-2 border-white/10" />
              <div className="absolute w-[22rem] h-[15rem] left-8 md:top-5 bottom-10 rounded-[50%] border-2 border-white/10" />
              <div className="hidden md:block absolute w-[15rem] h-[13rem] left-14 top-2 rounded-[80%] border-2 border-white/10" />
            </div>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-[2rem] md:text-[2.75rem] font-bold text-white mb-4 font-MonaSans leading-tight">
                  Context changes <br/><span className="text-olive">what the data means.</span>
                </h2>
                <p className="text-white/70 font-Montserrat leading-relaxed mb-4">
                  Leadership, engagement and stakeholder sentiment are shaped by culture. The same
                  behaviour, response or score can carry different meaning across workplaces and
                  markets. Zanga is designed to interpret people data with greater sensitivity to
                  high-context environments, including the influence of hierarchy, relationships,
                  community, indirect communication and local values.
                </p>
                <p className="text-white/70 font-Montserrat leading-relaxed mb-8">
                  This helps organisations move beyond imported assumptions and make decisions that
                  are both evidence-based and contextually credible.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 bg-olive text-white px-6 py-3.5 rounded-full font-semibold text-sm hover:bg-olive/90 transition-colors font-Montserrat"
                >
                  How Our Approach Works
                  <FiArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>

              <div className="hidden md:block relative min-h-[22rem] sm:min-h-[26rem]">
                <div
                  className="hidden sm:block absolute top-2 left-4 w-48 bg-white rounded-xl shadow-xl p-4 animate-float"
                  style={{ transform: 'rotate(-6deg)', animationDelay: '0s' }}
                >
                  <p className="text-[11px] font-semibold text-gray-900 font-MonaSans mb-3">Local Context</p>
                  <BarRow label="Hierarchy" value={72} color="#c55e36" />
                  <BarRow label="Directness" value={35} color="#c55e36" />
                  <BarRow label="Community Ties" value={81} color="#c55e36" />
                </div>

                <div
                  className="absolute top-16 right-2 sm:right-6 w-52 bg-white rounded-xl shadow-xl p-4 animate-float z-10"
                  style={{ transform: 'rotate(4deg)', animationDelay: '0.6s' }}
                >
                  <p className="text-[11px] font-semibold text-gray-900 font-MonaSans mb-3">Sentiment by Market</p>
                  <BarRow label="Lagos" value={82} color="#a3a748" />
                  <BarRow label="Nairobi" value={76} color="#a3a748" />
                  <BarRow label="Accra" value={88} color="#a3a748" />
                </div>

                <div
                  className="hidden sm:flex absolute bottom-24 left-0 items-center gap-2 bg-white rounded-full shadow-xl px-4 py-2.5 animate-float"
                  style={{ transform: 'rotate(-3deg)', animationDelay: '1.1s' }}
                >
                  <FiAlertCircle size={14} className="text-terracotta shrink-0" aria-hidden="true" />
                  <span className="text-[10px] font-semibold text-gray-700 font-Montserrat">
                    Indirect language detected
                  </span>
                </div>

                <div
                  className="absolute bottom-0 right-6 sm:right-10 w-36 bg-white rounded-xl shadow-xl p-4 animate-float"
                  style={{ transform: 'rotate(5deg)', animationDelay: '1.6s' }}
                >
                  <p className="text-[10px] font-semibold text-gray-900 font-MonaSans mb-2.5">Context Score</p>
                  <div
                    className="relative w-14 h-14 mx-auto rounded-full"
                    style={{ background: 'conic-gradient(#FDBF12 0% 91%, #eee 91% 100%)' }}
                  >
                    <div className="absolute inset-1.5 rounded-full bg-white flex items-center justify-center text-[11px] font-bold text-gray-900">
                      91%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
