import React from 'react'
import { FiArrowRight, FiCalendar, FiCheckCircle, FiFileText } from 'react-icons/fi'
import OpenModalButton from '@/components/modal/OpenModalButton'

const deliverables: string[] = [
    'Stakeholder intake channels',
    'Confidential or anonymous reporting options where appropriate',
    'Issue categorisation and case logging',
    'Escalation workflows',
    'Case-status and resolution tracking',
    'Recurring issue analysis',
    'Location or stakeholder-group comparisons',
    'Management dashboards',
    'Periodic insight reports',
    'Leadership summaries',
    'Team training',
    'Advisory support on interpreting findings',
]

const kpis: { label: string; value: string; change: string }[] = [
    {label: 'Cases logged', value: '146', change: '+18 this month'},
    {label: 'Resolved', value: '78%', change: '+5 pts'},
    {label: 'Avg. response', value: '3.2d', change: '-1.1 days'},
]

const trend: number[] = [58, 61, 60, 66, 71]
const trendLabels: string[] = ['May', 'Jun', 'Jul', 'Aug', 'Sep']

const issues: { name: string; count: number }[] = [
    {name: 'Payment delays', count: 42},
    {name: 'Input supply', count: 31},
    {name: 'Contract terms', count: 19},
    {name: 'Site safety', count: 12},
]

const escalations: { area: string; title: string; priority: 'Urgent' | 'Sensitive' }[] = [
    {area: 'Northern region', title: 'Repeated late payments to outgrowers', priority: 'Urgent'},
    {area: 'Employee channel', title: 'Confidential welfare concern', priority: 'Sensitive'},
]

const reports: string[] = ['Monthly insight report', 'Leadership summary']

function VoiceDashboardMockup() {
    const min = 50
    const max = 75
    const line = trend
        .map((v, i) => `${(i / (trend.length - 1)) * 300},${80 - ((v - min) / (max - min)) * 70}`)
        .join(' ')
    const topCount = Math.max(...issues.map((issue) => issue.count))

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
                        Voice by Zanga · Stakeholder Case Dashboard
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
                        <p className="text-sm font-semibold text-gray-900 font-MonaSans">Resolution rate</p>
                        <p className="text-[10px] text-gray-400 font-Montserrat">Last 5 months</p>
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
                        <p className="text-sm font-semibold text-gray-900 font-MonaSans mb-3">Recurring issues</p>
                        <div className="space-y-2.5">
                            {issues.map((issue) => {
                                const top = issue.count === topCount
                                return (
                                    <div key={issue.name}>
                                        <div className="flex justify-between text-[10px] text-gray-500 font-Montserrat mb-1">
                                            <span>{issue.name}</span>
                                            <span className={top ? 'text-terracotta font-semibold' : ''}>{issue.count}</span>
                                        </div>
                                        <div className="h-1.5 rounded-full bg-gray-100">
                                            <div
                                                className={`h-full rounded-full ${top ? 'bg-terracotta' : 'bg-olive'}`}
                                                style={{width: `${(issue.count / topCount) * 100}%`}}
                                            />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="rounded-xl border border-gray-100 p-4">
                        <p className="text-sm font-semibold text-gray-900 font-MonaSans mb-3">Escalations</p>
                        <div className="space-y-2">
                            {escalations.map((escalation) => {
                                const urgent = escalation.priority === 'Urgent'
                                return (
                                    <div key={escalation.title} className={`rounded-lg p-2.5 ${urgent ? 'bg-terracotta/10' : 'bg-gray-50'}`}>
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-[9px] uppercase tracking-wide text-gray-400 font-semibold font-Montserrat">
                                                {escalation.area}
                                            </span>
                                            <span
                                                className={`text-[9px] px-1.5 py-0.5 rounded-full font-Montserrat ${
                                                    urgent ? 'bg-terracotta text-white' : 'bg-gray-200 text-gray-600'
                                                }`}
                                            >
                                                {escalation.priority}
                                            </span>
                                        </div>
                                        <p className="text-[11px] font-semibold text-gray-800 font-MonaSans leading-snug">
                                            {escalation.title}
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
                        Review session · 14 Oct
                    </span>
                </div>
            </div>
        </div>
    )
}

export default function VoiceWhatYouReceive() {
    return (
        <section
            style={{ backgroundColor: 'rgb(250, 248, 246)' }}
            className="md:py-20 py-14 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                    Voice by Zanga
                </span>

                <div className="max-w-3xl">
                    <h2 className="text-3xl md:text-[2.8rem] font-bold mt-3 mb-6 font-MonaSans leading-tight text-gray-700">
                        What you receive
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,550px)_minmax(0,1fr)] gap-10 lg:gap-16 items-start lg:items-stretch mt-4">
                    <div className="flex flex-col">
                        <p className="text-gray-500 font-Montserrat leading-relaxed mb-8">
                            Depending on the scope of implementation, <strong>Voice by Zanga</strong> can include:
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
                        <VoiceDashboardMockup/>
                    </div>
                </div>
            </div>
        </section>
    )
}
