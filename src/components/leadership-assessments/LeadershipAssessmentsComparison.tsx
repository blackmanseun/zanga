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
        assessment: 'Leadership Competency Assessment',
        bestFor: 'Leaders, managers and emerging leaders who need a clear view of current leadership capability',
        measures: 'Core leadership competencies, strengths and development priorities',
        completedBy: 'Individual leader',
        output: 'Detailed individual leadership report with strengths, gaps and development priorities',
        color: 'olive-dark',
    },
    {
        assessment: '360° Feedback Leadership Assessment',
        bestFor: 'Established and senior leaders who need feedback from multiple perspectives',
        measures: 'Leadership behaviour, competency demonstration, self-perception and how leadership is experienced by others',
        completedBy: 'Leader + manager + peers + direct reports',
        output: '360° feedback report showing areas of alignment, difference and development priority',
        color: 'olive',
    },
    {
        assessment: 'Leadership Potential Assessment',
        bestFor: 'Organisations identifying high-potential talent, succession candidates and future leaders',
        measures: 'Future leadership potential, readiness and indicators of capacity for greater responsibility',
        completedBy: 'Individual participant',
        output: 'Potential and readiness report to support talent and succession decisions',
        color: 'terracotta',
    },
    {
        assessment: 'Executive Leadership Assessment',
        bestFor: 'Senior executives, C-suite candidates and business-critical leadership appointments',
        measures: 'Executive capability, leadership strengths, behavioural tendencies, potential risks and readiness for complex leadership roles',
        completedBy: 'Executive participant; assessment pathway may vary by engagement',
        output: 'Executive leadership insight report with development and decision-support recommendations',
        color: 'terracotta-dark',
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

export default function LeadershipAssessmentsComparison() {
    return (
        <section
            style={{ backgroundColor: 'rgb(250, 248, 246)' }}
            className="relative overflow-hidden md:py-20 py-14 px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0">
                <div className="bg-[#282A30] w-full h-[40%]"/>
            </div>
            <div className="relative max-w-7xl mx-auto">
                <Reveal className="mb-10 md:text-center">
                    <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                        Compare Assessments
                    </span>
                    <h2 className="text-3xl md:text-[2.8rem] font-bold mt-3 mb-4 font-MonaSans leading-tight text-white">
                        Which Leadership <br className="hidden md:block"/>Assessment is Right for You?
                    </h2>
                    <p className="text-gray-200 font-Montserrat leading-relaxed max-w-2xl md:mx-auto">
                        Compare <strong>Zanga&apos;s</strong> leadership assessments by purpose, measurement approach and
                        output to identify the best fit for your leadership decision.
                    </p>
                </Reveal>

                <Reveal>
                    <div className="rounded border border-gray-200 bg-white shadow-sm overflow-x-auto">
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
                </Reveal>

                <Reveal>
                    <div className="mt-12 md:rounded-3xl rounded-xl bg-[#282A30] py-10 px-6 md:p-12">
                        <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center text-center md:text-left">
                            <div>
                                <h3 className="text-2xl font-bold font-MonaSans text-white mb-2">
                                    Not sure which assessment you need?
                                </h3>
                                <p className="text-white/60 font-Montserrat leading-relaxed max-w-lg md:mx-0 mx-auto">
                                    Tell us what leadership decision you are trying to make, and we will
                                    help you identify the most appropriate assessment.
                                </p>
                            </div>
                            <Link
                                href="#"
                                className="bg-olive text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-olive/90 transition-colors font-Montserrat text-center whitespace-nowrap"
                            >
                                Find the Right Assessment
                            </Link>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
