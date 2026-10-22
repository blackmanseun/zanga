import React from 'react'
import { FiSearch, FiFlag, FiGrid, FiArrowRight } from 'react-icons/fi'
import type { IconType } from 'react-icons'
import Reveal from '@/components/ui/Reveal'
import BoldZanga from '@/components/ui/BoldZanga'
import CardAction from '@/components/ui/CardAction'
import type {ModalKey} from '@/components/modal/ModalProvider'

type UseCase = {
    title: string
    id?: string
    tagline: string
    description: string
    bestFor: string
    cta: string
    // When set, the card opens this modal instead of linking.
    modal?: ModalKey
    href?: string
    image: string
    color: string
    Icon: IconType
}

const useCases: UseCase[] = [
    {
        title: 'Before the Deal',
        id: 'investment-due-diligence',
        tagline: 'Understand the team before you commit.',
        description:
            'Use Diligence alongside financial, commercial and legal diligence to bring structured founder and management insight into the decision.',
        bestFor: 'New investments, significant lending decisions and selected follow-on transactions.',
        cta: 'Talk to Zanga About Early Access',
        modal: 'book-a-demo',
        image: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/190',
        color: '#c55e36',
        Icon: FiSearch,
    },
    {
        title: 'After the Deal',
        tagline: 'Create a clearer leadership baseline.',
        description:
            'Assess founders and management teams after investment or disbursement to understand development priorities and support needs.',
        bestFor: 'Founder development, management strengthening and early value-creation planning.',
        cta: 'Explore Leadership Assessment',
        href: '/assessments/leadership-assessments',
        image: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/167',
        color: '#a3a748',
        Icon: FiFlag,
    },
    {
        title: 'Across the Portfolio',
        id: 'portfolio-monitoring',
        tagline: 'Build a more consistent view of leadership capability.',
        description:
            'Apply a structured approach across selected portfolio companies or borrowers to identify shared capability gaps and areas requiring more support.',
        bestFor: 'Portfolio reviews, value-creation planning and leadership-development programmes.',
        cta: 'Talk to Zanga About Diligence',
        modal: 'book-a-demo',
        image: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/217',
        color: '#0F3460',
        Icon: FiGrid,
    },
]

export default function DiligenceUseCases() {
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
                        Designed for Decisions Across the Deal Cycle
                    </h2>
                </Reveal>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
                    {useCases.map((useCase, i) => (
                        <Reveal key={useCase.title} delayMs={i * 100} className="h-full">
                            <div id={useCase.id} className="h-full flex flex-col scroll-mt-28">
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
                                    <p className="pt-4 mb-5 border-t border-gray-100 text-sm font-Montserrat leading-relaxed text-gray-500">
                                        <span className="font-semibold text-gray-700">Best for:</span> {useCase.bestFor}
                                    </p>
                                    <CardAction
                                        href={useCase.href}
                                        modal={useCase.modal}
                                        className="mt-auto inline-flex items-center gap-1.5 text-terracotta font-semibold text-sm font-Montserrat hover:gap-2.5 transition-all"
                                    >
                                        {useCase.cta}
                                        <FiArrowRight size={14} aria-hidden="true"/>
                                    </CardAction>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
