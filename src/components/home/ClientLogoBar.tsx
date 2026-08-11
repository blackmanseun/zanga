import React from 'react'
import { FiGlobe, FiBriefcase, FiCheckCircle } from 'react-icons/fi'
import type { IconType } from 'react-icons'

const stats = [
    {value: '943+', line1: 'Leaders', line2: 'assessed', color: 'text-terracotta'},
    {value: '200+', line1: 'Managers', line2: 'developed', color: 'text-olive'},
]

const badges = [
    {label: '943+ leaders assessed', dot: 'bg-terracotta'},
    {label: '200+ managers developed', dot: 'bg-olive'},
    {label: 'Multiple African countries', dot: 'bg-terracotta'},
    {label: 'Enterprise, SME and Government clients', dot: 'bg-olive'},
    {label: ' Evidence-based assessments designed for high-context markets', dot: 'bg-terracotta'},
]

const remainingCards: { label: string; Icon: IconType; color: string }[] = [
    {label: 'Multiple African countries', Icon: FiGlobe, color: '#c55e36'},
    {label: 'Enterprise, SME and Government clients', Icon: FiBriefcase, color: '#a3a748'},
    {label: 'Evidence-based assessments designed for high-context markets', Icon: FiCheckCircle, color: '#c55e36'},
]

export default function ClientLogoBar() {
    return (
        <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto md:text-center">
                <h2 className="text-gray-700 text-[24px] font-semibold font-Montserrat">
                    Trusted to turn people and stakeholder insight into action.
                </h2>

                <div className="md:hidden mt-8">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        {stats.map((stat) => (
                            <div
                                key={stat.line1}
                                className="bg-gray-50 border border-gray-200 rounded-2xl px-4 py-5 text-center"
                            >
                                <p className={`text-3xl font-bold font-MonaSans ${stat.color}`}>{stat.value}</p>
                                <p className="text-sm text-gray-600 font-Montserrat mt-1">
                                    {stat.line1}
                                    <br/>
                                    {stat.line2}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-3">
                        {remainingCards.map((card) => (
                            <div
                                key={card.label}
                                className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-4 py-3.5 text-left"
                            >
                                <span
                                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                                    style={{backgroundColor: `${card.color}1F`, color: card.color}}
                                >
                                    <card.Icon size={18} aria-hidden="true"/>
                                </span>
                                <p className="text-sm font-semibold text-gray-900 font-Montserrat">{card.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hidden md:flex flex-wrap items-center justify-center gap-3 mt-8">
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
