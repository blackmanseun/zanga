import React from 'react'
import Reveal from '@/components/ui/Reveal'

const outcomes: { title: string; text: string }[] = [
    {
        title: 'More Confident Selection',
        text: 'Make final hiring decisions with a fuller understanding of the candidate.',
    },
    {
        title: 'Stronger Role Fit',
        text: 'Improve alignment between the person, the demands of the role and the working environment.',
    },
    {
        title: 'More Consistent Decisions',
        text: 'Give hiring teams a common evidence base for comparing candidates.',
    },
    {
        title: 'Better Leadership Appointments',
        text: 'Identify capability, potential and possible development risks before appointment.',
    },
    {
        title: 'Stronger Talent Pipelines',
        text: 'Spot individuals with the potential to take on greater responsibility over time.',
    },
]

export default function Outcomes() {
    return (
        <section
            style={{backgroundColor: 'rgb(250, 248, 246)'}}
            className="relative overflow-hidden py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0">
                <div className="bg-[#282A30] w-full md:h-[60%] h-[40%]"/>
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="mb-10">
                    <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                        Outcomes
                    </span>
                    <h2 className="max-w-2xl text-white text-3xl md:text-[2.75rem] font-bold mt-3 mb-6 font-MonaSans leading-tight">
                        What better hiring intelligence can help you achieve
                    </h2>
                    <p className="text-gray-200 font-Montserrat leading-relaxed max-w-2xl">
<strong>Zanga</strong> gives hiring teams clearer evidence at the point where better information can
                        make the greatest difference.
                    </p>
                </div>

                <div>
                    <div className="bg-white rounded-2xl shadow-sm px-6 py-10 sm:px-10 sm:py-12">
                        {outcomes.map((o, i) => (
                            <div
                                key={o.title}
                                className={`relative flex items-start ${i < outcomes.length - 1 ? 'pb-8' : ''} before:content-[''] before:h-full before:absolute before:top-0 before:left-[27.5px] before:w-px before:bg-terracotta/15 ${i === outcomes.length - 1 ? 'before:hidden' : ''}`}
                            >
                                <div
                                    className="step-number text-terracotta flex justify-center items-center min-h-[55px] min-w-[55px] rounded-full text-[18px] font-MonaSans shadow-lg bg-white shrink-0">
                                    {i + 1}
                                </div>
                                <div className="ml-6 mt-4 sm:ml-8 w-full">
                                    <div className="md:grid grid-cols-3 items-center gap-10">
                                        <h5 className="md:text-[17px] text-[16px] font-semibold text-gray-900 font-Montserrat">
                                            {o.title}
                                        </h5>
                                        <p className="col-span-2 text-sm text-gray-500 font-Montserrat leading-relaxed mt-2 md:mt-0">
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
                </div>
            </div>
        </section>
    )
}
