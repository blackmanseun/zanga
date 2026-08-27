import React from 'react'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'

type OrbitPhoto = {
  src: string
  size: number
  x: string
  y: string
  rotate: number
  delay: number
}

const orbitPhotos: OrbitPhoto[] = [
  { src: '/images/2.jpg', size: 80, x: '50%', y: '10.7%', rotate: -6, delay: 0 },
  { src: '/images/9.jpg', size: 64, x: '77.8%', y: '22.2%', rotate: 4, delay: 0.25 },
  { src: '/images/11.jpg', size: 80, x: '89.3%', y: '50%', rotate: -3, delay: 0.5 },
  { src: '/images/13.jpg', size: 64, x: '77.8%', y: '77.8%', rotate: 5, delay: 0.75 },
  { src: '/images/15.jpg', size: 80, x: '50%', y: '89.3%', rotate: -5, delay: 1 },
  { src: '/images/7.jpg', size: 64, x: '22.2%', y: '77.8%', rotate: 3, delay: 1.25 },
  { src: '/images/10.jpg', size: 80, x: '10.7%', y: '50%', rotate: -4, delay: 1.5 },
  { src: '/images/3.jpg', size: 64, x: '22.2%', y: '22.2%', rotate: 6, delay: 1.75 },
]

export default function CulturalContext() {
  return (
    <section className="md:py-28 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div
            className="relative overflow-hidden md:rounded-[2rem] px-4 py-20 sm:p-12 lg:p-16"
            style={{ backgroundColor: '#282A30' }}
          >
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-[2rem] md:text-[2.75rem] font-bold text-white mb-4 font-MonaSans leading-tight">
                  Context changes <br/><span className="text-olive">what the data means.</span>
                </h2>
                <p className="text-white/70 font-Montserrat leading-relaxed mb-4">
                  Leadership, engagement and stakeholder sentiment are shaped by culture. The same
                  behaviour, response or score can carry different meaning across workplaces and
                  markets. <strong>Zanga</strong> is designed to interpret people data with greater sensitivity to
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

              <div className="hidden md:flex items-center justify-center">
                <div className="relative w-[300px] h-[300px] lg:w-[450px] lg:h-[450px]">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        'radial-gradient(circle, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 45%, transparent 70%)',
                    }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-[12%] rounded-full border border-white/10"
                    aria-hidden="true"
                  />

                  {orbitPhotos.map((photo) => (
                    <div
                      key={photo.src}
                      className="absolute"
                      style={{ left: photo.x, top: photo.y, transform: 'translate(-50%, -50%)' }}
                    >
                      <div
                        className="animate-float rounded-full overflow-hidden shadow-xl ring-4 ring-[#282A30]/40"
                        style={{
                          width: photo.size,
                          height: photo.size,
                          '--card-rotate': `${photo.rotate}deg`,
                          animationDelay: `${photo.delay}s`,
                        } as React.CSSProperties}
                      >
                        <img
                          src={photo.src}
                          alt=""
                          aria-hidden="true"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ))}

                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-28 h-28 lg:w-36 lg:h-36 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/40">
                      <img
                        src="/images/14.jpg"
                        alt="Zanga helps organisations understand the people behind the data"
                        className="w-full h-full object-cover"
                      />
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
