import React from 'react'

const advantages: { title: string; text: string }[] = [
    {
        title: 'Tools',
        text: 'Access to approved Zanga assessments, products, reports and supporting resources.',
    },
    {
        title: 'Training',
        text: 'Product knowledge, practitioner onboarding and certification where required.',
    },
    {
        title: 'Technology',
        text: 'Access to the Coach Portal and other relevant platform capabilities as they become available.',
    },
    {
        title: 'Commercial Support',
        text: 'Sales materials, product information and guidance to support partner-led opportunities.',
    },
    {
        title: 'Marketing Support',
        text: 'Opportunities for co-marketing, webinars, content and market activation where appropriate.',
    },
    {
        title: 'Research & Insight',
        text: "Access to selected Zanga research, thought leadership and contextual intelligence to support stronger client conversations.",
    },
    {
        title: 'Community',
        text: "Participation in a network of coaches, experts, institutions and partners contributing to Zanga's wider mission.",
    },
]

export default function BecomePartnerAdvantage() {
    return (
        <section
            style={{ backgroundColor: 'rgb(250, 248, 246)' }}
            className="relative overflow-hidden py-16 md:py-28 px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0">
                <div className="bg-[#282A30] w-full md:h-[45%] h-[35%]"/>
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="mb-10">
                    <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                        Partner Support
                    </span>
                    <h2 className="max-w-2xl text-white text-3xl md:text-[2.75rem] font-bold mt-3 font-MonaSans leading-tight">
                        The Zanga <br className="hidden md:block"/> partner advantage
                    </h2>
                </div>

                <div>
                    <div className="bg-white rounded-2xl shadow-sm px-6 py-10 sm:px-10 sm:py-12">
                        {advantages.map((a, i) => (
                            <div
                                key={a.title}
                                className={`relative flex items-start md:items-center ${i < advantages.length - 1 ? 'pb-8' : ''} before:content-[''] before:h-full before:absolute before:top-0 before:left-[27.5px] before:w-px before:bg-terracotta/15 ${i === advantages.length - 1 ? 'before:hidden' : ''}`}
                            >
                                <div
                                    className="step-number text-terracotta flex justify-center items-center min-h-[55px] min-w-[55px] rounded-full text-[18px] font-MonaSans shadow-lg bg-white shrink-0">
                                    {i + 1}
                                </div>
                                <div className="ml-6 mt-4 sm:ml-8 w-full">
                                    <div className="md:grid grid-cols-3 items-center gap-10">
                                        <h5 className="md:text-[17px] text-[16px] font-semibold text-gray-900 font-Montserrat">
                                            {a.title}
                                        </h5>
                                        <p className="col-span-2 text-sm text-gray-500 font-Montserrat leading-relaxed mt-2 md:mt-0">
                                            {a.text}
                                        </p>
                                    </div>
                                    {i < advantages.length - 1 && (
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
