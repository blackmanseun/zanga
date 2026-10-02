import React from 'react'
import { FiArrowRight, FiCalendar, FiCheckCircle, FiFileText } from 'react-icons/fi'
import OpenModalButton from '@/components/modal/OpenModalButton'

const deliverables: string[] = [
    'Employee engagement surveys',
    'Pulse surveys',
    'Culture assessments',
    'Custom survey modules',
    'Participation tracking',
    'Organisational dashboards',
    'Engagement and sentiment analysis',
    'Team or business-unit comparisons',
    'Trend reporting over time',
    'Leadership and management insights',
    'Priority-action recommendations',
    'Organisational reports',
    'Executive or board-level summaries',
    'Facilitated results sessions',
    'Follow-up measurement',
]

const kpis: { label: string; value: string; change: string }[] = [
    {label: 'Participation', value: '82%', change: '+6 pts'},
    {label: 'Engagement', value: '71', change: '+4 pts'},
    {label: 'Positive sentiment', value: '64%', change: '+3 pts'},
]

const trend: number[] = [58, 61, 60, 66, 71]
const trendLabels: string[] = ['Q3 ’24', 'Q4', 'Q1 ’25', 'Q2', 'Q3']

const teams: { name: string; score: number }[] = [
    {name: 'Human Resources', score: 81},
    {name: 'Sales', score: 74},
    {name: 'Finance', score: 69},
    {name: 'Operations', score: 52},
]

const actions: { area: string; title: string; priority: 'High' | 'Medium' }[] = [
    {area: 'Operations', title: 'Improve manager check-ins and recognition', priority: 'High'},
    {area: 'Organisation-wide', title: 'Clarify career pathways for mid-level staff', priority: 'Medium'},
]

const reports: string[] = ['Organisational report', 'Board summary']

function PulseDashboardMockup() {
    const min = 50
    const max = 75
    const line = trend
        .map((v, i) => `${(i / (trend.length - 1)) * 300},${80 - ((v - min) / (max - min)) * 70}`)
        .join(' ')

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
                        Pulse by Zanga · Q3 Engagement Survey
                    </p>
                </div>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full font-Montserrat text-olive bg-olive/10">
                    Live
                </span>
            </div>

            <div className="flex-1 flex flex-col justify-between gap-4 p-4 sm:p-5">
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {kpis.map((kpi) => (
                        <div key={kpi.label} className="rounded-xl border border-gray-100 p-3">
                            <p className="text-[10px] text-gray-400 font-Montserrat mb-1">{kpi.label}</p>
                            <p className="text-xl sm:text-2xl font-bold text-gray-800 font-MonaSans leading-none mb-1">
                                {kpi.value}
                            </p>
                            <p className="text-[10px] font-semibold text-olive font-Montserrat">{kpi.change}</p>
                        </div>
                    ))}
                </div>

                <div className="rounded-xl border border-gray-100 p-4">
                    <div className="flex items-center justify-between mb-3">
                        <p className="text-sm font-semibold text-gray-900 font-MonaSans">Engagement trend</p>
                        <p className="text-[10px] text-gray-400 font-Montserrat">Last 5 quarters</p>
                    </div>
                    <svg viewBox="0 0 300 80" className="w-full h-20" preserveAspectRatio="none">
                        <polygon points={`0,80 ${line} 300,80`} fill="#a3a748" fillOpacity="0.12"/>
                        <polyline
                            points={line}
                            fill="none"
                            stroke="#a3a748"
                            strokeWidth="2.5"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                        />
                    </svg>
                    <div className="flex justify-between mt-2">
                        {trendLabels.map((label) => (
                            <span key={label} className="text-[9px] text-gray-400 font-Montserrat">{label}</span>
                        ))}
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="rounded-xl border border-gray-100 p-4">
                        <p className="text-sm font-semibold text-gray-900 font-MonaSans mb-3">Team comparison</p>
                        <div className="space-y-2.5">
                            {teams.map((team) => {
                                const low = team.score < 60
                                return (
                                    <div key={team.name}>
                                        <div className="flex justify-between text-[10px] text-gray-500 font-Montserrat mb-1">
                                            <span>{team.name}</span>
                                            <span className={low ? 'text-terracotta font-semibold' : ''}>{team.score}</span>
                                        </div>
                                        <div className="h-1.5 rounded-full bg-gray-100">
                                            <div
                                                className={`h-full rounded-full ${low ? 'bg-terracotta' : 'bg-olive'}`}
                                                style={{width: `${team.score}%`}}
                                            />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="rounded-xl border border-gray-100 p-4">
                        <p className="text-sm font-semibold text-gray-900 font-MonaSans mb-3">Priority actions</p>
                        <div className="space-y-2">
                            {actions.map((action) => {
                                const high = action.priority === 'High'
                                return (
                                    <div key={action.title} className={`rounded-lg p-2.5 ${high ? 'bg-terracotta/10' : 'bg-gray-50'}`}>
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-[9px] uppercase tracking-wide text-gray-400 font-semibold font-Montserrat">
                                                {action.area}
                                            </span>
                                            <span
                                                className={`text-[9px] px-1.5 py-0.5 rounded-full font-Montserrat ${
                                                    high ? 'bg-terracotta text-white' : 'bg-gray-200 text-gray-600'
                                                }`}
                                            >
                                                {action.priority}
                                            </span>
                                        </div>
                                        <p className="text-[11px] font-semibold text-gray-800 font-MonaSans leading-snug">
                                            {action.title}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                    {reports.map((report) => (
                        <span
                            key={report}
                            className="inline-flex items-center gap-1.5 text-[10px] px-2.5 py-1.5 rounded-md border border-gray-200 bg-gray-50 text-gray-600 font-Montserrat"
                        >
                            <FiFileText size={11}/>
                            {report}
                        </span>
                    ))}
                    <span className="inline-flex items-center gap-1.5 text-[10px] px-2.5 py-1.5 rounded-md text-white bg-olive font-Montserrat">
                        <FiCalendar size={11}/>
                        Results session · 14 Oct
                    </span>
                </div>
            </div>
        </div>
    )
}

export default function PulseWhatYouReceive() {
    return (
        <section
            style={{ backgroundColor: 'rgb(250, 248, 246)' }}
            className="md:py-20 py-14 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                    Pulse by Zanga
                </span>

                <div className="max-w-3xl">
                    <h2 className="text-3xl md:text-[2.8rem] font-bold mt-3 mb-6 font-MonaSans leading-tight text-gray-700">
                        What you receive
                    </h2>
                </div>

                <div className="grid lg:grid-cols-[550px_1fr] gap-10 lg:gap-16 items-start lg:items-stretch mt-4">
                    <div className="flex flex-col">
                        <p className="text-gray-500 font-Montserrat leading-relaxed mb-8">
                            Depending on the scope of the engagement, <strong>Pulse by Zanga</strong> can provide:
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
                                className="hidden md:inline-flex items-center justify-center gap-2 bg-olive text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-olive/90 transition-colors font-Montserrat"
                            >
                                Request a Demo
                                <FiArrowRight size={16} aria-hidden="true"/>
                            </OpenModalButton>
                            <OpenModalButton
                                modal="book-a-demo"
                                className="md:hidden inline-flex items-center justify-center gap-2 bg-olive text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-olive/90 transition-colors font-Montserrat"
                            >
                                Request a Demo
                                <FiArrowRight size={16} aria-hidden="true"/>
                            </OpenModalButton>
                        </div>
                    </div>

                    <div className="mt-8 lg:mt-0">
                        <PulseDashboardMockup/>
                    </div>
                </div>
            </div>
        </section>
    )
}
