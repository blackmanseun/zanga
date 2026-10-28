import React from 'react'
import {FiArrowRight} from 'react-icons/fi'
import type {ModalKey} from '@/components/modal/ModalProvider'
import Reveal from '@/components/ui/Reveal'
import OpenNavMenuButton from '@/components/ui/OpenNavMenuButton'
import CardAction from '@/components/ui/CardAction'

type Stage = {
    number: string
    title: string
    description: string
    cta: string
    color: string
    // The card's action either opens a navbar dropdown or a modal.
    menu?: string
    modal?: ModalKey
}

const stages: Stage[] = [
    {
        number: '01',
        title: 'Explore the Opportunity',
        description:
            "Discover how Zanga's culturally intelligent assessments and reporting tools can strengthen your coaching, leadership development or consulting engagements, and understand the available solutions, practitioner requirements and partnership options.",
        cta: 'Explore Zanga Solutions',
        menu: 'Solutions',
        color: '#c55e36',
    },
    {
        number: '02',
        title: 'Build Your Capability',
        description:
            'Develop the knowledge and practical skills to interpret assessment results and apply them confidently in client engagements. Zanga Certification Training and practitioner resources provide a foundation for assessment-led coaching, development and consulting.',
        cta: 'Explore Certification',
        menu: 'Solutions',
        color: '#0F3460',
    },
    {
        number: '03',
        title: 'Integrate Zanga Into Your Practice',
        description:
            'Apply Zanga assessments across existing client relationships, coaching programmes, leadership development engagements and organisational consulting assignments, using structured insight to focus interventions and inform more targeted development.',
        cta: 'Explore Practitioner Solutions',
        menu: 'Solutions',
        color: '#16213E',
    },
    {
        number: '04',
        title: 'Deliver and Grow',
        description:
            'Expand your service offering through assessment-led engagements, client-ready reports and structured development programmes. Depending on your partnership model, opportunities may include recurring assessment delivery, collaborative engagements and wider business-development support.',
        cta: 'Become a Zanga Partner',
        modal: 'partner-with-zanga',
        color: '#c55e36',
    },
]

export default function CoachesConsultantsJourney() {
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
                                The Pathway
                            </span>
                            <h2 className="text-3xl md:text-[2.75rem] font-bold text-gray-700 mt-3 mb-4 font-MonaSans leading-[1.1]">
                                Your journey with <strong>Zanga</strong>
                            </h2>
                            <p className="text-gray-500 font-Montserrat leading-relaxed max-w-sm">
                                From discovering <strong>Zanga</strong>'s assessment tools to integrating them into
                                client engagements, there is a clear pathway to building a more evidence-led practice.
                            </p>
                        </div>

                        <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
                            {stages.map((stage) => (
                                <div key={stage.number} className="h-full flex flex-col">
                                    <span
                                        className="text-4xl font-bold font-MonaSans leading-none mb-4"
                                        style={{color: stage.color}}
                                        aria-hidden="true"
                                    >
                                        {stage.number}
                                    </span>
                                    <h3 className="text-lg font-bold text-gray-900 font-MonaSans mb-1.5">
                                        {stage.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm font-Montserrat leading-relaxed mb-3">
                                        {stage.description}
                                    </p>
                                    {stage.menu ? (
                                        <OpenNavMenuButton
                                            menu={stage.menu}
                                            className="mt-auto inline-flex items-center gap-1.5 font-semibold text-sm font-Montserrat hover:gap-2.5 transition-all"
                                            style={{color: stage.color}}
                                        >
                                            {stage.cta}
                                            <FiArrowRight size={14} aria-hidden="true"/>
                                        </OpenNavMenuButton>
                                    ) : (
                                        <CardAction
                                            modal={stage.modal}
                                            className="mt-auto inline-flex items-center gap-1.5 font-semibold text-sm font-Montserrat hover:gap-2.5 transition-all"
                                            style={{color: stage.color}}
                                        >
                                            {stage.cta}
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
