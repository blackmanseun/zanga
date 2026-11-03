import React from 'react'
import Image from 'next/image'
import { FiCheckCircle } from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'

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

const points: string[] = [
    'Employee engagement and sentiment',
    'The factors shaping employee experience',
    'Organisational culture in practice',
    'Team effectiveness and working dynamics',
    'Retention and disengagement signals',
    'Differences across teams, functions, and levels',
    'Workforce patterns that may require attention',
    'Areas where organisational priorities and employee experience may not align',
]

export default function WorkforceAssessmentsClarity() {
    return (
        <section
            className="bg-white relative overflow-hidden pb-20 md:py-28 px-4 sm:px-6 lg:px-8"
        >
            <div className="relative max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <Reveal>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-4">
                                <Panel
                                    src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/255"
                                    alt="An employee reviewing work on a laptop"
                                    className="md:h-[500px] h-56 rounded-2xl rounded-br-none"
                                    objectPosition="[object-position:50%_20%]"
                                />
                                <Panel
                                    src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/178"
                                    alt="Two colleagues in conversation"
                                    className="md:h-44 h-28 md:w-[50%] w-[80%] ml-auto rounded-2xl rounded-tr-none"
                                />
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="md:h-20 h-16 rounded-2xl rounded-bl-none bg-terracotta/25 md:w-[30%] w-[50%]" aria-hidden="true"/>
                                <Panel
                                    src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/254"
                                    alt="An employee focused on his laptop at a desk"
                                    className="md:h-[400px] h-36 rounded-2xl rounded-bl-none"
                                    objectPosition="[object-position:50%_25%]"
                                />
                                <Panel
                                    src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/154"
                                    alt="A team member working at her desk"
                                    className="md:h-44 h-28 rounded-2xl rounded-tl-none md:w-[50%] w-[70%]"
                                    objectPosition="[object-position:50%_20%]"
                                />
                            </div>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div className="md:max-w-lg xl:max-w-xl">
                            <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                                Workforce Clarity
                            </span>

                            <h2 className="mb-6 text-gray-700 text-3xl md:text-[2.8rem] font-bold mt-3 font-MonaSans leading-[1.1]">
                                See your workforce <br className="hidden md:block"/>more clearly
                            </h2>

                            <p className="text-gray-500 font-Montserrat leading-relaxed mb-4">
                                Workforce decisions are often informed by surveys, manager feedback, exit
                                interviews, HR data and informal conversations.
                            </p>

                            <p className="text-gray-500 font-Montserrat leading-relaxed mb-6">
                                Each provides part of the picture.
                            </p>

                            <p className="text-gray-700 font-semibold font-Montserrat mb-4">
                                <strong>Zanga</strong> brings these questions into a more structured assessment approach, helping organisations understand:
                            </p>

                            <ul className="space-y-3 mb-6">
                                {points.map((point) => (
                                    <li
                                        key={point}
                                        className="flex items-start gap-3 text-md text-gray-600 font-Montserrat leading-relaxed"
                                    >
                                        <FiCheckCircle className="text-olive shrink-0 mt-0.5" size={16} aria-hidden="true"/>
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            <p className="text-gray-500 font-Montserrat leading-relaxed">
                                The result is a clearer evidence base for engagement, culture, organisational
                                development, retention and workforce planning.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
