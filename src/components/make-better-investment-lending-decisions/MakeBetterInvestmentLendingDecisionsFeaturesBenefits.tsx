import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import {FiSearch, FiAward, FiUser, FiBriefcase, FiBookOpen, FiCheck, FiTrendingUp, FiCalendar} from "react-icons/fi";
import {FaArrowTrendDown} from "react-icons/fa6";

function CapabilityBar({label, value, gap}: { label: string; value: number; gap?: boolean }) {
    return (
        <div className="mb-2.5 last:mb-0">
            <div className="flex justify-between items-center text-[10px] text-white/70 font-Montserrat mb-1">
                <span className="flex items-center gap-1.5">
                    {label}
                    <span
                        className={`rounded-full px-1.5 py-px text-[8px] font-semibold uppercase tracking-wide ${gap ? 'bg-terracotta text-white' : 'bg-white/20 text-white'}`}>
                        {gap ? 'Gap' : 'Strength'}
                    </span>
                </span>
                <span className="font-semibold text-white">{value}</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/15">
                <div className={`h-full rounded-full ${gap ? 'bg-terracotta' : 'bg-white'}`} style={{width: `${value}%`}}/>
            </div>
        </div>
    )
}

export default function MakeBetterInvestmentLendingDecisionsFeaturesBenefits() {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <Reveal className="text-center mb-14">
          <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
            Features &amp; Benefits
          </span>
                    <h2 className="text-3xl md:text-[2.8rem] leading-[1.1] font-bold text-gray-700 mt-3 font-MonaSans max-w-3xl mx-auto">
                        Add People Intelligence to Financial Diligence
                    </h2>
                </Reveal>

                <div className="flex flex-col gap-12">
                    <div className="bg-gray-50 rounded-3xl border border-gray-200 p-1 shadow-sm w-full xl:w-[80%] mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-5 md:gap-8">
                            <div
                                className="md:p-6 p-2 col-span-2 min-h-[280px] md:min-h-[420px] bg-[url('/images/17.jpg')] bg-cover bg-top rounded-t-3xl md:rounded-l-3xl md:rounded-2xl flex flex-col justify-between gap-4 relative">
                                <div className="absolute inset-0 bg-slate-800/40 rounded-t-3xl md:rounded-l-3xl md:rounded-2xl"/>
                                <div className="p-4 rounded-xl border border-white/20 relative overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"/>
                                    <div className="relative flex items-center justify-between gap-3">
                                        <div>
                                            <p className="text-white text-sm font-semibold font-Montserrat">Management
                                                Team Profile</p>
                                            <p className="text-white/70 text-[12px] font-Montserrat">Founder + 3
                                                executives</p>
                                        </div>
                                        <div className="rounded-full bg-white/15 px-3 py-1 shrink-0">
                                            <p className="text-white text-[11px] font-Montserrat font-semibold">Assessed</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl border border-white/20 relative overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"/>
                                    <div className="relative">
                                        <p className="text-white/60 text-[10px] font-Montserrat uppercase tracking-wide mb-2">
                                            Founder capability
                                        </p>
                                        <CapabilityBar label="Strategic thinking" value={82}/>
                                        <CapabilityBar label="Financial discipline" value={76}/>
                                        <CapabilityBar label="Adaptability" value={71}/>
                                        <CapabilityBar label="Delegation" value={48} gap/>
                                        <div className="mt-4 pt-3 border-t border-white/15">
                                            <p className="text-white/60 text-[10px] font-Montserrat uppercase tracking-wide mb-1.5">
                                                Behavioural pattern
                                            </p>
                                            <p className="text-white text-[11px] font-Montserrat leading-snug">
                                                Strong commercial instinct; tends to centralise decisions under
                                                pressure.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 col-span-3">
                                <span
                                    className="inline-block bg-highlight/10 text-highlight text-xs font-semibold font-Montserrat px-3 py-1 rounded-full mb-2">
                                Management
                            </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-MonaSans">
                                    Assess founder and management capability
                                </h3>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    A business can look attractive on paper and still carry significant execution risk.
                                </p>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    <strong>Zanga</strong> helps institutions understand the leadership strengths,
                                    development gaps and behavioural patterns of founders and management teams so
                                    people-related risk can be considered alongside financial and operational analysis.
                                </p>
                                <div className="pt-10">
                                    <p className="flex items-center gap-1 text-sm text-gray-600 font-Montserrat mb-2">
                                        <strong>Zanga</strong> solution
                                        <span><FaArrowTrendDown className="text-terracotta" size={18}/></span>
                                    </p>
                                    <div className="flex md:flex-row flex-col items-center gap-2">
                                        <Link
                                            href="#"
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2 hover:bg-terracotta hover:text-white transition-colors">
                                            <FiSearch/>
                                            <p className="text-[13px]">Diligence by Zanga</p>
                                        </Link>
                                        <Link
                                            href="/assessments/leadership-assessments"
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2 hover:bg-terracotta hover:text-white transition-colors">
                                            <FiAward/>
                                            <p className="text-[13px]">Leadership Assessments</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-3xl border border-gray-200 p-1 shadow-sm w-full xl:w-[80%] mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-5 md:gap-8">
                            <div className="p-4 col-span-3">
                                <span
                                    className="inline-block bg-highlight/10 text-highlight text-xs font-semibold font-Montserrat px-3 py-1 rounded-full mb-2">
                                Lending
                            </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-MonaSans">
                                    Strengthen lending decisions
                                </h3>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    For many SMEs and growth businesses, the founder and management team are central to
                                    business resilience.
                                </p>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    <strong>Zanga</strong> provides an additional layer of structured insight to help
                                    lenders understand the people responsible for deploying capital, managing growth and
                                    meeting obligations.
                                </p>
                                <div className="pt-10">
                                    <p className="flex items-center gap-1 text-sm text-gray-600 font-Montserrat mb-2">
                                        <strong>Zanga</strong> solution
                                        <span><FaArrowTrendDown className="text-terracotta" size={18}/></span>
                                    </p>
                                    <div className="flex md:flex-row flex-col items-center gap-2">
                                        <Link
                                            href="#"
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2 hover:bg-terracotta hover:text-white transition-colors">
                                            <FiSearch/>
                                            <p className="text-[13px]">Diligence by Zanga</p>
                                        </Link>
                                        <Link
                                            href="#"
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2 hover:bg-terracotta hover:text-white transition-colors">
                                            <FiUser/>
                                            <p className="text-[13px]">Founder Assessment</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="md:p-6 p-2 col-span-2 min-h-[280px] md:min-h-[420px] bg-[url('/images/16.jpg')] bg-cover bg-center rounded-b-3xl md:rounded-r-3xl md:rounded-2xl flex flex-col justify-between gap-4 relative">
                                <div className="absolute inset-0 bg-slate-800/40 rounded-b-3xl md:rounded-r-3xl md:rounded-2xl"/>
                                <div className="p-4 rounded-xl border border-white/20 relative overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"/>
                                    <div className="relative flex items-center justify-between gap-3">
                                        <div>
                                            <p className="text-white text-sm font-semibold font-Montserrat">Credit
                                                Application</p>
                                            <p className="text-white/70 text-[12px] font-Montserrat">SME working-capital
                                                facility</p>
                                        </div>
                                        <div className="rounded-full bg-terracotta px-3 py-1 shrink-0">
                                            <p className="text-white text-[11px] font-Montserrat font-semibold">In
                                                review</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl border border-white/20 relative overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"/>
                                    <div className="relative">
                                        <p className="text-white/60 text-[10px] font-Montserrat uppercase tracking-wide mb-3">
                                            Evidence considered
                                        </p>
                                        <div className="space-y-2.5">
                                            {[
                                                {area: 'Financial statements', note: '3 years audited', level: 'Strong'},
                                                {area: 'Cash flow', note: 'Seasonal but stable', level: 'Adequate'},
                                                {area: 'Collateral', note: 'Equipment & receivables', level: 'Adequate'},
                                                {area: 'Founder & management', note: 'Thin second line', level: 'Watch'},
                                            ].map((row) => (
                                                <div key={row.area} className="flex items-center justify-between gap-3">
                                                    <div className="min-w-0">
                                                        <p className="text-white text-[12px] font-semibold font-Montserrat">{row.area}</p>
                                                        <p className="text-white/70 text-[10px] font-Montserrat">{row.note}</p>
                                                    </div>
                                                    <span
                                                        className={`rounded-full px-2.5 py-0.5 text-white text-[9px] font-semibold font-Montserrat uppercase tracking-wide shrink-0 ${row.level === 'Watch' ? 'bg-terracotta' : row.level === 'Strong' ? 'bg-white/20' : 'border border-white/25'}`}>
                                                        {row.level}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-3xl border border-gray-200 p-1 shadow-sm w-full xl:w-[80%] mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-5 md:gap-8">
                            <div
                                className="md:p-6 p-2 col-span-2 min-h-[280px] md:min-h-[420px] bg-[url('/images/19.jpg')] bg-cover bg-center rounded-t-3xl md:rounded-l-3xl md:rounded-2xl flex flex-col justify-between gap-4 relative">
                                <div className="absolute inset-0 bg-slate-800/40 rounded-t-3xl md:rounded-l-3xl md:rounded-2xl"/>
                                <div className="p-4 rounded-xl border border-white/20 relative overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"/>
                                    <div className="relative flex items-center justify-between gap-3">
                                        <div>
                                            <p className="text-white text-sm font-semibold font-Montserrat">Diligence
                                                Workstreams</p>
                                            <p className="text-white/70 text-[12px] font-Montserrat">Growth equity
                                                &middot; target company</p>
                                        </div>
                                        <div className="rounded-full bg-white/15 px-3 py-1 shrink-0">
                                            <p className="text-white text-[11px] font-Montserrat font-semibold">Day 12</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl border border-white/20 relative overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"/>
                                    <div className="relative">
                                        <div className="grid grid-cols-4 gap-1.5 mb-4">
                                            {['Market', 'Financial', 'Legal', 'Leadership'].map((stream, i) => (
                                                <div key={stream}
                                                     className={`rounded-lg px-1.5 py-1.5 text-center ${i === 3 ? 'bg-terracotta' : 'bg-white/10 border border-white/15'}`}>
                                                    <FiCheck className="w-3 h-3 text-white mx-auto"/>
                                                    <p className="text-white text-[8px] font-semibold font-Montserrat mt-0.5">{stream}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-white/60 text-[10px] font-Montserrat uppercase tracking-wide mb-2">
                                            Leadership workstream
                                        </p>
                                        {[
                                            {label: 'Founder capability', value: 79, gap: false},
                                            {label: 'Management depth', value: 54, gap: true},
                                            {label: 'Leadership readiness', value: 68, gap: false},
                                        ].map((row) => (
                                            <div key={row.label} className="flex items-center gap-2 mb-2 last:mb-0">
                                                <span className="w-24 text-white/70 text-[10px] font-Montserrat shrink-0">{row.label}</span>
                                                <div className="flex-1 h-1.5 rounded-full bg-white/15">
                                                    <div className={`h-full rounded-full ${row.gap ? 'bg-terracotta' : 'bg-white'}`}
                                                         style={{width: `${row.value}%`}}/>
                                                </div>
                                                <span className="w-6 text-right text-white text-[10px] font-semibold font-Montserrat shrink-0">{row.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 col-span-3">
                                <span
                                    className="inline-block bg-highlight/10 text-highlight text-xs font-semibold font-Montserrat px-3 py-1 rounded-full mb-2">
                                Due Diligence
                            </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-MonaSans">
                                    Improve investment due diligence
                                </h3>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    Traditional diligence can assess market, financial, legal and operational factors
                                    while still leaving leadership quality relatively subjective.
                                </p>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    <strong>Zanga</strong> helps investors bring more structure into the assessment of
                                    founder capability, management depth and leadership readiness.
                                </p>
                                <div className="pt-10">
                                    <p className="flex items-center gap-1 text-sm text-gray-600 font-Montserrat mb-2">
                                        <strong>Zanga</strong> solution
                                        <span><FaArrowTrendDown className="text-terracotta" size={18}/></span>
                                    </p>
                                    <div className="flex md:flex-row flex-col items-center gap-2">
                                        <Link
                                            href="#"
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2 hover:bg-terracotta hover:text-white transition-colors">
                                            <FiSearch/>
                                            <p className="text-[13px]">Diligence by Zanga</p>
                                        </Link>
                                        <Link
                                            href="#"
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2 hover:bg-terracotta hover:text-white transition-colors">
                                            <FiBriefcase/>
                                            <p className="text-[13px]">Executive Leadership Assessment</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-3xl border border-gray-200 p-1 shadow-sm w-full xl:w-[80%] mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-5 md:gap-8">
                            <div className="p-4 col-span-3">
                                <span
                                    className="inline-block bg-highlight/10 text-highlight text-xs font-semibold font-Montserrat px-3 py-1 rounded-full mb-2">
                                Key-Person Risk
                            </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-MonaSans">
                                    Identify key-person and leadership risk
                                </h3>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    Where too much knowledge, authority or decision-making sits with one individual,
                                    business resilience may be vulnerable.
                                </p>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    <strong>Zanga</strong> helps surface leadership concentration, succession concerns
                                    and capability gaps that may require attention before or after capital is deployed.
                                </p>
                                <div className="pt-10">
                                    <p className="flex items-center gap-1 text-sm text-gray-600 font-Montserrat mb-2">
                                        <strong>Zanga</strong> solution
                                        <span><FaArrowTrendDown className="text-terracotta" size={18}/></span>
                                    </p>
                                    <div className="flex md:flex-row flex-col items-center gap-2">
                                        <Link
                                            href="#"
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2 hover:bg-terracotta hover:text-white transition-colors">
                                            <FiSearch/>
                                            <p className="text-[13px]">Diligence by Zanga</p>
                                        </Link>
                                        <Link
                                            href="/assessments/leadership-assessments"
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2 hover:bg-terracotta hover:text-white transition-colors">
                                            <FiAward/>
                                            <p className="text-[13px]">Leadership Assessment</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="md:p-6 p-2 col-span-2 min-h-[280px] md:min-h-[420px] bg-[url('/images/13.jpg')] bg-cover bg-center rounded-b-3xl md:rounded-r-3xl md:rounded-2xl flex flex-col justify-between gap-4 relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-olive/80 to-[#6b7027]/85 rounded-b-3xl md:rounded-r-3xl md:rounded-2xl"/>
                                <div className="p-4 rounded-xl border border-white/20 relative overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"/>
                                    <div className="relative flex items-center justify-between gap-3">
                                        <div>
                                            <p className="text-white text-sm font-semibold font-Montserrat">Leadership
                                                Concentration</p>
                                            <p className="text-white/70 text-[12px] font-Montserrat">Portfolio company
                                                &middot; Agri-processing</p>
                                        </div>
                                        <div className="rounded-full bg-white/15 px-3 py-1 shrink-0">
                                            <p className="text-white text-[11px] font-Montserrat font-semibold">Flagged</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 p-4 rounded-xl border border-white/20 relative overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"/>
                                    <div className="relative">
                                        <p className="text-white/60 text-[10px] font-Montserrat uppercase tracking-wide mb-2">
                                            Where risk sits
                                        </p>
                                        <div className="grid grid-cols-3 gap-2">
                                            {[
                                                {label: 'Decisions held by CEO', value: '78%', note: 'High', risk: true},
                                                {label: 'Ready successors', value: '0', note: 'For CEO', risk: true},
                                                {label: 'Exec capability', value: '64', note: 'Moderate', risk: false},
                                            ].map((stat) => (
                                                <div key={stat.label} className="rounded-lg bg-white/10 border border-white/15 px-2 py-2">
                                                    <p className="text-white/60 text-[9px] font-Montserrat leading-tight">{stat.label}</p>
                                                    <p className="text-white text-lg font-bold font-MonaSans leading-tight mt-1">{stat.value}</p>
                                                    <p className={`text-[10px] font-semibold font-Montserrat ${stat.risk ? 'text-terracotta' : 'text-white'}`}>
                                                        {stat.note}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-4 pt-3 border-t border-white/15">
                                            <p className="text-white/60 text-[10px] font-Montserrat uppercase tracking-wide mb-2">
                                                Requires attention
                                            </p>
                                            <div className="space-y-1.5">
                                                {[
                                                    'Supplier and banking relationships held only by the founder',
                                                    'No finance lead below CFO level',
                                                ].map((item, i) => (
                                                    <div key={item} className="flex items-start gap-2">
                                                        <span
                                                            className={`w-4 h-4 rounded-full text-white text-[9px] font-semibold flex items-center justify-center shrink-0 ${i === 0 ? 'bg-terracotta' : 'bg-white/20'}`}>
                                                            {i + 1}
                                                        </span>
                                                        <p className="text-white text-[11px] font-Montserrat leading-snug">{item}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-3xl border border-gray-200 p-1 shadow-sm w-full xl:w-[80%] mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-5 md:gap-8">
                            <div
                                className="relative col-span-2 min-h-[280px] md:min-h-[420px] p-4 bg-[url('/images/18.jpg')] bg-cover bg-center rounded-t-3xl md:rounded-l-3xl md:rounded-2xl overflow-hidden flex flex-col justify-between gap-2">
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/70 to-primary/30 rounded-t-3xl md:rounded-l-3xl md:rounded-2xl"/>

                                <div className="relative flex items-center justify-between">
                                    <div className="flex items-center gap-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md pl-1 pr-3 py-1">
                                        <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                                            <FiCalendar className="w-3.5 h-3.5 text-white"/>
                                        </span>
                                        <p className="text-white text-[11px] font-Montserrat font-semibold">Value-creation plan</p>
                                    </div>
                                    <p className="text-white/70 text-[10px] font-Montserrat uppercase tracking-wide">
                                        Year 1
                                    </p>
                                </div>

                                <div className="relative space-y-2">
                                    {[
                                        {quarter: 'Q1', action: 'Leadership coaching for founder', status: 'Done'},
                                        {quarter: 'Q2', action: 'Appoint and onboard a COO', status: 'Active'},
                                        {quarter: 'Q3', action: 'CEO succession plan agreed', status: 'Next'},
                                    ].map((step) => (
                                        <div key={step.quarter}
                                             className="flex items-center gap-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md px-4 py-2.5">
                                            <span className="text-white/60 text-[10px] font-semibold font-Montserrat shrink-0">
                                                {step.quarter}
                                            </span>
                                            <p className="flex-1 min-w-0 text-white text-[12px] font-Montserrat leading-snug">
                                                {step.action}
                                            </p>
                                            <span
                                                className={`rounded-full px-2 py-0.5 text-white text-[9px] font-semibold font-Montserrat uppercase tracking-wide shrink-0 ${step.status === 'Active' ? 'bg-terracotta' : 'bg-white/20'}`}>
                                                {step.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="relative rounded-2xl bg-white px-4 py-3 shadow-lg">
                                    <p className="text-gray-400 text-[9px] font-Montserrat uppercase tracking-wide">
                                        Management team readiness
                                    </p>
                                    <div className="flex items-end justify-between gap-4 mt-1">
                                        <div>
                                            <p className="text-gray-900 text-2xl font-bold font-MonaSans leading-none">72</p>
                                            <p className="flex items-center gap-1 text-olive text-[10px] font-semibold font-Montserrat mt-1">
                                                <FiTrendingUp className="w-3 h-3"/> +15 pts since investment
                                            </p>
                                        </div>
                                        <div className="flex items-end gap-1.5 h-10">
                                            {[40, 55, 78, 100].map((height, i) => (
                                                <div key={i}
                                                     className={`w-4 rounded-t ${i === 3 ? 'bg-olive' : 'bg-olive/30'}`}
                                                     style={{height: `${height}%`}}/>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 col-span-3">
                                <span
                                    className="inline-block bg-highlight/10 text-highlight text-xs font-semibold font-Montserrat px-3 py-1 rounded-full mb-2">
                                Portfolio
                            </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-MonaSans">
                                    Support portfolio development after investment
                                </h3>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    Leadership insight is useful beyond the investment decision.
                                </p>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    Assessment findings can help investors and lenders identify where portfolio
                                    companies may need leadership development, management support or stronger succession
                                    planning.
                                </p>
                                <div className="pt-10">
                                    <p className="flex items-center gap-1 text-sm text-gray-600 font-Montserrat mb-2">
                                        <strong>Zanga</strong> solution
                                        <span><FaArrowTrendDown className="text-terracotta" size={18}/></span>
                                    </p>
                                    <div className="flex md:flex-row flex-col items-center gap-2">
                                        <Link
                                            href="#"
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2 hover:bg-terracotta hover:text-white transition-colors">
                                            <FiSearch/>
                                            <p className="text-[13px]">Diligence by Zanga</p>
                                        </Link>
                                        <Link
                                            href="#"
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2 hover:bg-terracotta hover:text-white transition-colors">
                                            <FiBookOpen/>
                                            <p className="text-[13px]">Training &amp; Development</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
