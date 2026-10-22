import React from 'react'
import { FiUserCheck } from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'

type Card = {
    label: string
    id?: string
    paragraphs: string[]
    color: string
}

const cards: Card[] = [
    {
        label: 'Understand the Person Behind the Application',
        id: 'candidate-fit',
        paragraphs: [
            'Experience tells you what someone has done. An interview shows you how they present themselves.',
            'Fit by Zanga adds structured insight into behavioural tendencies, working style and relevant capabilities so hiring teams can build a more complete picture before making a decision.',
        ],
        color: '#a3a748',
    },
    {
        label: 'Compare Candidates More Consistently',
        paragraphs: [
            'When different managers assess candidates through largely unstructured interviews, the standard can shift from one interviewer, team or location to another.',
            'Fit by Zanga creates a more consistent assessment basis across candidates, giving hiring teams additional evidence to support comparison and selection.',
        ],
        color: '#FDBF12',
    },
    {
        label: 'Identify Areas to Explore Before You Hire',
        paragraphs: [
            'A hire that does not work out costs more than the salary. It costs the recruitment cycle, the time the team spent, the work that did not get done and often the trust of the people around the role.',
            'Fit by Zanga helps organisations identify the risks in a hiring decision earlier, while there is still time to ask better questions.',
        ],
        color: '#c55e36',
    },
    {
        label: 'Understand Fit for the Role',
        id: 'role-fit',
        paragraphs: [
            'A capable person can still struggle in a role that does not suit how they naturally work.',
            "Fit by Zanga helps organisations consider how a candidate's characteristics align with the requirements of the position, the team and the environment they will enter.",
        ],
        color: '#a3a748',
    },
    {
        label: 'Strengthen Senior and Leadership Appointments',
        id: 'executive-assessment',
        paragraphs: [
            'The consequences of a poor senior appointment extend beyond one role.',
            'For leadership hires, Fit by Zanga can combine psychometric insight with relevant leadership assessment to provide a deeper view of capability, behaviour and areas requiring closer attention.',
        ],
        color: '#FDBF12',
    },
    {
        label: 'Give Hiring Managers Insight They Can Use',
        paragraphs: [
            'Assessment reports are valuable only when decision-makers can understand them.',
            'Fit by Zanga translates assessment results into clear, practical insight, including strengths, areas to explore and useful prompts for subsequent interviews or onboarding.',
        ],
        color: '#c55e36',
    },
]

export default function FitCapabilities() {
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
                        Understand beyond the interview
                    </span>
                    <h2 className="text-3xl md:text-[2.8rem] leading-[1.1] font-bold text-gray-700 mt-3 font-MonaSans max-w-3xl">
                        See more than the interview
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {cards.map((card, i) => (
                        <Reveal key={card.label} delayMs={(i % 3) * 90} className="h-full">
                            <div id={card.id} className="group scroll-mt-28 h-full flex flex-col rounded-2xl p-6 sm:p-8 bg-white border border-slate-200 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                                <div className="flex items-start justify-between gap-4 mb-3">
                                    <h3 className="text-[20px] font-semibold font-MonaSans text-gray-800/90">{card.label}</h3>
                                    <span
                                        aria-hidden="true"
                                        className="w-9 h-9 text-white shrink-0 rounded-full flex items-center justify-center"
                                        style={{ backgroundColor: card.color }}
                                    >
                                        <FiUserCheck size={18}/>
                                    </span>
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
