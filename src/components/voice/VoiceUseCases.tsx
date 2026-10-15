import React from 'react'
import Link from 'next/link'
import { FiHeadphones, FiClipboard, FiShield, FiArrowRight, FiCheck } from 'react-icons/fi'
import type { IconType } from 'react-icons'
import Reveal from '@/components/ui/Reveal'

type UseCase = {
    title: string
    tagline: string
    description: string
    includes: string[]
    bestFor?: string
    image: string
    position?: string
    color: string
    Icon: IconType
}

const useCases: UseCase[] = [
    {
        title: 'Listen',
        tagline: 'Create a structured listening channel.',
        description:
            'For organisations that need a clear way to receive, record and organise stakeholder feedback.',
        includes: [
            'Stakeholder intake',
            'Case logging',
            'Basic categorisation',
            'Escalation to designated focal points',
            'Periodic summary reporting',
        ],
        bestFor: 'Organisations formalising stakeholder feedback for the first time.',
        image: '/images/158.jpg',
        color: '#c55e36',
        Icon: FiHeadphones,
    },
    {
        title: 'Manage',
        tagline: 'Add case management and recurring insight.',
        description:
            'For organisations with ongoing stakeholder exposure and a need for stronger oversight.',
        includes: [
            'Case-management dashboard',
            'Issue tagging',
            'Escalation workflows',
            'Recurring insight reports',
            'Trend and location analysis',
            'Regular review sessions',
        ],
        bestFor: 'Organisations with active stakeholder, community or ESG-management responsibilities.',
        image: '/images/183.jpg',
        position: 'object-[50%_90%]',
        color: '#a3a748',
        Icon: FiClipboard,
    },
    {
        title: 'Assure',
        tagline: 'Build a more comprehensive stakeholder-listening system.',
        description:
            'For larger or more complex organisations requiring multiple listening channels, deeper reporting and stronger governance around stakeholder issues.',
        includes: [
            'Multiple intake channels',
            'Custom issue taxonomy',
            'Escalation matrix',
            'Stakeholder risk views',
            'Leadership reporting',
            'Team training',
            'Annual stakeholder-engagement summaries',
            'Advisory support',
        ],
        image: '/images/212.jpg',
        color: '#0F3460',
        Icon: FiShield,
    },
]

export default function VoiceUseCases() {
    return (
        <section
            style={{ backgroundColor: 'rgb(250, 248, 246)' }}
            className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <Reveal className="text-center mb-16">
                    <h2 className="text-3xl md:text-[2.8rem] leading-[1.1] font-bold text-gray-700 font-MonaSans max-w-2xl mx-auto">
                        Choose the Right Level of Voice by Zanga
                    </h2>
                </Reveal>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
                    {useCases.map((useCase, i) => (
                        <Reveal key={useCase.title} delayMs={i * 100} className="h-full">
                            <div className="h-full flex flex-col">
                                <div
                                    className="rounded-2xl p-1 bg-white overflow-hidden shrink-0 h-48 md:h-56"
                                >
                                    <img
                                        src={useCase.image}
                                        alt=""
                                        className={`rounded-2xl w-full h-full object-cover ${useCase.position ?? 'object-[25%_30%]'}`}
                                    />
                                </div>

                                <div className="relative -mt-24 mx-3 bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col flex-1">
                                    <span
                                        className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                                        style={{ backgroundColor: `${useCase.color}1F`, color: useCase.color }}
                                    >
                                        <useCase.Icon size={18} aria-hidden="true"/>
                                    </span>
                                    <h3 className="text-olive text-sm font-semibold font-Montserrat mb-2.5">
                                        {useCase.title}
                                    </h3>
                                    <p className="text-lg font-bold text-gray-700 font-MonaSans mb-1.5">
                                        {useCase.tagline}
                                    </p>
                                    <p className="text-gray-500 text-sm font-Montserrat leading-relaxed mb-5">
                                        {useCase.description}
                                    </p>

                                    <p className="text-gray-700 text-sm font-semibold font-Montserrat mb-2.5">
                                        Can include:
                                    </p>
                                    <ul className="space-y-2 mb-5">
                                        {useCase.includes.map((item) => (
                                            <li key={item} className="flex items-start gap-2 text-gray-500 text-sm font-Montserrat leading-relaxed">
                                                <FiCheck
                                                    size={14}
                                                    aria-hidden="true"
                                                    className="mt-[3px] shrink-0"
                                                    style={{ color: useCase.color }}
                                                />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    {useCase.bestFor && (
                                        <p className="mt-auto pt-4 border-t border-gray-100 text-sm font-Montserrat leading-relaxed text-gray-500">
                                            <span className="font-semibold text-gray-700">Best for:</span> {useCase.bestFor}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal className="mt-12 text-center">
                    <Link
                        href="#"
                        className="inline-flex items-center justify-center gap-2 bg-terracotta text-white px-7 py-3.5 rounded-md font-semibold text-sm font-Montserrat hover:bg-terracotta/90 transition-colors"
                    >
                        Talk to Zanga About the Right Package
                        <FiArrowRight size={16} aria-hidden="true"/>
                    </Link>
                </Reveal>
            </div>
        </section>
    )
}
