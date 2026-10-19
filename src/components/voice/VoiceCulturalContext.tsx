import React from 'react'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'

const tiles: { src: string; shape: string; position?: string }[] = [
    {src: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/175', shape: 'rounded-2xl rounded-br-[50%]'},
    {src: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/137', shape: 'rounded-2xl rounded-bl-[50%]'},
    {src: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/205', shape: 'rounded-2xl rounded-tr-[50%]'},
    {src: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/145', shape: 'rounded-2xl rounded-tl-[50%]', position: 'center 20%'},
]

export default function VoiceCulturalContext() {
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
                                Built for the Context in Which People Speak
                            </span>

                            <h2 className="mb-6 text-gray-700 text-3xl md:text-[2.8rem] font-bold mt-3 font-MonaSans leading-[1.1]">
                                Because speaking up depends on trust
                            </h2>

                            <div className="space-y-4">
                                <p className="text-gray-500 font-Montserrat leading-relaxed">
                                    People do not always raise concerns directly.
                                </p>
                                <p className="text-gray-500 font-Montserrat leading-relaxed">
                                    Hierarchy, relationships, fear of consequences, language, local norms and
                                    confidence in the organisation can all influence whether someone speaks, and how
                                    they choose to do it.
                                </p>
                                <p className="text-gray-500 font-Montserrat leading-relaxed">
                                    <strong>Zanga</strong> brings cultural intelligence into the design and
                                    interpretation of stakeholder listening.
                                </p>
                                <p className="text-gray-500 font-Montserrat leading-relaxed">
                                    This helps organisations create channels that are more appropriate to the people
                                    using them and interpret feedback with greater sensitivity to the context in which
                                    it was given.
                                </p>
                            </div>

                            <Link
                                href="#"
                                className="mt-8 inline-flex items-center justify-center gap-2 bg-olive text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-olive/90 transition-colors font-Montserrat"
                            >
                                Explore Our Methodology
                                <FiArrowRight size={16} aria-hidden="true"/>
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
