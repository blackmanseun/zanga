import React from 'react'
import { FiAlertTriangle, FiArrowRight, FiCheckCircle, FiFileText, FiRefreshCw } from 'react-icons/fi'
import OpenModalButton from '@/components/modal/OpenModalButton'

const deliverables: string[] = [
    'Founder and senior-leader assessments',
    'Management-team assessments',
    'Behavioural and psychometric insight',
    '360 leadership feedback where appropriate',
    'Leadership-strength and development profiles',
    'Management-depth and key-person dependency analysis',
    'Team-dynamics insight',
    'Organisational health or engagement insight',
    'Individual leadership reports',
    'Suggested areas to explore further',
    'Development and coaching recommendations',
    'Follow-up assessment or monitoring',
    'Portfolio-level reporting where relevant',
]

const leaders: { initials: string; role: string; score: number }[] = [
    {initials: 'FD', role: 'Founder & CEO', score: 84},
    {initials: 'CO', role: 'Chief Operating Officer', score: 76},
    {initials: 'FM', role: 'Finance Manager', score: 62},
    {initials: 'SL', role: 'Sales Lead', score: 70},
]

const dependencies: { area: string; owner: string; level: 'High' | 'Medium' }[] = [
    {area: 'Key customer relationships', owner: 'Founder & CEO', level: 'High'},
    {area: 'Supplier negotiations', owner: 'Chief Operating Officer', level: 'Medium'},
]

const toExplore: string[] = [
    'Decision-making under cash-flow pressure',
    'Finance function depth ahead of next raise',
]

function DiligenceReportMockup() {
    const topScore = Math.max(...leaders.map((leader) => leader.score))

    return (
        <div className="h-full flex flex-col rounded-2xl bg-white border border-gray-200 shadow-xl overflow-hidden" aria-hidden="true">
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-gray-50">
                <div className="flex items-center gap-3 min-w-0">
                    <div className="flex gap-1.5 shrink-0">
                        <span className="w-2.5 h-2.5 rounded-full bg-gray-300"/>
                        <span className="w-2.5 h-2.5 rounded-full bg-gray-300"/>
                        <span className="w-2.5 h-2.5 rounded-full bg-gray-300"/>
                    </div>
                    <p className="text-xs font-semibold text-gray-700 font-MonaSans truncate">
                        Diligence by Zanga · Leadership Report
                    </p>
                </div>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full font-Montserrat text-olive bg-olive/10 shrink-0">
                    Pre-investment
                </span>
            </div>

            <div className="flex-1 flex flex-col justify-between gap-4 p-4 sm:p-5">
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    <div className="rounded-xl border border-gray-100 p-3">
                        <p className="text-[10px] text-gray-400 font-Montserrat mb-1">Leaders assessed</p>
                        <p className="text-xl sm:text-2xl font-bold text-gray-800 font-MonaSans leading-none mb-1">4</p>
                        <p className="text-[10px] font-semibold text-olive font-Montserrat">Founder + team</p>
                    </div>
                    <div className="rounded-xl border border-gray-100 p-3">
                        <p className="text-[10px] text-gray-400 font-Montserrat mb-1">Management depth</p>
                        <p className="text-xl sm:text-2xl font-bold text-gray-800 font-MonaSans leading-none mb-1">Moderate</p>
                        <p className="text-[10px] font-semibold text-olive font-Montserrat">2 gaps identified</p>
                    </div>
                    <div className="rounded-xl border border-gray-100 p-3">
                        <p className="text-[10px] text-gray-400 font-Montserrat mb-1">Key-person risk</p>
                        <p className="text-xl sm:text-2xl font-bold text-terracotta font-MonaSans leading-none mb-1">High</p>
                        <p className="text-[10px] font-semibold text-gray-400 font-Montserrat">Founder-centred</p>
                    </div>
                </div>

                <div className="rounded-xl border border-gray-100 p-4">
                    <div className="flex items-center justify-between mb-3">
                        <p className="text-sm font-semibold text-gray-900 font-MonaSans">Leadership capability</p>
                        <p className="text-[10px] text-gray-400 font-Montserrat">Management team</p>
                    </div>
                    <div className="space-y-2.5">
                        {leaders.map((leader) => {
                            const top = leader.score === topScore
                            return (
                                <div key={leader.role} className="flex items-center gap-3">
                                    <span className="w-7 h-7 shrink-0 rounded-full bg-olive/10 text-olive text-[9px] font-bold font-MonaSans flex items-center justify-center">
                                        {leader.initials}
                                    </span>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between text-[10px] text-gray-500 font-Montserrat mb-1">
                                            <span className="truncate">{leader.role}</span>
                                            <span className={top ? 'text-olive font-semibold' : ''}>{leader.score}</span>
                                        </div>
                                        <div className="h-1.5 rounded-full bg-gray-100">
                                            <div
                                                className={`h-full rounded-full ${top ? 'bg-olive' : 'bg-olive/60'}`}
                                                style={{width: `${leader.score}%`}}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="rounded-xl border border-gray-100 p-4">
                        <p className="text-sm font-semibold text-gray-900 font-MonaSans mb-3">Key-person dependency</p>
                        <div className="space-y-2">
                            {dependencies.map((dependency) => {
                                const high = dependency.level === 'High'
                                return (
                                    <div key={dependency.area} className={`rounded-lg p-2.5 ${high ? 'bg-terracotta/10' : 'bg-gray-50'}`}>
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-[9px] uppercase tracking-wide text-gray-400 font-semibold font-Montserrat truncate">
                                                {dependency.owner}
                                            </span>
                                            <span
                                                className={`text-[9px] px-1.5 py-0.5 rounded-full font-Montserrat shrink-0 ${
                                                    high ? 'bg-terracotta text-white' : 'bg-gray-200 text-gray-600'
                                                }`}
                                            >
                                                {dependency.level}
                                            </span>
                                        </div>
                                        <p className="text-[11px] font-semibold text-gray-800 font-MonaSans leading-snug">
                                            {dependency.area}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="rounded-xl border border-gray-100 p-4">
                        <p className="text-sm font-semibold text-gray-900 font-MonaSans mb-3">Areas to explore further</p>
                        <div className="space-y-2">
                            {toExplore.map((item) => (
                                <p key={item} className="flex items-start gap-1.5 text-[11px] text-gray-700 font-Montserrat leading-snug">
                                    <FiAlertTriangle size={11} className="text-terracotta shrink-0 mt-0.5"/>
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="inline-flex items-center gap-1.5 text-[10px] px-2.5 py-1.5 rounded-md border border-gray-200 bg-gray-50 text-gray-600 font-Montserrat">
                        <FiFileText size={11}/>
                        Individual leadership reports
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[10px] px-2.5 py-1.5 rounded-md text-white bg-olive font-Montserrat">
                        <FiRefreshCw size={11}/>
                        Follow-up assessment · 12 months
                    </span>
                </div>
            </div>
        </div>
    )
}

export default function DiligenceWhatYouReceive() {
    return (
        <section
            style={{ backgroundColor: 'rgb(250, 248, 246)' }}
            className="md:py-20 py-14 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                    Diligence by Zanga
                </span>

                <div className="max-w-3xl">
                    <h2 className="text-3xl md:text-[2.8rem] font-bold mt-3 mb-6 font-MonaSans leading-tight text-gray-700">
                        What you receive
                    </h2>
                </div>

                <div className="grid lg:grid-cols-[550px_1fr] gap-10 lg:gap-16 items-start lg:items-stretch mt-4">
                    <div className="flex flex-col">
                        <p className="text-gray-500 font-Montserrat leading-relaxed mb-8">
                            Depending on the engagement, <strong>Diligence by Zanga</strong> can include:
                        </p>

                        <ul className="space-y-3 mb-10">
                            {deliverables.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-3 text-md text-gray-600 font-Montserrat leading-relaxed"
                                >
                                    <FiCheckCircle className="text-olive shrink-0 mt-0.5" size={16} aria-hidden="true"/>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="lg:mt-auto">
                            <OpenModalButton
                                modal="book-a-demo"
                                className="inline-flex items-center justify-center gap-2 bg-olive text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-olive/90 transition-colors font-Montserrat"
                            >
                                Request a Demo
                                <FiArrowRight size={16} aria-hidden="true"/>
                            </OpenModalButton>
                        </div>
                    </div>

                    <div className="mt-8 lg:mt-0">
                        <DiligenceReportMockup/>
                    </div>
                </div>
            </div>
        </section>
    )
}
