import React from 'react'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'

type Card = {
    label: string
    description: string
    cta: string
    color: string
}

const cards: Card[] = [
    {
        label: 'Listen to What Your People Are Really Experiencing',
        description:
            'Pulse gives employees a structured way to share how they experience the organisation. From leadership and communication to culture, wellbeing, recognition and opportunities for growth. Give leaders a clearer picture of what is working, what is changing and where intervention may be needed.',
        cta: 'Explore Pulse Surveys',
        color: '#a3a748',
    },
    {
        label: 'See What Is Driving Engagement and Disengagement',
        description:
            'Knowing that engagement has increased or declined is only the starting point. Pulse helps organisations explore the factors behind employee sentiment so leadership teams can understand what is influencing motivation, commitment and workplace experience. Identify the issues that matter most rather than responding to symptoms alone.',
        cta: 'Explore Employee Engagement',
        color: '#FDBF12',
    },
    {
        label: 'Understand Culture as Employees Experience It',
        description:
            'Organisational culture is not simply what is written in a values statement. Pulse helps organisations compare the culture they intend to create with what employees experience in practice; surfacing patterns around leadership, communication, trust, belonging, collaboration and workplace behaviour.',
        cta: 'Explore Culture & Values',
        color: '#c55e36',
    },
    {
        label: 'Identify Emerging Retention Risks',
        description:
            'Employee turnover rarely begins with a resignation letter. Changes in sentiment, trust, motivation, leadership experience or intent to stay can provide useful early signals. Pulse helps organisations identify where potential retention concerns may be emerging, so leaders can investigate and respond before valuable people disengage completely.',
        cta: 'Explore Retention Intelligence',
        color: '#a3a748',
    },
    {
        label: 'Give Leaders a Clearer View Across the Organisation',
        description:
            'Move beyond isolated survey results. Pulse can help leadership teams understand differences across departments, teams, locations, employee groups or other relevant segments, making it easier to see where experiences differ and where action should be prioritised.',
        cta: 'Explore Workforce Dashboards',
        color: '#FDBF12',
    },
    {
        label: 'Turn Feedback Into Action',
        description:
            'Employee surveys have little value if nothing happens after people respond. Pulse is designed to help organisations move from listening to understanding to action, giving leaders clearer priorities, practical recommendations and a stronger basis for conversations with their teams.',
        cta: 'Explore Employee Sentiment',
        color: '#c55e36',
    },
]

export default function PulseCapabilities() {
    return (
        <section
            style={{
                backgroundColor: 'rgb(250, 248, 246)'
            }}
            className="md:py-20 py-14 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto">
                <div className="md:mb-16 mb-6">
                    <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                        Understand beyond the engagement
                    </span>
                    <h2 className="text-3xl md:text-[2.8rem] leading-[1.1] font-bold text-gray-700 mt-3 font-MonaSans max-w-3xl">
                        Understand more than the engagement score
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {cards.map((card, i) => (
                        <Reveal key={card.label} delayMs={(i % 3) * 90} className="h-full">
                            <div className="group h-full flex flex-col rounded-2xl p-6 sm:p-8 bg-white border border-slate-200 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                                <div className="flex items-start justify-between gap-4 mb-3">
                                    <h3 className="text-[20px] font-semibold font-MonaSans text-gray-800/90">{card.label}</h3>
                                    <Link
                                        href="#"
                                        aria-label={card.cta}
                                        className="w-9 h-9 text-white shrink-0 rounded-full flex items-center justify-center hover:brightness-95 transition-all"
                                        style={{ backgroundColor: card.color }}
                                    >
                                        <FiArrowUpRight
                                            size={18}
                                            aria-hidden="true"
                                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        />
                                    </Link>
                                </div>
                                <p className="text-gray-700 text-[16px] font-Montserrat leading-relaxed mb-6 flex-1">
                                    {card.description}
                                </p>
                                <Link
                                    href="#"
                                    className="inline-flex items-center gap-2 text-[14px] font-semibold font-Montserrat"
                                    style={{ color: card.color }}
                                >
                                    {card.cta}
                                    <FiArrowUpRight
                                        size={16}
                                        aria-hidden="true"
                                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </Link>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
