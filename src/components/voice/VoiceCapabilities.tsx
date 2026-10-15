import React from 'react'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'

type Card = {
    label: string
    id?: string
    paragraphs: string[]
    color: string
}

const cards: Card[] = [
    {
        label: 'Give People a Channel They Can Actually Use',
        paragraphs: [
            'Many organisations have a complaints process. Fewer have one that stakeholders understand, trust and can access easily.',
            'Voice by Zanga can be configured around how different stakeholder groups already communicate, helping organisations create a clearer route for concerns, questions and feedback.',
        ],
        color: '#a3a748',
    },
    {
        label: 'Capture Feedback Before It Gets Lost',
        paragraphs: [
            'A concern raised in the field, during a meeting or through an informal conversation can easily disappear without a structured system behind it.',
            'Voice by Zanga helps organisations record, categorise and track issues so there is greater visibility into what has been raised and what still requires attention.',
        ],
        color: '#FDBF12',
    },
    {
        label: 'Escalate Sensitive Issues Appropriately',
        id: 'case-tracking-escalation',
        paragraphs: [
            'Not every issue should follow the same route.',
            'Voice by Zanga can support defined escalation pathways for urgent or sensitive matters so the right people are informed and the organisation has a clearer process for handling them.',
        ],
        color: '#c55e36',
    },
    {
        label: 'See the Patterns Behind Individual Issues',
        paragraphs: [
            'One complaint may be isolated. Repeated complaints about the same issue, place or process can indicate something more significant.',
            'Voice by Zanga helps bring feedback together so organisations can identify recurring concerns, concentration points and changes over time.',
        ],
        color: '#a3a748',
    },
    {
        label: 'Build a Clearer Record of Response',
        id: 'esg-evidence',
        paragraphs: [
            'Stakeholder engagement is more credible when organisations can show not only what they heard, but what happened next.',
            'Voice by Zanga creates a structured record of issues, responses and resolution status that can support internal oversight, stakeholder reporting and broader ESG or accountability processes.',
        ],
        color: '#FDBF12',
    },
    {
        label: 'Give Employees a Safer Route to Speak Up',
        paragraphs: [
            'Some concerns are difficult to raise through normal reporting lines.',
            'Voice by Zanga can also support confidential employee and contractor feedback channels for welfare concerns, workplace issues or other matters requiring greater discretion.',
        ],
        color: '#c55e36',
    },
]

export default function VoiceCapabilities() {
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
                        Understand beyond the complaint
                    </span>
                    <h2 className="text-3xl md:text-[2.8rem] leading-[1.1] font-bold text-gray-700 mt-3 font-MonaSans max-w-3xl">
                        Understand more than the complaint
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {cards.map((card, i) => (
                        <Reveal key={card.label} delayMs={(i % 3) * 90} className="h-full">
                            <div id={card.id} className="group scroll-mt-28 h-full flex flex-col rounded-2xl p-6 sm:p-8 bg-white border border-slate-200 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
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
