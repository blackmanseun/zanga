import React from 'react'
import BoldZanga from '@/components/ui/BoldZanga'
import OpenModalButton from '@/components/modal/OpenModalButton'

const paragraphs: string[] = [
    'Zanga’s approach begins by understanding who the organisation needs to hear from, what information matters and how those stakeholders are most likely to engage.',
    'Feedback can then be collected through the most appropriate channels, structured into consistent categories and analysed to identify themes, concerns and patterns.',
    'What makes the Zanga approach different is context.',
    'Stakeholders do not all communicate in the same way. Hierarchy, trust, language, access and cultural norms can influence what people are willing to say and how they choose to say it.',
    'Zanga combines structured stakeholder listening with cultural intelligence to help organisations interpret not only the feedback received, but the context surrounding it.',
]

const steps: { number: string; title: string; text: string }[] = [
    {
        number: '01',
        title: 'Listen',
        text: 'Collect feedback through accessible stakeholder channels.',
    },
    {
        number: '02',
        title: 'Structure',
        text: 'Categorise concerns, grievances and recurring themes.',
    },
    {
        number: '03',
        title: 'Escalate',
        text: 'Route issues to the appropriate people and track follow-up.',
    },
    {
        number: '04',
        title: 'Learn',
        text: 'Use aggregated insight to identify patterns, improve response and strengthen future engagement.',
    },
]
export default function ListenToStakeholdersMethodology() {
    return (
        <section
            className="md:py-20 py-14 px-4 sm:px-6 lg:px-8"
            style={{backgroundColor: 'rgb(250, 248, 246)'}}
        >
            <div className="max-w-7xl mx-auto ">
              <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
           Methodology
          </span>

                <div className="grid md:grid-cols-2 md:gap-16 items-center">
                    <h2 className="text-3xl md:text-[2.75rem] font-bold mt-3 mb-6 font-MonaSans leading-tight">
                        <span className="text-gray-700">Better stakeholder engagement starts with </span>
                        <span className="text-olive">better listening</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-start md:items-stretch">
                    <div className="flex flex-col">
                        <div className="space-y-4 md:mb-8">
                            {paragraphs.map((p, i) => (
                                <p
                                    key={p}
                                    className={`text-gray-500 font-Montserrat leading-relaxed ${i === 2 ? 'font-semibold text-gray-700' : ''}`}
                                >
                                    {i === 2 ? (
                                        <>What makes the <strong>Zanga</strong> approach different is <em className="italic">context</em>.</>
                                    ) : (
                                        <BoldZanga text={p}/>
                                    )}
                                </p>
                            ))}
                        </div>
                        <OpenModalButton
                            modal="book-a-demo"
                            className="self-start mt-8 md:mt-auto md:text-[16px] text-[14px] text-center bg-olive text-white px-8 py-3 rounded-md font-bold hover:bg-olive/90 transition-colors font-Montserrat"
                        >
                            Request a Demo
                        </OpenModalButton>
                    </div>

                    <div className="rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 bg-gray-50 flex flex-col">
                        <div className="flex-1 flex flex-col justify-between gap-8">
                            {steps.map((s) => (
                                <div key={s.title} className="flex items-start gap-5">
                                    <span
                                        className="text-5xl sm:text-6xl font-bold text-olive/30 font-MonaSans leading-none shrink-0 w-14 sm:w-16">
                                        {s.number}
                                    </span>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 font-MonaSans mb-2">{s.title}</h3>
                                        <p className="text-gray-500 text-sm font-Montserrat leading-relaxed">{s.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
