import React from 'react'
import {FiAward, FiBarChart2, FiSearch, FiUserCheck, FiArrowRight} from 'react-icons/fi'
import type {IconType} from 'react-icons'
import Reveal from '@/components/ui/Reveal'
import CardAction from '@/components/ui/CardAction'
import type {ModalKey} from '@/components/modal/ModalProvider'

type UseCase = {
    title: string
    description: string
    cta: string
    // When set, the card opens this modal instead of linking.
    modal?: ModalKey
    href?: string
    color: string
    Icon: IconType
}

const useCases: UseCase[] = [
    {
        title: 'Pre-Investment Founder and Management Assessment',
        description:
            'Understand the team behind the investment case. Use Diligence by Zanga to add structured leadership and behavioural insight alongside the usual due diligence procedures.',
        cta: 'Talk to Zanga About Diligence',
        modal: 'book-a-demo',
        color: '#c55e36',
        Icon: FiSearch,
    },
    {
        title: 'Post-Investment Leadership Baselines',
        description:
            'Gain an early understanding of the team. Assess leadership capability shortly after a deal closes, so the first phase of the investment is informed by structured insight.',
        cta: 'Fit by Zanga',
        href: '/products/fit-by-zanga',
        color: '#0F3460',
        Icon: FiAward,
    },
    {
        title: 'Portfolio-Wide Capability Reviews',
        description:
            'Evaluate capability across portfolio companies. Apply a consistent assessment approach across your portfolio to understand where capability is strongest and where support should be prioritised.',
        cta: 'Explore Leadership Solutions',
        href: '/assessments/leadership-assessments',
        color: '#16213E',
        Icon: FiBarChart2,
    },
    {
        title: 'Executive and C-Suite Hiring',
        description:
            'Bring more structure to critical leadership appointments. Use structured assessment insight alongside interviews, experience and references to support senior leadership hiring and promotion decisions.',
        cta: 'Explore Fit by Zanga',
        href: '/products/fit-by-zanga',
        color: '#c55e36',
        Icon: FiUserCheck,
    },
]

export default function InvestorsFundManagersHowUseZanga() {
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
                                How investors and fund managers<br/> use <strong>Zanga</strong>
                            </h2>
                            <p className="text-gray-500 font-Montserrat leading-relaxed max-w-sm">
                                See how investors and fund managers put <strong>Zanga</strong> to work across
                                diligence, portfolio support and executive hiring.
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
                                    <CardAction
                                        href={useCase.href}
                                        modal={useCase.modal}
                                        className="mt-auto inline-flex items-center gap-1.5 font-semibold text-sm font-Montserrat hover:gap-2.5 transition-all"
                                        style={{color: useCase.color}}
                                    >
                                        {useCase.cta}
                                        <FiArrowRight size={14} aria-hidden="true"/>
                                    </CardAction>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
