import React from 'react'
import Link from 'next/link'
import {FiArrowUpRight} from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'
import OpenModalButton from '@/components/modal/OpenModalButton'
import type {ModalKey} from '@/components/modal/ModalProvider'

type Achievement = {
    title: string
    description: string
    cta: string
    color: string
    // When set, the card actions open this modal instead of linking.
    modal?: ModalKey
}

// Renders a card action as a modal trigger or a link, keeping the same look.
function CardAction({modal, className, style, ariaLabel, children}: {
    modal?: ModalKey
    className: string
    style: React.CSSProperties
    ariaLabel?: string
    children: React.ReactNode
}) {
    return modal ? (
        <OpenModalButton modal={modal} aria-label={ariaLabel} className={className} style={style}>
            {children}
        </OpenModalButton>
    ) : (
        <Link href="#" aria-label={ariaLabel} className={className} style={style}>
            {children}
        </Link>
    )
}

const achievements: Achievement[] = [
    {
        title: 'Hire With Greater Confidence',
        description:
            'Look beyond the CV and interview to understand behavioural fit, working style and other factors that may influence performance. Use structured assessment insight to make critical hires with more evidence and less guesswork.',
        cta: 'Explore Fit by Zanga',
        color: '#c55e36',
    },
    {
        title: 'Build Stronger Managers',
        description:
            'Help newly promoted and developing managers understand where they are strong, where they need support and what they should focus on next. Assessment can then connect directly into coaching, open-enrolment programmes or self-paced development.',
        cta: 'Explore Leadership Assessments',
        color: '#a3a748',
    },
    {
        title: 'Better Understand Your Team',
        description:
            'Get a clearer picture of employee engagement, culture and retention before concerns become resignations or performance problems. Short, structured surveys help smaller businesses identify what is working and where action may be needed.',
        cta: 'Explore Pulse by Zanga',
        color: '#0F3460',
    },
    {
        title: 'Improve How the Team Works Together',
        description:
            'Understand behavioural differences, communication preferences and predictable areas of friction across the team. Use a shared language to improve collaboration, working relationships and team effectiveness.',
        cta: 'Explore Team Assessments',
        color: '#c55e36',
    },
    {
        title: 'Reduce Key-Person Risk',
        description:
            'Identify who may be ready for greater responsibility, where capability is concentrated and which roles would be most difficult to replace. This helps growing businesses begin building succession depth earlier.',
        cta: 'Explore Leadership Potential',
        color: '#a3a748',
    },
    {
        title: 'Give Founders Better People Insight',
        description:
            'Turn assessment and employee feedback into practical information that founders and managers can use in day-to-day business decisions. No specialist HR team required.',
        cta: 'Book a Demo',
        color: '#0F3460',
        modal: 'book-a-demo',
    },
]

export default function SmesAchieveGrid() {
    return (
        <section
            style={{backgroundColor: 'rgb(250, 248, 246)'}}
            className="md:py-20 py-14 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto">
                <div className="md:mb-16 mb-6">
                    <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                        Outcomes
                    </span>
                    <h2 className="text-3xl md:text-[2.8rem] leading-[1.1] font-bold text-gray-700 mt-3 font-MonaSans max-w-3xl">
                        What you can achieve
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((item, i) => (
                        <Reveal key={item.title} delayMs={(i % 3) * 90} className="h-full">
                            <div className="group h-full flex flex-col rounded-2xl p-6 sm:p-8 bg-white border border-slate-200 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                                <div className="flex items-start justify-between gap-4 mb-3">
                                    <h3 className="text-[20px] font-semibold font-MonaSans text-gray-800/90">
                                        {item.title}
                                    </h3>
                                    <CardAction
                                        modal={item.modal}
                                        ariaLabel={item.cta}
                                        className="w-9 h-9 text-white shrink-0 rounded-full flex items-center justify-center hover:brightness-95 transition-all"
                                        style={{backgroundColor: item.color}}
                                    >
                                        <FiArrowUpRight
                                            size={18}
                                            aria-hidden="true"
                                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        />
                                    </CardAction>
                                </div>
                                <p className="text-gray-700 text-[16px] font-Montserrat leading-relaxed mb-6 flex-1">
                                    {item.description}
                                </p>
                                <CardAction
                                    modal={item.modal}
                                    className="inline-flex items-center gap-2 text-[14px] font-semibold font-Montserrat"
                                    style={{color: item.color}}
                                >
                                    {item.cta}
                                    <FiArrowUpRight
                                        size={16}
                                        aria-hidden="true"
                                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </CardAction>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
