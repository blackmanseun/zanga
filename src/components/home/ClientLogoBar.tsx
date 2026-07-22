import React from 'react'

const badges = [
    {label: '943+ leaders assessed', dot: 'bg-terracotta'},
    {label: '200+ managers developed', dot: 'bg-olive'},
    {label: 'Multiple African countries', dot: 'bg-terracotta'},
    {label: 'Enterprise, SME and Government clients', dot: 'bg-olive'},
    {label: ' Evidence-based assessments designed for high-context markets', dot: 'bg-terracotta'},
]

export default function ClientLogoBar() {
    return (
        <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-gray-700 text-base md:text-[24px] font-semibold font-Montserrat">
                    Trusted by organisations building Africa's future workforce
                </h2>
                <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
                    {badges.map((badge) => (
                        <span
                            key={badge.label}
                            className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-5 py-2.5 text-md font-medium text-gray-700 font-Montserrat"
                        >
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${badge.dot}`}/>
                            {badge.label}
            </span>
                    ))}
                </div>
            </div>
        </section>
    )
}
