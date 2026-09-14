import React from 'react'
import Image from 'next/image'
import BoldZanga from '@/components/ui/BoldZanga'

const steps: { number: string; title: string; text: string }[] = [
    {
        number: '01',
        title: 'Define the Leadership Need',
        text: 'We begin with the decision or development objective. Are you assessing current leadership capability, identifying future leaders, supporting succession or developing senior executives?',
    },
    {
        number: '02',
        title: 'Select the Right Assessment',
        text: 'Zanga recommends the assessment or combination of assessments most appropriate to the decision you are making.',
    },
    {
        number: '03',
        title: 'Generate Leadership Insight',
        text: 'Participants complete the assessment and receive clear insight into strengths, capability gaps, potential or feedback from others.',
    },
    {
        number: '04',
        title: 'Turn Insight Into Development',
        text: 'Assessment results can feed directly into individual development plans, coaching, leadership programmes, talent reviews or succession planning.',
    },
    {
        number: '05',
        title: 'Build Organisational Intelligence',
        text: 'For larger programmes, aggregated results can help organisations identify common capability gaps, leadership trends and broader development priorities.',
    },
]

export default function LeadershipAssessmentsApproach() {
    return (
        <section
            style={{ backgroundColor: 'rgb(250, 248, 246)' }}
            className="md:py-20 py-14 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                    How It Works
                </span>

                <div className="max-w-3xl">
                    <h2 className="text-3xl md:text-[2.8rem] font-bold mt-3 mb-4 font-MonaSans leading-tight text-gray-700">
                        How <strong>Zanga&apos;s</strong> leadership assessment approach works
                    </h2>
                    <p className="text-gray-500 font-Montserrat font-semibold mb-6">
                        Assess. Understand. Develop. Track.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative mt-8 md:mt-0 min-h-[20rem] rounded-2xl overflow-hidden">
                        <Image
                            src="/images/40.jpg"
                            alt="A Zanga facilitator walking a leader through their assessment results"
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
