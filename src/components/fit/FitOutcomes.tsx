import React from 'react'
import Reveal from '@/components/ui/Reveal'

const outcomes: { title: string; text: string; id?: string }[] = [
    {
        title: 'Mindset',
        text: 'How someone approaches learning, accountability, adaptability, self-awareness, problems and decisions.',
    },
    {
        title: 'Relationships',
        text: 'How someone communicates, collaborates, builds trust and works with colleagues and stakeholders.',
    },
    {
        title: 'Leadership',
        id: 'leadership-potential',
        text: 'How someone demonstrates initiative, judgement, influence and readiness to lead themselves or others.',
    },
    {
        title: 'Execution',
        text: 'How someone approaches follow-through, prioritisation, reliability and turning capability into results.',
    },
]

export default function FitOutcomes() {
    return (
        <section
            style={{ backgroundColor: 'rgb(250, 248, 246)' }}
            className="relative overflow-hidden py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0">
                <div className="bg-[#282A30] w-full md:h-[60%] h-[40%]"/>
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="mb-10">
                    <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                        What Fit Looks At
                    </span>
                    <h2 className="max-w-2xl text-white text-3xl md:text-[2.75rem] font-bold mt-3 mb-6 font-MonaSans leading-tight">
                        Four areas that shape performance at work
                    </h2>
                    <p className="max-w-2xl text-white/70 font-Montserrat leading-relaxed">
                        Fit brings together insight across four connected dimensions to create a more rounded view of
                        the candidate.
                    </p>
                </div>

                <div>
                    <div className="bg-white rounded-2xl shadow-sm px-6 py-10 sm:px-10 sm:py-12">
                        {outcomes.map((o, i) => (
                            <div
                                key={o.title}
                                id={o.id}
                                className={`relative flex items-start scroll-mt-28 ${i < outcomes.length - 1 ? 'pb-8' : ''} before:content-[''] before:h-full before:absolute before:top-0 before:left-[27.5px] before:w-px before:bg-terracotta/15 ${i === outcomes.length - 1 ? 'before:hidden' : ''}`}
                            >
                                <div
                                    className="step-number text-terracotta flex justify-center items-center min-h-[55px] min-w-[55px] rounded-full text-[18px] font-MonaSans shadow-lg bg-white shrink-0">
                                    {i + 1}
                                </div>
                                <div className="ml-6 mt-2 sm:ml-8 w-full">
                                    <div className="md:grid grid-cols-3 items-center gap-10">
                                        <h5 className="md:text-[17px] text-[16px] font-semibold text-gray-900 font-Montserrat">
                                            {o.title}
                                        </h5>
                                        <p className="col-span-2 text-[16px] text-gray-500 font-Montserrat leading-relaxed mt-2 md:mt-0">
                                            {o.text}
                                        </p>
                                    </div>
                                    {i < outcomes.length - 1 && (
                                        <hr className="md:mt-6 mt-4 border-gray-200"/>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="mt-6 text-gray-500 font-Montserrat leading-relaxed">
                        Depending on the role and assessment pathway, Fit may also explore behavioural and personality
                        characteristics, role alignment and leadership potential.
                    </p>
                </div>
            </div>
        </section>
    )
}
