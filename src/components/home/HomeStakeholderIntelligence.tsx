import React from 'react'
import Link from 'next/link'
import {FiAlertTriangle, FiCheckCircle, FiHome, FiMessageSquare, FiSend, FiSun, FiTruck,} from 'react-icons/fi'
import type {IconType} from 'react-icons'

const includes: string[] = [
    'Individual assessment and development reports',
    'Leadership capability and competency heat maps',
    'Engagement, culture and sentiment dashboards',
    'Team, function and demographic comparisons',
    'Case-management and escalation visibility',
    'Internal, sector and regional benchmarking',
    'Custom and white-labelled reporting',
]

type ReportStatus = 'New' | 'In Progress' | 'Resolved'

const statusClasses: Record<ReportStatus, string> = {
    New: 'bg-terracotta/10 text-terracotta',
    'In Progress': 'bg-olive/10 text-olive',
    Resolved: 'bg-gray-100 text-gray-500',
}

const reports: { category: string; text: string; status: ReportStatus; Icon: IconType }[] = [
    {
        category: 'Safety',
        text: 'Unsafe working conditions at the north site',
        status: 'In Progress',
        Icon: FiAlertTriangle,
    },
    {
        category: 'Supplier',
        text: 'Delayed payment on invoice #2291',
        status: 'New',
        Icon: FiTruck,
    },
    {
        category: 'Host Community',
        text: 'Water access concern near project site',
        status: 'Resolved',
        Icon: FiHome,
    },
    {
        category: 'Farmer Cooperative',
        text: 'Request for training on new equipment',
        status: 'New',
        Icon: FiSun,
    },
]

export default function HomeStakeholderIntelligence() {
    return (
        <section
            className="md:pb-20 md:pt-0 py-14 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto ">
              <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
           PLATFORM AND REPORTING
          </span>

                <div className="grid md:grid-cols-2 md:gap-16 items-center">
                    <h2 className="text-3xl md:text-[2.75rem] font-bold mt-3 mb-6 font-MonaSans leading-tight">
                        <span className="text-gray-700">See the patterns behind </span>
                        <br className="hidden md:block"/>
                        <span className="text-olive">individual responses.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div>
                        <p className="text-gray-500 font-Montserrat leading-relaxed mb-10">
<strong>Zanga</strong> turns assessments and sentiment into practical organisational
                            intelligence. Track participation, compare teams, identify capability gaps,
                            understand workforce trends and provide leaders with clearer evidence for
                            action.
                        </p>

                        <p className="text-xs font-semibold text-olive uppercase tracking-wide font-Montserrat mb-4">
                            Includes
                        </p>
                        <ul className="space-y-3">
                            {includes.map((item) => (
                                <li key={item}
                                    className="flex items-start gap-3 text-md text-gray-600 font-Montserrat leading-relaxed">
                                    <FiCheckCircle className="text-olive shrink-0 mt-0.5" size={16} aria-hidden="true"/>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="#"
                            className="inline-block bg-olive text-white px-8 py-3 rounded-md font-semibold md:text-[16px] text-[14px] hover:bg-olive/90 transition-colors font-Montserrat mt-10"
                        >
                            Book a Platform Demo
                        </Link>
                    </div>

                    <div className="rounded-2xl border border-gray-200 shadow-sm p-3 sm:p-5 bg-gray-50">
                        <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-5">
                            <div className="flex items-center justify-between gap-2 mb-4">
                                <div className="flex items-center gap-2 min-w-0">
                                    <FiMessageSquare className="text-olive shrink-0" size={18} aria-hidden="true"/>
                                    <p className="text-md font-semibold text-gray-900 font-MonaSans truncate">Recent
                                        Reports</p>
                                </div>
                                <span className="text-xs text-gray-400 font-Montserrat shrink-0">4 open</span>
                            </div>
                            <div className="space-y-3 mb-4">
                                {reports.map((report) => (
                                    <div
                                        key={report.text}
                                        className="flex flex-wrap items-start gap-x-3 gap-y-2 rounded-lg border border-gray-100 p-3"
                                    >
                                    <span
                                        className="w-8 h-8 shrink-0 rounded-full bg-gray-50 flex items-center justify-center text-olive">
                                        <report.Icon size={14} aria-hidden="true"/>
                                    </span>
                                        <div className="flex-1 min-w-[10rem]">
                                            <p className="text-xs text-gray-400 font-Montserrat mb-0.5">{report.category}</p>
                                            <p className="text-md text-gray-800 font-Montserrat break-words">{report.text}</p>
                                        </div>
                                        <span
                                            className={`shrink-0 text-[10px] font-semibold px-2 py-1 rounded-full font-Montserrat ${statusClasses[report.status]}`}
                                        >
                                        {report.status}
                                    </span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-start gap-2 text-xs text-gray-400 font-Montserrat">
                                <FiSend size={12} className="shrink-0 mt-0.5" aria-hidden="true"/>
                                Every report is logged, tracked, and routed to the right team.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
