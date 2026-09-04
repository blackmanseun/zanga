import React from 'react'
import Image from 'next/image'
import { FiActivity, FiAlertTriangle, FiAward, FiTarget, FiCheckCircle } from 'react-icons/fi'
import type { IconType } from 'react-icons'
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
    // Tailwind arbitrary-value object-position utilities (supports responsive
    // prefixes, e.g. "[object-position:50%_32%] md:[object-position:50%_55%]").
    // Inline styles can't take responsive prefixes, so this can't be a plain "x% y%" string.
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

type Outcome = {
    title: string
    description: string
    Icon: IconType
    color: string
}

const outcomes: Outcome[] = [
    {
        title: 'Stronger Employee Engagement',
        description: 'Understand the factors shaping employee experience and prioritise actions that can strengthen engagement.',
        Icon: FiActivity,
        color: '#c55e36',
    },
    {
        title: 'Earlier Visibility of Workforce Risk',
        description: 'Identify emerging concerns before they become larger retention, culture or performance issues.',
        Icon: FiAlertTriangle,
        color: '#a3a748',
    },
    {
        title: 'Better Leadership Decisions',
        description: 'Give executives and managers evidence they can use to understand what is happening across their teams.',
        Icon: FiAward,
        color: '#0F3460',
    },
    {
        title: 'More Focused People Interventions',
        description: 'Target development, communication, recognition, culture or management initiatives where the data shows they are most needed.',
        Icon: FiTarget,
        color: '#FDBF12',
    },
    {
        title: 'Stronger Organisational Accountability',
        description: 'Track whether actions taken after employee feedback are producing meaningful change over time.',
        Icon: FiCheckCircle,
        color: '#c55e36',
    },
]

export default function PulseAchieve() {
    return (
        <section className="md:py-20 py-14 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                    Pulse by Zanga
                </span>

                <div className="max-w-3xl">
                    <h2 className="text-3xl md:text-[2.8rem] font-bold mt-3 mb-6 font-MonaSans leading-tight text-gray-700">
                        What better workforce <br className="hidden md:block"/>insight can help you achieve
                    </h2>
                </div>

                <div className="grid lg:grid-cols-[550px_1fr] gap-10 lg:gap-16 items-start mt-4">
                    <div>
                        <p className="text-gray-500 font-Montserrat leading-relaxed mb-8">
                            <BoldZanga text="Pulse gives leadership and HR teams a clearer evidence base for deciding where attention and investment are most needed."/>
                        </p>

                        <div>
                            {outcomes.map((outcome, i) => (
                                <div key={outcome.title} className="flex gap-4">
                                    <div className="flex flex-col items-center">
                                        <span
                                            className="shrink-0 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center"
                                            style={{ color: outcome.color }}
                                        >
                                            <outcome.Icon size={22} aria-hidden="true" />
                                        </span>
                                        {i < outcomes.length - 1 && (
                                            <span
                                                className="flex-1 w-px border-l border-dashed border-gray-300 my-1"
                                                aria-hidden="true"
                                            />
                                        )}
                                    </div>
                                    <div className={i < outcomes.length - 1 ? 'pb-8' : ''}>
                                        <h3 className="font-bold text-gray-900 font-MonaSans mb-1">{outcome.title}</h3>
                                        <p className="text-sm text-gray-600 font-Montserrat leading-relaxed">
                                            {outcome.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8 lg:mt-0 grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-4">
                            <Panel
                                src="/images/31.jpg"
                                alt="A team celebrating over their annual report findings"
                                className="md:h-96 h-56 rounded-2xl rounded-br-none"
                                objectPosition="[object-position:50%_32%] md:[object-position:50%_55%]"
                            />
                            <Panel
                                src="/images/headshot/8.jpg"
                                alt="Colleagues working together in an open office"
                                className="md:h-48 h-28 md:w-[50%] w-[80%] ml-auto rounded-2xl rounded-tr-none"
                                objectPosition="[object-position:50%_10%]"
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="md:h-20 h-16 rounded-2xl rounded-bl-none bg-terracotta/25 md:w-[30%] w-[50%]" aria-hidden="true"/>
                            <Panel
                                src="/images/3.jpg"
                                alt="A team bringing their hands together in agreement"
                                className="md:h-72 h-36 rounded-2xl rounded-bl-none"
                                objectPosition="[object-position:0%_25%]"
                            />
                            <Panel
                                src="/images/headshot/2.png"
                                alt="A team bringing their hands together in agreement"
                                className="md:h-48 h-28 rounded-2xl rounded-tl-none md:w-[50%] w-[70%]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
