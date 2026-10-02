import React from 'react'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'

const tiles: { src: string; shape: string; position?: string }[] = [
    {src: '/images/114.jpg', shape: 'rounded rounded-br-[50%]'},
    {src: '/images/25.jpg', shape: 'rounded rounded-bl-[50%]'},
    {src: '/images/106.jpg', shape: 'rounded rounded-tr-[50%]'},
    {src: '/images/79.jpg', shape: 'rounded rounded-tl-[50%]', position: 'center 20%'},
]

export default function PulseCulturalContext() {
    return (
        <section
            style={{ backgroundColor: 'rgb(250, 248, 246)' }}
            className="relative overflow-hidden pt-14 pb-20 md:py-28 px-4 sm:px-6 lg:px-8"
        >
            <div className="relative max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <Reveal>
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full mx-auto">
                            {tiles.map((tile) => (
                                <div
                                    key={tile.src}
                                    className={`aspect-square overflow-hidden ${tile.shape}`}
                                >
                                    <img
                                        src={tile.src}
                                        alt=""
                                        className="w-full h-full object-cover"
                                        style={{objectPosition: tile.position}}
                                    />
                                </div>
                            ))}
                        </div>
                    </Reveal>

                    <Reveal>
                        <div className="md:max-w-lg xl:max-w-xl">
                            <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                                Built for the Context in Which People Work
                            </span>

                            <h2 className="mb-6 text-gray-700 text-3xl md:text-[2.8rem] font-bold mt-3 font-MonaSans leading-[1.1]">
                                Because employee experience is shaped by culture
                            </h2>

                            <div className="space-y-4">
                                <p className="text-gray-500 font-Montserrat leading-relaxed">
                                    The same workplace question can carry different meanings across different
                                    organisational and cultural environments.
                                </p>
                                <p className="text-gray-500 font-Montserrat leading-relaxed">
                                    Leadership style, hierarchy, communication norms, relationships, trust and
                                    community can all influence how employees experience work, and how comfortable
                                    they are expressing what they really think.
                                </p>
                                <p className="text-gray-500 font-Montserrat leading-relaxed">
                                    <strong>Zanga</strong> brings cultural intelligence into the way employee sentiment is
                                    collected, interpreted and translated into action.
                                </p>
                                <p className="text-gray-500 font-Montserrat leading-relaxed">
                                    This helps organisations move
                                    beyond generic engagement benchmarks to understand what employee feedback means
                                    within their own context.
                                </p>
                            </div>

                            <Link
                                href="#"
                                className="mt-8 inline-flex items-center justify-center gap-2 bg-olive text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-olive/90 transition-colors font-Montserrat"
                            >
                                Learn About Zanga&apos;s Methodology
                                <FiArrowRight size={16} aria-hidden="true"/>
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
