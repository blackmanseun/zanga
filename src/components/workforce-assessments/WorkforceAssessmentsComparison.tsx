import React from 'react'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'

type AccentColor = 'olive-dark' | 'olive' | 'terracotta' | 'terracotta-dark'

type Row = {
    assessment: string
    bestFor: string
    measures: string
    completedBy: string
    output: string
    color: AccentColor
}

const rows: Row[] = [
    {
        assessment: 'Employee Engagement Survey',
        bestFor: 'Understanding engagement, employee experience and retention drivers',
        measures: 'Employee sentiment, engagement and related drivers',
        completedBy: 'Employees',
        output: 'Organisational report and workforce insight',
        color: 'olive-dark',
    },
    {
        assessment: 'Organisational Culture Assessment',
        bestFor: 'Understanding how culture and values are experienced',
        measures: 'Culture, values and behavioural experience',
        completedBy: 'Employees / relevant workforce groups',
        output: 'Culture insight and organisational findings',
        color: 'olive',
    },
    {
        assessment: 'Team Effectiveness Assessment',
        bestFor: 'Understanding how teams work together',
        measures: 'Collaboration, communication and team dynamics',
        completedBy: 'Team members',
        output: 'Team effectiveness report and development insight',
        color: 'terracotta',
    },
    {
        assessment: 'Workforce Analytics',
        bestFor: 'Turning workforce data into organisational intelligence',
        measures: 'Workforce patterns, trends, and organisational data',
        completedBy: 'Organisational / workforce data',
        output: 'Dashboards, analytics and executive reports',
        color: 'terracotta-dark',
    },
    {
        assessment: 'Custom Workforce Survey',
        bestFor: 'Answering organisation-specific workforce questions',
        measures: 'Defined according to the engagement objective',
        completedBy: 'Defined workforce population',
        output: 'Custom survey report and findings',
        color: 'olive-dark',
    },
]

const rowTint: Record<AccentColor, string> = {
    'olive-dark': 'bg-olive-dark/15',
    olive: 'bg-olive/15',
    terracotta: 'bg-terracotta/15',
    'terracotta-dark': 'bg-terracotta-dark/15',
}

const columns: { key: keyof Row; label: string }[] = [
    { key: 'assessment', label: 'Assessment' },
    { key: 'bestFor', label: 'Best for' },
    { key: 'measures', label: 'Measures' },
    { key: 'completedBy', label: 'Completed by' },
    { key: 'output', label: 'Output' },
]

export default function WorkforceAssessmentsComparison() {
    return (
        <section
            id="compare-assessments"
            style={{ backgroundColor: 'rgb(250, 248, 246)' }}
            className="scroll-mt-24 relative overflow-hidden md:py-20 py-14 px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0">
                <div className="bg-[#282A30] w-full h-[40%]"/>
            </div>
            <div className="relative max-w-7xl mx-auto">
                <Reveal className="mb-10 md:text-center">
                    <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                        Compare Assessments
                    </span>
                    <h2 className="hidden md:block text-3xl md:text-[2.8rem] font-bold mt-3 mb-4 font-MonaSans leading-tight text-white">
                        Which Workforce <br className="hidden md:block"/>Assessment Is Right for You?
                    </h2>
                    <h2 className="block md:hidden text-3xl md:text-[2.8rem] font-bold mt-3 mb-4 font-MonaSans leading-tight text-white">
                        Which workforce assessment is right for you?
                    </h2>
                    <p className="text-gray-200 font-Montserrat leading-relaxed max-w-2xl md:mx-auto">
                        Understand the difference between <strong>Zanga&apos;s</strong> workforce assessments and
                        identify the approach that best fits your workforce question.
                    </p>
                </Reveal>

                <Reveal>
                    {/* Table view (md and up) */}
                    <div className="hidden md:block rounded border border-gray-200 bg-white shadow-sm overflow-x-auto">
                        <table className="w-full border-collapse border-t border-b border-slate-300">
                            <thead>
                                <tr className="bg-olive/5">
                                    {columns.map((col) => (
                                        <th
                                            key={col.key}
                                            className="text-left align-top px-5 py-4 text-xs uppercase tracking-widest font-Montserrat font-semibold text-gray-700 whitespace-nowrap"
                                        >
                                            {col.label}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row) => (
                                    <tr key={row.assessment} className={`${rowTint[row.color]} border-t border-b border-slate-300`}>
                                        <td className="px-5 py-5 align-top min-w-[220px] text-gray-800 font-Montserrat font-semibold text-sm leading-relaxed">
                                            {row.assessment}
                                        </td>
                                        <td className="px-5 py-5 align-top min-w-[240px] text-gray-600 font-Montserrat text-sm leading-relaxed">
                                            {row.bestFor}
                                        </td>
                                        <td className="px-5 py-5 align-top min-w-[260px] text-gray-600 font-Montserrat text-sm leading-relaxed">
                                            {row.measures}
                                        </td>
                                        <td className="px-5 py-5 align-top min-w-[220px] text-gray-600 font-Montserrat text-sm leading-relaxed">
                                            {row.completedBy}
                                        </td>
                                        <td className="px-5 py-5 align-top min-w-[260px] text-gray-600 font-Montserrat text-sm leading-relaxed">
                                            {row.output}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Stacked cards (mobile only) */}
                    <div className="md:hidden space-y-4">
                        {rows.map((row) => (
                            <div
                                key={row.assessment}
                                className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden"
                            >
                                <div className={`px-5 py-4 ${rowTint[row.color]}`}>
                                    <h3 className="text-gray-800 font-Montserrat font-semibold text-[15px] leading-snug">
                                        {row.assessment}
                                    </h3>
                                </div>
                                <dl className="divide-y divide-gray-100">
                                    {columns
                                        .filter((col) => col.key !== 'assessment')
                                        .map((col) => (
                                            <div key={col.key} className="px-5 py-4">
                                                <dt className="text-xs uppercase tracking-widest font-Montserrat font-semibold text-gray-400 mb-1">
                                                    {col.label}
                                                </dt>
                                                <dd className="text-sm text-gray-600 font-Montserrat leading-relaxed">
                                                    {row[col.key]}
                                                </dd>
                                            </div>
                                        ))}
                                </dl>
                            </div>
                        ))}
                    </div>
                </Reveal>

                <Reveal>
                    <div className="mt-12">
                        <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center text-left">
                            <div>
                                <h3 className="text-[20px] font-bold font-MonaSans text-[#282A30] mb-2">
                                    Not sure which workforce assessment you need?
                                </h3>
                                <p className="text-black/60 font-Montserrat leading-relaxed max-w-lg md:mx-0 mx-auto">
                                    Tell us what you are trying to understand, and Zanga will help identify
                                    the most appropriate approach.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="#compare-assessments"
                                    className="text-[14px] text-center bg-olive text-white px-8 py-2 rounded-md font-bold hover:bg-olive/90 transition-colors font-Montserrat"
                                >
                                    Find the Right Assessment
                                </Link>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
