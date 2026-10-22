import React from 'react'
import Link from 'next/link'
import {FiArrowRight, FiAward} from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'

export default function CoachesConsultantsCertification() {
    return (
        <section className="bg-white pb-20 md:pb-28 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <div className="relative overflow-hidden rounded-2xl bg-olive/10 md:px-12 px-5 md:py-12 py-8 grid lg:grid-cols-[1fr_auto] gap-8 items-center">
                        <div
                            className="pointer-events-none absolute -right-16 -bottom-24"
                            aria-hidden="true"
                        >
                            <div className="w-[18rem] h-[18rem] rounded-[50%] border-2 border-olive/20"/>
                            <div className="absolute w-[10rem] h-[10rem] right-12 bottom-8 rounded-[50%] border-2 border-olive/20"/>
                        </div>

                        <div className="relative flex flex-col sm:flex-row gap-6">
                            <span className="w-14 h-14 shrink-0 rounded-full bg-olive text-white flex items-center justify-center">
                                <FiAward size={24} aria-hidden="true"/>
                            </span>
                            <div>
                                <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                                    Start With Zanga Certification
                                </span>
                                <h2 className="text-2xl md:text-[2rem] font-bold mt-3 mb-4 font-MonaSans leading-tight text-gray-700 max-w-3xl">
                                    Build the foundation for using Zanga&apos;s assessment tools confidently in
                                    your practice
                                </h2>
                                <p className="text-gray-500 font-Montserrat leading-relaxed max-w-3xl">
                                    Zanga Certification Training introduces coaches and practitioners to the
                                    relevant methodologies, assessments and reporting approaches, helping you
                                    apply <strong>Zanga</strong> tools effectively within client engagements.
                                </p>
                            </div>
                        </div>

                        <Link
                            href="/partners/become-a-partner#certification"
                            className="relative self-start lg:self-center inline-flex items-center justify-center gap-2 bg-olive text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-olive/90 transition-colors font-Montserrat"
                        >
                            Explore Certification
                            <FiArrowRight size={16} aria-hidden="true"/>
                        </Link>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
