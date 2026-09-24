import React from 'react'
import Link from 'next/link'
import BoldZanga from '@/components/ui/BoldZanga'

const paragraphs: string[] = [
    'Zanga’s approach begins with understanding the leadership challenge before recommending the development response.',
    'Leaders complete the assessment most relevant to their role, level and development objective. Results are translated into clear strengths, development priorities and areas requiring greater attention.',
    'What makes Zanga’s approach different is context.',
    'Leadership behaviour is influenced by hierarchy, relationships, communication norms and cultural expectations. Zanga combines assessment science with cultural intelligence to help organisations understand not simply how a leader scores, but what those insights mean within the environment in which they lead.',
]

const steps: { number: string; title: string; text: string }[] = [
    {
        number: '01',
        title: 'Assess',
        text: 'Build a clear view of current capability, behaviour or potential.',
    },
    {
        number: '02',
        title: 'Understand',
        text: 'Identify strengths, development priorities and areas requiring attention.',
    },
    {
        number: '03',
        title: 'Develop',
        text: 'Connect insight to targeted coaching, learning or leadership programmes.',
    },
    {
        number: '04',
        title: 'Reinforce',
        text: 'Follow up, support behaviour change and reassess where appropriate.',
    },
]

export default function DevelopStrongerLeadersMethodology() {
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
                        <span className="text-gray-700">Better leadership development starts with </span>
                        <span className="text-olive">better insight</span>
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
                                        <>What makes <strong>Zanga</strong>&rsquo;s approach different is <em className="italic">context</em>.</>
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
