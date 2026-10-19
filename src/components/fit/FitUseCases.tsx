import React from 'react'
import Link from 'next/link'
import { FiAward, FiUsers, FiRepeat, FiArrowRight } from 'react-icons/fi'
import type { IconType } from 'react-icons'
import Reveal from '@/components/ui/Reveal'
import BoldZanga from '@/components/ui/BoldZanga'
import OpenModalButton from '@/components/modal/OpenModalButton'

type UseCase = {
    title: string
    tagline: string
    description: string
    cta: string
    // Opens the Book a Demo modal instead of linking out.
    demo?: boolean
    image: string
    color: string
    Icon: IconType
}

const useCases: UseCase[] = [
    {
        title: 'Critical and Specialist Hires',
        tagline: 'Bring more evidence to appointments where getting the decision right matters most.',
        description:
            'Use structured assessment for specialist, leadership or other business-critical positions where a deeper understanding of the candidate is valuable.',
        cta: 'Request a Demo',
        demo: true,
        image: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/87',
        color: '#c55e36',
        Icon: FiAward,
    },
    {
        title: 'Graduate and Volume Recruitment',
        tagline: 'Create greater consistency across larger candidate pools.',
        description:
            'Apply a structured assessment process across candidates to support shortlisting and give hiring teams a common basis for comparison.',
        cta: 'Explore Psychometric Assessments',
        image: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/77',
        color: '#a3a748',
        Icon: FiUsers,
    },
    {
        title: 'Ongoing Recruitment Programmes',
        tagline: 'Build a more consistent approach to selection.',
        description:
            'Integrate Fit into recurring recruitment across business units, functions or locations so the quality of assessment does not depend entirely on who is running each hiring process.',
        cta: 'Talk to Zanga About Hiring Programmes',
        image: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/172',
        color: '#0F3460',
        Icon: FiRepeat,
    },
]

export default function FitUseCases() {
    return (
        <section
            style={{ backgroundColor: 'rgb(250, 248, 246)' }}
            className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <Reveal className="text-center mb-16">
                    <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                        Use Cases
                    </span>
                    <h2 className="text-3xl md:text-[2.8rem] leading-[1.1] font-bold text-gray-700 mt-3 font-MonaSans max-w-2xl mx-auto">
                        Designed for Different Hiring Needs
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
                                        className="rounded-2xl w-full h-full object-cover object-[25%_30%]"
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
                                        <BoldZanga text={useCase.description}/>
                                    </p>
                                    {useCase.demo ? (
                                        <OpenModalButton
                                            modal="book-a-demo"
                                            className="mt-auto self-start inline-flex items-center gap-1.5 text-terracotta font-semibold text-sm font-Montserrat hover:gap-2.5 transition-all"
                                        >
                                            {useCase.cta}
                                            <FiArrowRight size={14} aria-hidden="true"/>
                                        </OpenModalButton>
                                    ) : (
                                        <Link
                                            href="#"
                                            className="mt-auto inline-flex items-center gap-1.5 text-terracotta font-semibold text-sm font-Montserrat hover:gap-2.5 transition-all"
                                        >
                                            {useCase.cta}
                                            <FiArrowRight size={14} aria-hidden="true"/>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
