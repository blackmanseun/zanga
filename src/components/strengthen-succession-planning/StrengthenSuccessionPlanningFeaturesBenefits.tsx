import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import {FiTarget, FiAward, FiBarChart2, FiUsers, FiBookOpen, FiTrendingUp, FiCheck} from "react-icons/fi";
import {FaArrowTrendDown} from "react-icons/fa6";

function ScoreBar({label, value, highlight}: { label: string; value: number; highlight?: boolean }) {
    return (
        <div className="flex items-center gap-2">
            <span className="w-16 text-white/60 text-[9px] font-Montserrat shrink-0">{label}</span>
            <div className="flex-1 h-1.5 rounded-full bg-white/15">
                <div className={`h-full rounded-full ${highlight ? 'bg-terracotta' : 'bg-white'}`} style={{width: `${value}%`}}/>
            </div>
            <span className="w-6 text-right text-white text-[10px] font-semibold font-Montserrat shrink-0">{value}</span>
        </div>
    )
}

export default function StrengthenSuccessionPlanningFeaturesBenefits() {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <Reveal className="text-center mb-14">
          <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
            Features &amp; Benefits
          </span>
                    <h2 className="text-3xl md:text-[2.8rem] leading-[1.1] font-bold text-gray-700 mt-3 font-MonaSans max-w-3xl mx-auto">
                        Make Succession Decisions With Greater Clarity
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
                                            <p className="text-white text-sm font-semibold font-Montserrat">Emerging
                                                Leader Scan</p>
                                            <p className="text-white/70 text-[12px] font-Montserrat">32 employees
                                                assessed &middot; Mid-level</p>
                                        </div>
                                        <div className="rounded-full bg-terracotta px-3 py-1 shrink-0">
                                            <p className="text-white text-[11px] font-Montserrat font-semibold">4
                                                flagged</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl border border-white/20 relative overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"/>
                                    <div className="relative">
                                        <div className="flex items-center justify-between mb-3">
                                            <p className="text-white/60 text-[10px] font-Montserrat uppercase tracking-wide">
                                                Beyond current performance
                                            </p>
                                            <div className="flex items-center gap-3 text-[9px] text-white/70 font-Montserrat">
                                                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-white"/>Performance</span>
                                                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-terracotta"/>Potential</span>
                                            </div>
                                        </div>
                                        {[
                                            {name: 'Amara N.', role: 'Senior Analyst', performance: 72, potential: 88, flag: true},
                                            {name: 'Tunde B.', role: 'Team Lead', performance: 91, potential: 64, flag: false},
                                            {name: 'Zainab K.', role: 'Product Manager', performance: 68, potential: 84, flag: true},
                                        ].map((person) => (
                                            <div key={person.name} className="mb-3 last:mb-0">
                                                <div className="flex justify-between items-center text-[10px] font-Montserrat mb-1">
                                                    <span className="text-white font-semibold">
                                                        {person.name} <span className="text-white/60 font-normal">&middot; {person.role}</span>
                                                    </span>
                                                    {person.flag && (
                                                        <span className="rounded-full px-1.5 py-px text-[8px] font-semibold uppercase tracking-wide text-white bg-terracotta">
                                                            Future leader
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="space-y-1">
                                                    <div className="h-1.5 rounded-full bg-white/15">
                                                        <div className="h-full rounded-full bg-white" style={{width: `${person.performance}%`}}/>
                                                    </div>
                                                    <div className="h-1.5 rounded-full bg-white/15">
                                                        <div className="h-full rounded-full bg-terracotta" style={{width: `${person.potential}%`}}/>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 col-span-3">
                                <span
                                    className="inline-block bg-highlight/10 text-highlight text-xs font-semibold font-Montserrat px-3 py-1 rounded-full mb-2">
                                Potential
                            </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-MonaSans">
                                    Identify future leaders earlier
                                </h3>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    High performance in a current role does not always indicate readiness for greater
                                    responsibility.
                                </p>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    <strong>Zanga</strong> helps organisations look beyond current performance to
                                    understand leadership potential, readiness and the capabilities individuals may need
                                    to strengthen before moving into more complex roles.
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
                                            <FiTarget/>
                                            <p className="text-[13px]">Fit by Zanga</p>
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
                                Readiness
                            </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-MonaSans">
                                    Distinguish readiness from potential
                                </h3>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    Someone may have strong long-term potential but still need development before
                                    stepping into a critical role.
                                </p>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    <strong>Zanga</strong> helps organisations separate these questions, creating a
                                    clearer view of who may be ready now, who may be ready later and where development
                                    support is needed.
                                </p>
                                <div className="pt-10">
                                    <p className="flex items-center gap-1 text-sm text-gray-600 font-Montserrat mb-2">
                                        <strong>Zanga</strong> solution
                                        <span><FaArrowTrendDown className="text-terracotta" size={18}/></span>
                                    </p>
                                    <div className="flex md:flex-row flex-col items-center gap-2">
                                        <Link
                                            href="/assessments/leadership-assessments"
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2 hover:bg-terracotta hover:text-white transition-colors">
                                            <FiAward/>
                                            <p className="text-[13px]">Leadership Assessments</p>
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
                                            <p className="text-white text-sm font-semibold font-Montserrat">Successor
                                                Readiness</p>
                                            <p className="text-white/70 text-[12px] font-Montserrat">Head of Finance
                                                &middot; 4 successors</p>
                                        </div>
                                        <div className="rounded-full bg-white/15 px-3 py-1 shrink-0">
                                            <p className="text-white text-[11px] font-Montserrat font-semibold">Critical
                                                role</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl border border-white/20 relative overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"/>
                                    <div className="relative space-y-3">
                                        {[
                                            {
                                                horizon: 'Ready now',
                                                people: [{name: 'Kofi A.', potential: 'Moderate'}],
                                                accent: 'bg-white',
                                            },
                                            {
                                                horizon: 'Ready in 1–2 years',
                                                people: [{name: 'Ngozi E.', potential: 'High'}, {name: 'Samuel O.', potential: 'Moderate'}],
                                                accent: 'bg-terracotta',
                                            },
                                            {
                                                horizon: 'Ready in 3+ years',
                                                people: [{name: 'Lerato M.', potential: 'High'}],
                                                accent: 'bg-white/40',
                                            },
                                        ].map((group) => (
                                            <div key={group.horizon} className="pb-3 border-b border-white/15 last:pb-0 last:border-0">
                                                <div className="flex items-center gap-1.5 mb-1.5">
                                                    <span className={`w-1.5 h-1.5 rounded-full ${group.accent}`}/>
                                                    <p className="text-white/60 text-[10px] font-Montserrat uppercase tracking-wide">
                                                        {group.horizon}
                                                    </p>
                                                </div>
                                                <div className="space-y-1.5">
                                                    {group.people.map((person) => (
                                                        <div key={person.name} className="flex items-center justify-between gap-3">
                                                            <p className="text-white text-[12px] font-semibold font-Montserrat">{person.name}</p>
                                                            <span
                                                                className={`rounded-full px-2.5 py-0.5 text-white text-[9px] font-semibold font-Montserrat uppercase tracking-wide shrink-0 ${person.potential === 'High' ? 'bg-terracotta' : 'bg-white/20'}`}>
                                                                {person.potential} potential
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
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
                                            <p className="text-white text-sm font-semibold font-Montserrat">Succession
                                                Depth</p>
                                            <p className="text-white/70 text-[12px] font-Montserrat">12 critical roles
                                                reviewed</p>
                                        </div>
                                        <div className="rounded-full bg-terracotta px-3 py-1 shrink-0">
                                            <p className="text-white text-[11px] font-Montserrat font-semibold">2
                                                exposed</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl border border-white/20 relative overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"/>
                                    <div className="relative">
                                        <p className="text-white/60 text-[10px] font-Montserrat uppercase tracking-wide mb-3">
                                            Key-person risk by role
                                        </p>
                                        <div className="space-y-2.5">
                                            {[
                                                {role: 'Chief Risk Officer', successors: 0, level: 'High'},
                                                {role: 'Head of Treasury', successors: 1, level: 'High'},
                                                {role: 'Regional Director', successors: 2, level: 'Medium'},
                                                {role: 'Head of Operations', successors: 3, level: 'Low'},
                                            ].map((row) => (
                                                <div key={row.role} className="flex items-center justify-between gap-3">
                                                    <div className="min-w-0">
                                                        <p className="text-white text-[12px] font-semibold font-Montserrat">{row.role}</p>
                                                        <div className="flex items-center gap-1 mt-1">
                                                            {[0, 1, 2].map((i) => (
                                                                <span key={i}
                                                                      className={`w-5 h-1.5 rounded-full ${i < row.successors ? 'bg-white' : 'bg-white/15'}`}/>
                                                            ))}
                                                            <span className="text-white/60 text-[9px] font-Montserrat ml-1">
                                                                {row.successors} {row.successors === 1 ? 'successor' : 'successors'}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <span
                                                        className={`rounded-full px-2.5 py-0.5 text-white text-[9px] font-semibold font-Montserrat uppercase tracking-wide shrink-0 ${row.level === 'High' ? 'bg-terracotta' : row.level === 'Medium' ? 'bg-white/20' : 'border border-white/25'}`}>
                                                        {row.level} risk
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 col-span-3">
                                <span
                                    className="inline-block bg-highlight/10 text-highlight text-xs font-semibold font-Montserrat px-3 py-1 rounded-full mb-2">
                                Continuity
                            </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-MonaSans">
                                    Reduce key-person risk
                                </h3>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    Succession risk is often concentrated around a small number of roles or individuals.
                                </p>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    <strong>Zanga</strong> helps organisations identify where leadership depth is
                                    limited and where a single departure could create significant disruption, making it
                                    easier to prioritise development and contingency planning.
                                </p>
                                <div className="pt-10">
                                    <p className="flex items-center gap-1 text-sm text-gray-600 font-Montserrat mb-2">
                                        <strong>Zanga</strong> solution
                                        <span><FaArrowTrendDown className="text-terracotta" size={18}/></span>
                                    </p>
                                    <div className="flex md:flex-row flex-col items-center gap-2">
                                        <Link
                                            href="/assessments/leadership-assessments"
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2 hover:bg-terracotta hover:text-white transition-colors">
                                            <FiAward/>
                                            <p className="text-[13px]">Leadership Assessment</p>
                                        </Link>
                                        <Link
                                            href="#"
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2 hover:bg-terracotta hover:text-white transition-colors">
                                            <FiBarChart2/>
                                            <p className="text-[13px]">Organisational Leadership Analytics</p>
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
                                Talent Reviews
                            </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-MonaSans">
                                    Bring more evidence into talent reviews
                                </h3>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    Succession discussions can easily become influenced by visibility, seniority or
                                    manager preference.
                                </p>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    <strong>Zanga</strong> introduces structured assessment insight to support more
                                    consistent talent conversations and give decision-makers a clearer basis for
                                    comparing capability and future readiness.
                                </p>
                                <div className="pt-10">
                                    <p className="flex items-center gap-1 text-sm text-gray-600 font-Montserrat mb-2">
                                        <strong>Zanga</strong> solution
                                        <span><FaArrowTrendDown className="text-terracotta" size={18}/></span>
                                    </p>
                                    <div className="flex md:flex-row flex-col items-center gap-2">
                                        <Link
                                            href="/assessments/leadership-assessments"
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2 hover:bg-terracotta hover:text-white transition-colors">
                                            <FiAward/>
                                            <p className="text-[13px]">Leadership Assessments</p>
                                        </Link>
                                        <Link
                                            href="#"
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2 hover:bg-terracotta hover:text-white transition-colors">
                                            <FiUsers/>
                                            <p className="text-[13px]">Talent Reviews</p>
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
                                            <p className="text-white text-sm font-semibold font-Montserrat">Talent
                                                Review &middot; Q3</p>
                                            <p className="text-white/70 text-[12px] font-Montserrat">Successor slate
                                                &middot; Head of Sales</p>
                                        </div>
                                        <div className="rounded-full bg-white/15 px-3 py-1 shrink-0">
                                            <p className="text-white text-[11px] font-Montserrat font-semibold">Side by
                                                side</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 p-4 rounded-xl border border-white/20 relative overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"/>
                                    <div className="relative">
                                        <p className="text-white/60 text-[10px] font-Montserrat uppercase tracking-wide mb-2">
                                            Structured comparison
                                        </p>
                                        <div className="space-y-3">
                                            {[
                                                {name: 'Chidi Okeke', image: '/images/headshot/2.jpg', capability: 78, potential: 85, readiness: 70},
                                                {name: 'Tobi Adeyemi', image: '/images/headshot/1.jpg', capability: 82, potential: 71, readiness: 80},
                                            ].map((candidate) => (
                                                <div key={candidate.name} className="rounded-lg bg-white/10 border border-white/15 px-3 py-2.5">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <img className="w-7 h-7 object-cover object-top rounded-full shrink-0"
                                                             src={candidate.image} alt={candidate.name}/>
                                                        <p className="text-white text-[12px] font-semibold font-Montserrat">{candidate.name}</p>
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <ScoreBar label="Capability" value={candidate.capability}/>
                                                        <ScoreBar label="Potential" value={candidate.potential} highlight/>
                                                        <ScoreBar label="Readiness" value={candidate.readiness}/>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-3 pt-3 border-t border-white/15 flex flex-wrap gap-x-3 gap-y-1">
                                            {['Assessment data', 'Performance history', 'Experience'].map((item) => (
                                                <span key={item} className="flex items-center gap-1 text-white text-[10px] font-Montserrat">
                                                    <FiCheck className="w-3 h-3"/> {item}
                                                </span>
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
                                className="relative col-span-2 min-h-[280px] md:min-h-[420px] p-4 bg-[url('/images/18.jpg')] bg-cover bg-center rounded-t-3xl md:rounded-l-3xl md:rounded-2xl overflow-hidden flex flex-col justify-between gap-2">
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/70 to-primary/30 rounded-t-3xl md:rounded-l-3xl md:rounded-2xl"/>

                                <div className="relative flex items-center justify-between">
                                    <div className="flex items-center gap-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md pl-1 pr-3 py-1">
                                        <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                                            <FiBookOpen className="w-3.5 h-3.5 text-white"/>
                                        </span>
                                        <p className="text-white text-[11px] font-Montserrat font-semibold">Successor pathway</p>
                                    </div>
                                    <p className="text-white/70 text-[10px] font-Montserrat uppercase tracking-wide">
                                        Ngozi E.
                                    </p>
                                </div>

                                <div className="relative space-y-2">
                                    {[
                                        {step: '01', action: 'Executive coaching on strategic thinking', status: 'Done'},
                                        {step: '02', action: 'Stretch assignment: lead regional rollout', status: 'Active'},
                                        {step: '03', action: 'Emerging-leader programme', status: 'Next'},
                                    ].map((item) => (
                                        <div key={item.step}
                                             className="flex items-center gap-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md px-4 py-2.5">
                                            <span className="text-white/60 text-[10px] font-semibold font-Montserrat shrink-0">
                                                {item.step}
                                            </span>
                                            <p className="flex-1 min-w-0 text-white text-[12px] font-Montserrat leading-snug">
                                                {item.action}
                                            </p>
                                            <span
                                                className={`rounded-full px-2 py-0.5 text-white text-[9px] font-semibold font-Montserrat uppercase tracking-wide shrink-0 ${item.status === 'Active' ? 'bg-terracotta' : 'bg-white/20'}`}>
                                                {item.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="relative rounded-2xl bg-white px-4 py-3 shadow-lg">
                                    <p className="text-gray-400 text-[9px] font-Montserrat uppercase tracking-wide">
                                        Readiness for Head of Finance
                                    </p>
                                    <div className="flex items-end justify-between gap-4 mt-1">
                                        <div>
                                            <p className="text-gray-900 text-2xl font-bold font-MonaSans leading-none">12 mo</p>
                                            <p className="flex items-center gap-1 text-olive text-[10px] font-semibold font-Montserrat mt-1">
                                                <FiTrendingUp className="w-3 h-3"/> Down from 24 months
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
                                Development
                            </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-MonaSans">
                                    Connect succession to development
                                </h3>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    A succession plan is only useful if potential successors are being prepared.
                                </p>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    <strong>Zanga</strong> helps organisations translate assessment insight into
                                    targeted development priorities so emerging leaders can build the capability
                                    required for future roles.
                                </p>
                                <div className="pt-10">
                                    <p className="flex items-center gap-1 text-sm text-gray-600 font-Montserrat mb-2">
                                        <strong>Zanga</strong> solution
                                        <span><FaArrowTrendDown className="text-terracotta" size={18}/></span>
                                    </p>
                                    <div className="flex md:flex-row flex-col items-center gap-2">
                                        <Link
                                            href="/assessments/leadership-assessments"
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2 hover:bg-terracotta hover:text-white transition-colors">
                                            <FiAward/>
                                            <p className="text-[13px]">Leadership Assessments</p>
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
