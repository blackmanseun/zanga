import React from 'react'
import BoldZanga from '@/components/ui/BoldZanga'

const paragraphs: string[] = [
    'Zanga does not use assessment scores as stand-alone hiring decisions.',
    'We begin by understanding what success in the role requires. Candidates then complete the appropriate psychometric, behavioural or leadership assessments. Their results are translated into practical insights that help hiring teams understand strengths, potential concerns, role alignment and areas to explore further.',
    'What makes the Zanga approach different is context.',
    'Behaviour is shaped by the environment in which people work. Relationships, hierarchy, communication norms and cultural expectations can influence how capability is expressed.',
    'Zanga combines assessment science with cultural intelligence to help organisations understand not simply how someone scores, but what that insight means for the role and environment they are entering.',
]

const steps: { number: string; title: string; text: string }[] = [
    {
        number: '01',
        title: 'Define',
        text: 'Clarify the role and what successful performance requires.',
    },
    {
        number: '02',
        title: 'Assess',
        text: 'Select the most appropriate assessment or assessment combination.',
    },
    {
        number: '03',
        title: 'Understand',
        text: 'Identify strengths, fit, potential and areas requiring deeper exploration.',
    },
    {
        number: '04',
        title: 'Decide',
        text: 'Combine assessment insight with interviews, experience, references and professional judgement.',
    },
]

export default function Methodology() {
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
                        <span className="text-gray-700">Better decisions start with </span>
                        <span className="text-olive">better context</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-start">
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
