import React from 'react'

const outcomes: { title: string; text: string }[] = [
    {
        title: 'Stronger Leadership Pipelines',
        text: 'Identify future leaders earlier and build depth across critical roles.',
    },
    {
        title: 'Better Promotion Decisions',
        text: 'Use structured evidence to support decisions about readiness for greater responsibility.',
    },
    {
        title: 'Reduced Continuity Risk',
        text: 'See where succession depth is weak and where leadership gaps may create vulnerability.',
    },
    {
        title: 'More Focused Development',
        text: 'Direct coaching and development to strengthen the capabilities future leaders need the most.',
    },
    {
        title: 'Greater Confidence in Talent Reviews',
        text: 'Give leadership teams and boards a more consistent basis for succession and high-potential discussions.',
    },
]

export default function StrengthenSuccessionPlanningOutcomes() {
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
                    <h2 className="max-w-3xl text-white text-3xl md:text-[2.75rem] font-bold mt-3 mb-6 font-MonaSans leading-tight">
                        What stronger succession planning can help you achieve
                    </h2>
                    <p className="text-gray-200 font-Montserrat leading-relaxed max-w-2xl">
                        <strong>Zanga</strong> helps organisations move from informal succession conversations to
                        clearer, evidence-based leadership planning.
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
                                        <p className="col-span-2 text-[15px] text-gray-500 font-Montserrat leading-relaxed mt-2 md:mt-0">
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
