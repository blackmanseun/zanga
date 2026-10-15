import React from 'react'
import { FiArrowRight, FiCheckCircle, FiFileText, FiHelpCircle, FiUserPlus } from 'react-icons/fi'
import OpenModalButton from '@/components/modal/OpenModalButton'

const deliverables: string[] = [
    'Candidate psychometric assessments',
    'Role-specific assessment configuration',
    'Individual candidate reports',
    'Candidate comparison views',
    'Strengths and areas requiring further exploration',
    'Suggested interview questions',
    'Hiring-manager interpretation support',
    'Behavioural and personality insight',
    'Leadership assessment for senior appointments',
    'Onboarding and development recommendations',
    'Cohort or recruitment-programme reporting',
    'Alignment with relevant competency frameworks',
]

const dimensions: string[] = ['Mindset', 'Relationships', 'Leadership', 'Execution']

const candidates: { initials: string; name: string; alignment: number; scores: number[] }[] = [
    {initials: 'CA', name: 'Candidate A', alignment: 86, scores: [88, 79, 84, 90]},
    {initials: 'CB', name: 'Candidate B', alignment: 74, scores: [70, 91, 66, 72]},
    {initials: 'CC', name: 'Candidate C', alignment: 68, scores: [76, 62, 71, 64]},
]

const strengths: string[] = ['Ownership and follow-through', 'Structured problem-solving']

const toExplore: string[] = ['Delegation under pressure', 'Stakeholder communication style']

const interviewQuestions: string[] = [
    'Tell us about a time you had to hand over work you would rather have kept.',
    'How do you adapt your communication for senior stakeholders?',
]

const dimensionColors: string[] = ['#a3a748', '#FDBF12', '#c55e36', '#0F3460']

function FitReportMockup() {
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
                        Fit by Zanga · Candidate Comparison
                    </p>
                </div>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full font-Montserrat text-olive bg-olive/10 shrink-0">
                    Operations Manager
                </span>
            </div>

            <div className="flex-1 flex flex-col justify-between gap-4 p-4 sm:p-5">
                <div className="rounded-xl border border-gray-100 p-4">
                    <div className="flex items-center justify-between mb-3">
                        <p className="text-sm font-semibold text-gray-900 font-MonaSans">Shortlist overview</p>
                        <div className="hidden sm:flex items-center gap-3">
                            {dimensions.map((dimension, i) => (
                                <span key={dimension} className="flex items-center gap-1 text-[9px] text-gray-400 font-Montserrat">
                                    <span className="w-2 h-2 rounded-full" style={{backgroundColor: dimensionColors[i]}}/>
                                    {dimension}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-3">
                        {candidates.map((candidate, c) => (
                            <div key={candidate.name} className={`flex items-center gap-3 rounded-lg p-2 ${c === 0 ? 'bg-olive/5' : ''}`}>
                                <span className="w-8 h-8 shrink-0 rounded-full bg-olive/10 text-olive text-[10px] font-bold font-MonaSans flex items-center justify-center">
                                    {candidate.initials}
                                </span>
                                <div className="flex-1 min-w-0">
                                    <p className="text-[11px] font-semibold text-gray-800 font-MonaSans mb-1.5">{candidate.name}</p>
                                    <div className="grid grid-cols-4 gap-1.5">
                                        {candidate.scores.map((score, i) => (
                                            <div key={dimensions[i]} className="h-1.5 rounded-full bg-gray-100">
                                                <div
                                                    className="h-full rounded-full"
                                                    style={{width: `${score}%`, backgroundColor: dimensionColors[i]}}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="text-right shrink-0">
                                    <p className={`text-lg font-bold font-MonaSans leading-none ${c === 0 ? 'text-olive' : 'text-gray-800'}`}>
                                        {candidate.alignment}%
                                    </p>
                                    <p className="text-[9px] text-gray-400 font-Montserrat">Role alignment</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="rounded-xl border border-gray-100 p-4">
                        <p className="text-sm font-semibold text-gray-900 font-MonaSans mb-3">Candidate A</p>
                        <p className="text-[9px] uppercase tracking-wide text-gray-400 font-semibold font-Montserrat mb-1.5">
                            Strengths
                        </p>
                        <div className="space-y-1.5 mb-3">
                            {strengths.map((item) => (
                                <p key={item} className="flex items-center gap-1.5 text-[11px] text-gray-700 font-Montserrat">
                                    <FiCheckCircle size={11} className="text-olive shrink-0"/>
                                    {item}
                                </p>
                            ))}
                        </div>
                        <p className="text-[9px] uppercase tracking-wide text-gray-400 font-semibold font-Montserrat mb-1.5">
                            Areas to explore
                        </p>
                        <div className="space-y-1.5">
                            {toExplore.map((item) => (
                                <p key={item} className="flex items-center gap-1.5 text-[11px] text-gray-700 font-Montserrat">
                                    <FiHelpCircle size={11} className="text-terracotta shrink-0"/>
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl border border-gray-100 p-4">
                        <p className="text-sm font-semibold text-gray-900 font-MonaSans mb-3">Suggested interview questions</p>
                        <div className="space-y-2">
                            {interviewQuestions.map((question, i) => (
                                <div key={question} className={`rounded-lg p-2.5 ${i === 0 ? 'bg-terracotta/10' : 'bg-gray-50'}`}>
                                    <p className="text-[11px] font-semibold text-gray-800 font-MonaSans leading-snug">
                                        {question}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="inline-flex items-center gap-1.5 text-[10px] px-2.5 py-1.5 rounded-md border border-gray-200 bg-gray-50 text-gray-600 font-Montserrat">
                        <FiFileText size={11}/>
                        Individual candidate reports
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[10px] px-2.5 py-1.5 rounded-md text-white bg-olive font-Montserrat">
                        <FiUserPlus size={11}/>
                        Onboarding recommendations
                    </span>
                </div>
            </div>
        </div>
    )
}

export default function FitWhatYouReceive() {
    return (
        <section
            id="recruitment-psychometrics"
            style={{ backgroundColor: 'rgb(250, 248, 246)' }}
            className="scroll-mt-24 md:py-20 py-14 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                    Fit by Zanga
                </span>

                <div className="max-w-3xl">
                    <h2 className="text-3xl md:text-[2.8rem] font-bold mt-3 mb-6 font-MonaSans leading-tight text-gray-700">
                        What you receive
                    </h2>
                </div>

                <div className="grid lg:grid-cols-[550px_1fr] gap-10 lg:gap-16 items-start lg:items-stretch mt-4">
                    <div className="flex flex-col">
                        <p className="text-gray-500 font-Montserrat leading-relaxed mb-8">
                            Depending on the role and scope of the engagement, <strong>Fit by Zanga</strong> can provide:
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
                        <FitReportMockup/>
                    </div>
                </div>
            </div>
        </section>
    )
}
