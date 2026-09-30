import React from 'react'
import Link from 'next/link'
import BoldZanga from '@/components/ui/BoldZanga'

const paragraphs: string[] = [
    'Zanga’s approach combines structured employee listening with contextual interpretation.',
    'We begin by understanding what the organisation needs to learn; whether the priority is engagement, culture, retention, leadership experience or a specific workforce issue. Employees then respond through the most appropriate survey or pulse format.',
    'The results are analysed to identify patterns, differences and priority areas across relevant teams, functions or groups.',
    'What makes the Zanga approach different is context.',
    'Employee feedback is shaped by workplace culture, hierarchy, trust and communication norms. Zanga combines structured measurement with cultural intelligence to help organisations interpret what employees are saying, and what they may be signalling indirectly.',
]

const steps: { number: string; title: string; text: string }[] = [
    {
        number: '01',
        title: 'Listen',
        text: 'Collect structured employee feedback.',
    },
    {
        number: '02',
        title: 'Understand',
        text: 'Identify engagement drivers, concerns and emerging patterns.',
    },
    {
        number: '03',
        title: 'Prioritise',
        text: 'Focus leadership attention on the issues that matter most.',
    },
    {
        number: '04',
        title: 'Act',
        text: 'Turn insight into practical interventions, management actions and follow-up measurement.',
    },
]

export default function ImproveEngagementRetentionMethodology() {
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
                        <span className="text-gray-700">Better employee experience starts with </span>
                        <span className="text-olive">better listening</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-start md:items-stretch">
                    <div>
                        <div className="space-y-4">
                            {paragraphs.map((p, i) => (
                                <p
                                    key={p}
                                    className={`text-gray-500 font-Montserrat leading-relaxed ${i === 3 ? 'font-semibold text-gray-700' : ''}`}
                                >
                                    {i === 3 ? (
                                        <>What makes the <strong>Zanga</strong> approach different is <em className="italic">context</em>.</>
                                    ) : (
                                        <BoldZanga text={p}/>
                                    )}
                                </p>
                            ))}
                        </div>
                        <Link
                            href="#"
                            className="inline-block mt-8 md:text-[16px] text-[14px] text-center bg-olive text-white px-8 py-3 rounded-md font-bold hover:bg-olive/90 transition-colors font-Montserrat"
                        >
                            Request a Demo
                        </Link>
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
