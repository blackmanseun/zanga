import React from 'react'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'

type Card = {
    label: string
    paragraphs: string[]
    color: string
}

const cards: Card[] = [
    {
        label: 'See the Leadership Behind the Numbers',
        paragraphs: [
            'Financial performance can tell you a lot about a business. It cannot fully explain how the people behind it make decisions, handle pressure or lead through change.',
            'Diligence by Zanga adds a structured view of founder and senior leadership capability so people-related factors can be considered alongside financial and commercial evidence.',
        ],
        color: '#a3a748',
    },
    {
        label: 'Look Beyond the Pitch',
        paragraphs: [
            'A compelling founder can present a strong investment story.',
            'Diligence by Zanga helps capital providers look beyond presentation style and explore how a founder is likely to lead, make decisions and respond when conditions become more demanding.',
        ],
        color: '#FDBF12',
    },
    {
        label: 'Understand the Management Team, Not Just the Founder',
        paragraphs: [
            'The ability of a business to execute rarely depends on one person alone.',
            'Diligence by Zanga helps investors and lenders understand management depth, areas of strength, capability gaps and where too much responsibility may be concentrated in a small number of individuals.',
        ],
        color: '#c55e36',
    },
    {
        label: 'Bring People Insight Into Lending Decisions',
        paragraphs: [
            'For many SMEs and growth businesses, the founder or management team is central to how the business operates.',
            'Diligence by Zanga can add structured leadership insight to credit assessment where understanding the people behind the borrower is especially relevant.',
        ],
        color: '#a3a748',
    },
    {
        label: 'Keep Understanding Leadership After Capital Is Deployed',
        paragraphs: [
            'Leadership needs change as businesses grow.',
            'Diligence by Zanga can support follow-up assessment and portfolio insight, helping investors or lenders understand how leadership capability and organisational health are evolving over time.',
        ],
        color: '#FDBF12',
    },
    {
        label: 'Turn Insight Into Practical Support',
        paragraphs: [
            'Assessment is most useful when it leads to action.',
            'Findings can inform founder coaching, management development, executive hiring, succession conversations or broader portfolio support.',
        ],
        color: '#c55e36',
    },
]

export default function DiligenceCapabilities() {
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
                        Understand beyond the financials
                    </span>
                    <h2 className="text-3xl md:text-[2.8rem] leading-[1.1] font-bold text-gray-700 mt-3 font-MonaSans max-w-3xl">
                        Understand more than the financials
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
                                        aria-label={card.label}
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
                                <div className="space-y-4">
                                    {card.paragraphs.map((paragraph) => (
                                        <p key={paragraph} className="text-gray-700 text-[16px] font-Montserrat leading-relaxed">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
