import React from 'react'
import Link from 'next/link'
import {FiAlertTriangle, FiCheckCircle, FiHome, FiMessageSquare, FiSend, FiSun, FiTruck,} from 'react-icons/fi'
import type {IconType} from 'react-icons'

const includes: string[] = [
    'Dedicated reporting channels (hotline, WhatsApp, web forms and email)',
    'Secure case management and escalation workflows',
    'Investigation and resolution tracking',
    'Real-time dashboards and trend analysis',
    'Monthly insight reports',
    'ESG and compliance-ready reporting',
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

export default function StakeholderIntelligence() {
    return (
        <section
            style={{
                backgroundColor: 'rgb(250, 248, 246)',
                backgroundImage:
                    'linear-gradient(rgba(16, 24, 58, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 24, 58, 0.05) 1px, transparent 1px)',
                backgroundSize: '48px 48px',
            }}
            className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto ">
              <span className="text-olive text-md uppercase tracking-widest font-Montserrat font-semibold">
            Zanga stakeholder intelligence
          </span>

                <div className="grid md:grid-cols-2 md:gap-16 items-center">
                    <h2 className="text-3xl md:text-[2.75rem] font-bold mt-3 mb-6 font-MonaSans leading-tight">
                        <span className="text-gray-700">Turn Stakeholder Feedback</span>
                        <br/>
                        <span className="text-olive">into Actionable Intelligence</span>
                    </h2>

                    <p className="text-gray-500 font-Montserrat leading-relaxed">
                        Identify risks earlier. Strengthen stakeholder trust. Improve ESG reporting. Build
                        stronger relationships with confidence.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div>
                        <p className="text-gray-500 font-Montserrat leading-relaxed mb-10">
                            Zanga Stakeholder Intelligence transforms stakeholder engagement from scattered
                            conversations
                            into a structured, auditable system for listening, responding, resolving, and learning.

                           <br/><br/> Whether
                            you're engaging employees, customers, suppliers, farmers, host communities, or project
                            beneficiaries, every concern is captured, tracked, and converted into actionable insight.
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
                            href="/contact"
                            className="inline-block bg-olive text-white px-8 py-4 rounded-md font-semibold text-base hover:bg-olive/90 transition-colors font-Montserrat mt-10"
                        >
                            Request a Demo
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
