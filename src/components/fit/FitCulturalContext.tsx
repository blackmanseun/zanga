import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'
import OpenModalButton from '@/components/modal/OpenModalButton'

const tiles: { src: string; shape: string; position?: string }[] = [
    {src: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/204', shape: 'rounded-2xl rounded-br-[50%]'},
    {src: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/176', shape: 'rounded-2xl rounded-bl-[50%]'},
    {src: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/202', shape: 'rounded-2xl rounded-tr-[50%]'},
    {src: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/182', shape: 'rounded-2xl rounded-tl-[50%]', position: 'center 20%'},
]

export default function FitCulturalContext() {
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
                                Because hiring is shaped by culture
                            </h2>

                            <div className="space-y-4">
                                <p className="text-gray-500 font-Montserrat leading-relaxed">
                                    Candidates do not all communicate capability in the same way.
                                </p>
                                <p className="text-gray-500 font-Montserrat leading-relaxed">
                                    Confidence, directness, deference, self-promotion and how people relate to
                                    authority can be influenced by culture and workplace norms. Someone who presents
                                    modestly, for example, is not necessarily less capable than someone who presents
                                    assertively.
                                </p>
                                <p className="text-gray-500 font-Montserrat leading-relaxed">
                                    <strong>Zanga</strong> brings cultural intelligence into how people data is
                                    interpreted, helping organisations look beyond assumptions and understand what the
                                    assessment insight means in the environment the person will actually work in.
                                </p>
                            </div>

                            <OpenModalButton
                                modal="methodology-hiring"
                                className="mt-8 inline-flex items-center justify-center gap-2 bg-olive text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-olive/90 transition-colors font-Montserrat"
                            >
                                Learn About Zanga&apos;s Methodology
                                <FiArrowRight size={16} aria-hidden="true"/>
                            </OpenModalButton>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
