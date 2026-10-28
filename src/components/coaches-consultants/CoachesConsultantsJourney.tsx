import React from 'react'
import {FiAward, FiBriefcase, FiTarget, FiUsers, FiArrowRight} from 'react-icons/fi'
import type {IconType} from 'react-icons'
import Reveal from '@/components/ui/Reveal'
import OpenNavMenuButton from '@/components/ui/OpenNavMenuButton'
import CardAction from '@/components/ui/CardAction'

type UseCase = {
    title: string
    description: string
    cta: string
    href?: string
    // When set, the card opens this navbar dropdown instead of linking.
    menu?: string
    color: string
    Icon: IconType
}

const useCases: UseCase[] = [
    {
        title: 'Executive and Leadership Coaching',
        description:
            'Start coaching with a clearer evidence base. Use leadership assessments to identify strengths, blind spots and development priorities before deeper coaching work begins.',
        cta: 'Fit by Zanga',
        href: '/products/fit-by-zanga',
        color: '#c55e36',
        Icon: FiAward,
    },
    {
        title: 'Leadership Development Programmes',
        description:
            'Make development more targeted. Use assessment before a leadership programme to identify what participants actually need and shape development around those priorities.',
        cta: 'Explore Leadership Solutions',
        href: '/assessments/leadership-assessments',
        color: '#0F3460',
        Icon: FiTarget,
    },
    {
        title: 'Team Development and Offsites',
        description:
            'Bring a shared language into the room. Use team and behavioural assessments to help groups understand working styles, communication patterns and areas of friction.',
        cta: 'Explore Workforce Assessments',
        color: '#16213E',
        Icon: FiUsers,
    },
    {
        title: 'Organisational Consulting',
        description:
            'Add people intelligence to broader transformation work. Bring leadership, engagement or workforce data into organisational-development, culture or change engagements where people insight can strengthen the diagnosis.',
        cta: 'Explore Zanga Solutions',
        menu: 'Solutions',
        color: '#c55e36',
        Icon: FiBriefcase,
    },
]

export default function CoachesConsultantsWaysToUse() {
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
                                Ways to use <strong>Zanga</strong><br/> in your practice
                            </h2>
                            <p className="text-gray-500 font-Montserrat leading-relaxed max-w-sm">
                                See how coaches and consultants put <strong>Zanga</strong> to work across
                                coaching, leadership programmes, team work and consulting.
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
                                    {useCase.menu ? (
                                        <OpenNavMenuButton
                                            menu={useCase.menu}
                                            className="mt-auto inline-flex items-center gap-1.5 font-semibold text-sm font-Montserrat hover:gap-2.5 transition-all"
                                            style={{color: useCase.color}}
                                        >
                                            {useCase.cta}
                                            <FiArrowRight size={14} aria-hidden="true"/>
                                        </OpenNavMenuButton>
                                    ) : (
                                        <CardAction
                                            href={useCase.href}
                                            className="mt-auto inline-flex items-center gap-1.5 font-semibold text-sm font-Montserrat hover:gap-2.5 transition-all"
                                            style={{color: useCase.color}}
                                        >
                                            {useCase.cta}
                                            <FiArrowRight size={14} aria-hidden="true"/>
                                        </CardAction>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
