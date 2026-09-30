import React from 'react'
import BoldZanga from '@/components/ui/BoldZanga'
import OpenModalButton from '@/components/modal/OpenModalButton'

const paragraphs: string[] = [
    'Zanga’s approach begins by understanding the team, its purpose and the challenges affecting performance.',
    'Team members complete the most relevant assessment or assessment combination, generating insight into behavioural preferences, communication patterns and individual differences. These insights are then brought together to help the team understand how its collective dynamics may be shaping performance.',
    'What makes the Zanga approach different is context.',
    'How teams communicate, disagree, collaborate and respond to hierarchy is shaped by the environment in which they work. Zanga combines assessment science with cultural intelligence to help teams interpret those dynamics within the realities of African and other high-context workplaces.',
]

const steps: { number: string; title: string; text: string }[] = [
    {
        number: '01',
        title: 'Assess',
        text: 'Build insight into individual and team behavioural patterns.',
    },
    {
        number: '02',
        title: 'Understand',
        text: 'Identify strengths, differences and areas of potential friction.',
    },
    {
        number: '03',
        title: 'Align',
        text: 'Create a shared understanding of how the team wants to work together.',
    },
    {
        number: '04',
        title: 'Improve',
        text: 'Use the insight to strengthen communication, collaboration and team effectiveness.',
    },
]

export default function BuildHighPerformingTeamsMethodology() {
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
                        <span className="text-gray-700">Better team performance starts with </span>
                        <span className="text-olive">better understanding</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-start md:items-stretch">
                    <div>
                        <div className="space-y-4">
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
                            className="inline-block mt-8 md:text-[16px] text-[14px] text-center bg-olive text-white px-8 py-3 rounded-md font-bold hover:bg-olive/90 transition-colors font-Montserrat"
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
