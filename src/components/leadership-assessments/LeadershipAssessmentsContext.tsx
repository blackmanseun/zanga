import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'
import BoldZanga from '@/components/ui/BoldZanga'

function Panel({
    src,
    alt,
    className = '',
    objectPosition = '[object-position:50%_50%]',
}: {
    src: string
    alt: string
    className?: string
    objectPosition?: string
}) {
    return (
        <div className={`relative overflow-hidden bg-gray-100 border border-gray-200 ${className}`}>
            <Image
                src={src}
                alt={alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className={`object-cover ${objectPosition}`}
            />
        </div>
    )
}

export default function LeadershipAssessmentsContext() {
    return (
        <section
            className="md:py-20 py-14 px-4 sm:px-6 lg:px-8 bg-white"
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <Reveal>
                    <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                        Cultural Context
                    </span>
                    <h2 className="text-3xl md:text-[2.8rem] leading-[1.1] font-bold mt-3 mb-6 font-MonaSans text-gray-700">
                        Built for the context in which leadership happens
                    </h2>
                    <p className="text-gray-700 font-semibold font-Montserrat leading-relaxed mb-5">
                        Leadership does not look the same everywhere.
                    </p>
                    <p className="text-gray-500 text-[16px] font-Montserrat leading-relaxed mb-5">
                        Leadership behaviour is shaped by more than individual capability.
                    </p>
                    <p className="text-gray-500 text-[16px] font-Montserrat leading-relaxed mb-5">
                        Culture, hierarchy, communication norms, relationships and expectations about
                        authority can all influence how leadership is demonstrated and experienced.
                    </p>
                    <p className="text-gray-500 text-[16px] font-Montserrat leading-relaxed mb-8">
                        <BoldZanga text="Zanga's approach is designed for African and other high-context workplaces, helping organisations interpret leadership data with greater sensitivity to the environment in which leaders actually operate."/>
                    </p>

                    <div className="rounded-xl border border-gray-200 bg-white px-6 py-5 mb-8">
                        <p className="text-gray-400 text-sm font-Montserrat leading-relaxed mb-2">
                            The goal is not simply to ask: <em className="italic">&ldquo;How did this leader score?&rdquo;</em>
                        </p>
                        <p className="text-gray-800 font-semibold font-Montserrat leading-relaxed">
                            But: <span className="text-olive">&ldquo;What does this insight mean for this leader, this organisation and this context?&rdquo;</span>
                        </p>
                    </div>

                    <Link
                        href="#"
                        className="inline-flex items-center justify-center gap-2 bg-olive text-white px-8 py-3 rounded-md font-semibold text-base hover:bg-olive/90 transition-colors font-Montserrat"
                    >
                        Explore Our Methodology
                        <FiArrowRight size={16} aria-hidden="true"/>
                    </Link>
                </Reveal>

                <Reveal delayMs={120}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-4">
                            <Panel
                                src="/images/43.jpg"
                                alt="A leader listening attentively in a team discussion"
                                className="md:h-[500px] h-56 rounded-2xl rounded-br-none"
                                objectPosition="[object-position:50%_32%] md:[object-position:50%_55%]"
                            />
                            <Panel
                                src="/images/13.jpg"
                                alt="Colleagues in conversation across a table"
                                className="md:h-40 h-28 md:w-[50%] w-[80%] ml-auto rounded-2xl rounded-tr-none"
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="md:h-20 h-16 rounded-2xl rounded-bl-none bg-terracotta/25 md:w-[30%] w-[50%]" aria-hidden="true"/>
                            <Panel
                                src="/images/42.jpg"
                                alt="A team collaborating in an open workspace"
                                className="md:h-[400px] h-36 rounded-2xl rounded-bl-none"
                                objectPosition="[object-position:0%_25%]"
                            />
                            <Panel
                                src="/images/41.jpg"
                                alt="A leader reviewing notes with a colleague"
                                className="md:h-40 h-28 rounded-2xl rounded-tl-none md:w-[50%] w-[70%]"
                                objectPosition="[object-position:50%_20%]"
                            />
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
