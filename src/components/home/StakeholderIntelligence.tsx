import React from 'react'
import Link from 'next/link'
import {
  FiAlertTriangle,
  FiBarChart2,
  FiGitBranch,
  FiHome,
  FiInbox,
  FiMessageSquare,
  FiSend,
  FiSun,
  FiTruck,
} from 'react-icons/fi'
import type {IconType} from 'react-icons'

type Step = {
    label: string
    title: string
    description: string
    Icon: IconType
}

const steps: Step[] = [
    {
        label: 'Step 1',
        title: 'Listen',
        description: 'Every concern is captured through dedicated channels — hotline, WhatsApp, web forms and email.',
        Icon: FiInbox,
    },
    {
        label: 'Step 2',
        title: 'Resolve',
        description:
            'Secure case management, escalation workflows, and investigation tracking move every case to resolution.',
        Icon: FiGitBranch,
    },
    {
        label: 'Step 3',
        title: 'Learn',
        description:
            'Real-time dashboards, trend analysis, and monthly insight reports turn cases into ESG-ready intelligence.',
        Icon: FiBarChart2,
    },
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
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
                <div>
          <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
            How It Works
          </span>
                    <h2 className="text-3xl md:text-[2.75rem] font-bold mt-3 mb-10 font-MonaSans leading-tight">
                        <span className="text-gray-900">Turn Stakeholder Feedback</span>
                        <br/>
                        <span className="text-olive">into Actionable Intelligence</span>
                    </h2>

                    <div className="relative">
                        <div className="absolute left-6 top-6 bottom-6 w-px bg-gray-200" aria-hidden="true"/>
                        <div className="space-y-10">
                            {steps.map((step) => (
                                <div key={step.title} className="relative flex gap-5">
                  <span
                      className="relative z-10 w-12 h-12 shrink-0 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-olive">
                    <step.Icon size={20} aria-hidden="true"/>
                  </span>
                                    <div className="min-w-0">
                                        <p className="text-xs font-semibold text-olive uppercase tracking-wide font-Montserrat mb-1">
                                            {step.label}
                                        </p>
                                        <h3 className="text-lg font-bold text-gray-900 font-MonaSans mb-1">{step.title}</h3>
                                        <p className="text-sm text-gray-500 font-Montserrat leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Link
                        href="/contact"
                        className="inline-block bg-olive text-white px-8 py-4 rounded-md font-semibold text-base hover:bg-olive/90 transition-colors font-Montserrat mt-10"
                    >
                        Request a Demo
                    </Link>
                </div>

                <div>
                    <p className="text-gray-500 font-Montserrat leading-relaxed mb-6">
                        Identify risks earlier, strengthen stakeholder trust, and improve ESG reporting — with every
                        concern
                        captured, tracked, and converted into actionable insight.
                    </p>

                    <div className="rounded-2xl border border-gray-200 shadow-sm p-5 bg-gray-50">
                        <div className="bg-white rounded-xl border border-gray-200 p-5">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <FiMessageSquare className="text-olive" size={18} aria-hidden="true"/>
                                    <p className="text-sm font-semibold text-gray-900 font-MonaSans">Recent Reports</p>
                                </div>
                                <span className="text-xs text-gray-400 font-Montserrat">4 open</span>
                            </div>
                            <div className="space-y-3 mb-4">
                                {reports.map((report) => (
                                    <div
                                        key={report.text}
                                        className="flex items-start gap-3 rounded-lg border border-gray-100 p-3"
                                    >
                                        <span className="w-8 h-8 shrink-0 rounded-full bg-gray-50 flex items-center justify-center text-olive">
                                            <report.Icon size={14} aria-hidden="true"/>
                                        </span>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs text-gray-400 font-Montserrat mb-0.5">{report.category}</p>
                                            <p className="text-sm text-gray-800 font-Montserrat truncate">{report.text}</p>
                                        </div>
                                        <span
                                            className={`shrink-0 text-[10px] font-semibold px-2 py-1 rounded-full font-Montserrat ${statusClasses[report.status]}`}
                                        >
                                            {report.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-400 font-Montserrat">
                                <FiSend size={12} aria-hidden="true"/>
                                Every report is logged, tracked, and routed to the right team.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
