import React from 'react'
import Link from 'next/link'
import {FiUserCheck, FiAward, FiUsers, FiActivity, FiArrowRight} from 'react-icons/fi'
import type {IconType} from 'react-icons'
import Reveal from '@/components/ui/Reveal'

type UseCase = {
    title: string
    description: string
    cta: string
    color: string
    Icon: IconType
}

const useCases: UseCase[] = [
    {
        title: 'Before a Critical Hire',
        description:
            'Use assessment to add another layer of evidence when appointing someone into a role where getting the decision wrong would be costly.',
        cta: 'Explore Fit by Zanga',
        color: '#c55e36',
        Icon: FiUserCheck,
    },
    {
        title: 'When Someone Becomes a Manager',
        description:
            'Assess their current leadership capability, identify priority development areas and connect them to the right development pathway.',
        cta: 'Explore Leadership Solutions',
        color: '#a3a748',
        Icon: FiAward,
    },
    {
        title: 'When the Team Is Not Working as Well as It Should',
        description:
            'Use team assessment to understand behavioural differences, communication patterns and areas of friction before a planning session, offsite or intervention.',
        cta: 'Explore Team Assessments',
        color: '#0F3460',
        Icon: FiUsers,
    },
    {
        title: 'When You Need to Know How People Are Really Doing',
        description:
            'Run an engagement survey or targeted pulse check to understand employee experience, culture and retention signals.',
        cta: 'Explore Pulse by Zanga',
        color: '#16213E',
        Icon: FiActivity,
    },
]

export default function SmesHowUseZanga() {
    return (
        <section
            style={{backgroundColor: 'rgb(250, 248, 246)'}}
            className="relative md:py-28 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto relative">
                <Reveal>
                    <div
                        className="opacity-80 pointer-events-none absolute -left-24 -bottom-56 sm:left-1/3 sm:-bottom-[16rem]"
                        aria-hidden="true"
                    >
                        <div className="w-[30rem] h-[30rem] rounded-[50%] border-2 border-gray-200/70"/>
                        <div
                            className="absolute w-[22rem] h-[22rem] left-8 bottom-5 rounded-[50%] border-2 border-gray-200/70"/>
                        <div
                            className="absolute w-[15rem] h-[13rem] left-14 bottom-2 rounded-[80%] border-2 border-gray-200/70"/>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
                        <div className="col-span-2">
                            <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                                Use Cases
                            </span>
                            <h2 className="text-3xl md:text-[2.75rem] font-bold text-gray-700 mt-3 mb-4 font-MonaSans leading-[1.1]">
                                How growing businesses<br/> use <strong>zanga</strong>
                            </h2>
                            <p className="text-gray-500 font-Montserrat leading-relaxed max-w-sm">
                                See how growing businesses put <strong>Zanga</strong> to work across hiring,
                                leadership, teams and engagement.
                            </p>
                        </div>

                        <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
                            {useCases.map((useCase) => (
                                <div key={useCase.title} className="h-full flex flex-col">
                                    <span
                                        className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                                        style={{backgroundColor: `${useCase.color}1F`, color: useCase.color}}
                                    >
                                        <useCase.Icon size={20} aria-hidden="true"/>
                                    </span>
                                    <h3 className="text-lg font-bold text-gray-900 font-MonaSans mb-1.5">
                                        {useCase.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm font-Montserrat leading-relaxed mb-3">
                                        {useCase.description}
                                    </p>
                                    <Link
                                        href="#"
                                        className="mt-auto inline-flex items-center gap-1.5 font-semibold text-sm font-Montserrat hover:gap-2.5 transition-all"
                                        style={{color: useCase.color}}
                                    >
                                        {useCase.cta}
                                        <FiArrowRight size={14} aria-hidden="true"/>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
