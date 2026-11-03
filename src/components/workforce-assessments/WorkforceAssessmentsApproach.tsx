import React from 'react'
import Image from 'next/image'
import BoldZanga from '@/components/ui/BoldZanga'

const steps: { number: string; title: string; text: string }[] = [
    {
        number: '01',
        title: 'Define',
        text: 'Start with the question you need to answer. Is the organisation trying to understand engagement, culture, team effectiveness, retention or a specific workforce issue?',
    },
    {
        number: '02',
        title: 'Select',
        text: 'Choose the assessment or combination of approaches best suited to that question.',
    },
    {
        number: '03',
        title: 'Listen',
        text: 'Employees or relevant workforce groups provide structured responses.',
    },
    {
        number: '04',
        title: 'Understand',
        text: 'Zanga analyses the results to identify patterns, strengths, differences and areas requiring closer attention.',
    },
    {
        number: '05',
        title: 'Act',
        text: 'Use the findings to shape engagement initiatives, leadership action, culture work or targeted organisational interventions.',
    },
    {
        number: '06',
        title: 'Track',
        text: 'Where appropriate, repeat measurement to understand how workforce experience changes over time.',
    },
]

export default function WorkforceAssessmentsApproach() {
    return (
        <section
            style={{ backgroundColor: 'rgb(250, 248, 246)' }}
            className="md:py-20 py-14 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                    How It Works
                </span>

                <div className="max-w-3xl">
                    <h2 className="text-3xl md:text-[2.8rem] font-bold mt-3 mb-3 font-MonaSans leading-tight text-gray-700">
                        How <strong>Zanga</strong> workforce <br className="hidden md:block"/> assessments work
                    </h2>
                    <p className="text-gray-500 font-Montserrat leading-relaxed mb-6">
                        From workforce question to actionable insight.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative mt-8 md:mt-0 min-h-[20rem] rounded-2xl overflow-hidden">
                        <Image
                            src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/259"
                            alt="A Zanga facilitator walking a team through their workforce assessment results"
                            fill
                            sizes="(min-width: 768px) 50vw, 100vw"
                            className="object-cover"
                        />
                    </div>
                    <div className="rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 bg-gray-50">
                        <div className="space-y-8">
                            {steps.map((s) => (
                                <div key={s.title} className="flex items-start gap-5">
                                    <span
                                        className="text-5xl sm:text-6xl font-bold text-olive/30 font-MonaSans leading-none shrink-0 w-14 sm:w-16">
                                        {s.number}
                                    </span>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 font-MonaSans mb-2">{s.title}</h3>
                                        <p className="text-gray-500 text-sm font-Montserrat leading-relaxed"><BoldZanga text={s.text}/></p>
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
