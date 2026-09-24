import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import {FiTarget, FiAward, FiRefreshCw, FiBookOpen, FiBriefcase, FiArrowUpRight, FiLock} from "react-icons/fi";
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
                <span className="font-semibold text-white">{value}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/15">
                <div className={`h-full rounded-full ${gap ? 'bg-terracotta' : 'bg-white'}`} style={{width: `${value}%`}}/>
            </div>
        </div>
    )
}

function PerceptionBar({label, self, others, status}: { label: string; self: number; others: number; status: string }) {
    return (
        <div className="mb-3 last:mb-0">
            <div className="flex justify-between items-center text-[10px] text-white/70 font-Montserrat mb-1">
                <span>{label}</span>
                <span className="rounded-full bg-white/20 px-1.5 py-px text-[8px] font-semibold uppercase tracking-wide text-white">
                    {status}
                </span>
            </div>
            <div className="space-y-1">
                <div className="h-1.5 rounded-full bg-white/15">
                    <div className="h-full rounded-full bg-white" style={{width: `${self}%`}}/>
                </div>
                <div className="h-1.5 rounded-full bg-white/15">
                    <div className="h-full rounded-full bg-terracotta" style={{width: `${others}%`}}/>
                </div>
            </div>
        </div>
    )
}

export default function DevelopStrongerLeadersFeaturesBenefits() {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <Reveal className="text-center mb-14">
          <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
            Features &amp; Benefits
          </span>
                    <h2 className="text-3xl md:text-[2.8rem] leading-[1.1] font-bold text-gray-700 mt-3 font-MonaSans max-w-3xl mx-auto">
                        Build Leadership Development Around What People Actually Need
                    </h2>
                </Reveal>

                <div className="flex flex-col gap-12">
                    <div className="bg-gray-50 rounded-3xl border border-gray-200 p-1 shadow-sm w-full xl:w-[80%] mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-5 md:gap-8">
                            <div
                                className="md:p-6 p-2 col-span-2 min-h-[280px] md:min-h-[420px] bg-[url('/images/17.jpg')] bg-cover bg-top rounded-t-3xl md:rounded-l-3xl md:rounded-2xl flex flex-col justify-between gap-4 relative">
                                <div className="absolute inset-0 bg-slate-800/40 rounded-t-3xl md:rounded-l-3xl md:rounded-2xl"/>
                                <div
                                    className="p-4 rounded-xl border border-white/20 relative overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"/>
                                    <div className="relative flex items-center justify-between gap-3">
                                        <div className="flex items-center gap-3">
                                            <img
                                                className="w-11 h-11 object-cover object-top rounded-full shrink-0"
                                                src="/images/headshot/6.jpg" alt="Tolu Adebayo"/>
                                            <div>
                                                <p className="text-white text-sm font-semibold font-Montserrat">Tolu
                                                    Adebayo</p>
                                                <p className="text-white/70 text-[12px] font-Montserrat">Head of
                                                    Operations</p>
                                            </div>
                                        </div>
                                        <div className="rounded-full bg-white/15 px-3 py-1 shrink-0">
                                            <p className="text-white text-[11px] font-Montserrat font-semibold">Baseline</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="p-4 rounded-xl border border-white/20 relative overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"/>
                                    <div className="relative">
                                        <p className="text-white/60 text-[10px] font-Montserrat uppercase tracking-wide mb-2">
                                            Capability Snapshot
                                        </p>
                                        <CapabilityBar label="Strategic Thinking" value={86}/>
                                        <CapabilityBar label="Decision-Making" value={81}/>
                                        <CapabilityBar label="Coaching Others" value={54} gap/>
                                        <div className="mt-4 pt-3 border-t border-white/15">
                                            <p className="text-white/60 text-[10px] font-Montserrat uppercase tracking-wide mb-2">
                                                Development Priorities
                                            </p>
                                            <div className="space-y-1.5">
                                                <div className="flex items-center gap-2">
                                                    <span
                                                        className="w-4 h-4 rounded-full bg-terracotta text-white text-[9px] font-semibold flex items-center justify-center shrink-0">1</span>
                                                    <p className="text-white text-[11px] font-Montserrat">Coaching and
                                                        developing others</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span
                                                        className="w-4 h-4 rounded-full bg-white/20 text-white text-[9px] font-semibold flex items-center justify-center shrink-0">2</span>
                                                    <p className="text-white text-[11px] font-Montserrat">Delegation and
                                                        empowerment</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 col-span-3">
                                <span
                                    className="inline-block bg-highlight/10 text-highlight text-xs font-semibold font-Montserrat px-3 py-1 rounded-full mb-2">
                                Capability
                            </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-MonaSans">
                                    Understand current leadership capability
                                </h3>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    Development is more effective when leaders know where they stand.
                                </p>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    <strong>Zanga</strong> helps organisations identify leadership strengths, capability
                                    gaps and development priorities so learning begins with evidence rather than
                                    assumptions.
                                </p>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    Assessment insight gives both the leader and the organisation a clearer starting
                                    point for meaningful development.
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
                                Feedback
                            </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-MonaSans">
                                    Give leaders better feedback
                                </h3>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    Leaders do not always see themselves the way others experience them.
                                </p>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    <strong>Zanga</strong>&apos;s 360 Feedback Leadership Assessment combines
                                    self-perception with feedback from managers, peers and direct reports, helping
                                    leaders understand where perceptions align and where important gaps may exist.
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
                                            href="#"
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2 hover:bg-terracotta hover:text-white transition-colors">
                                            <FiRefreshCw/>
                                            <p className="text-[13px]">360 Leadership Assessment</p>
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
                                            <p className="text-white text-sm font-semibold font-Montserrat">360&deg; Feedback</p>
                                            <p className="text-white/70 text-[12px] font-Montserrat">14 raters &middot; 3 groups</p>
                                        </div>
                                        <div className="flex -space-x-3">
                                            <img className="w-8 h-8 rounded-full ring-2 ring-white/40 object-cover object-top"
                                                 src="/images/headshot/1.jpg" alt=""/>
                                            <img className="w-8 h-8 rounded-full ring-2 ring-white/40 object-cover object-top"
                                                 src="/images/headshot/3.jpg" alt=""/>
                                            <img className="w-8 h-8 rounded-full ring-2 ring-white/40 object-cover object-top"
                                                 src="/images/headshot/7.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="relative flex flex-wrap gap-1.5 mt-3">
                                        {['Manager', 'Peers', 'Direct reports'].map((group) => (
                                            <span key={group}
                                                  className="rounded-full bg-white/15 px-2.5 py-0.5 text-white text-[10px] font-Montserrat">
                                                {group}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl border border-white/20 relative overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"/>
                                    <div className="relative">
                                        <div className="flex items-center justify-between mb-3">
                                            <p className="text-white/60 text-[10px] font-Montserrat uppercase tracking-wide">
                                                Self vs Others
                                            </p>
                                            <div className="flex items-center gap-3 text-[9px] text-white/70 font-Montserrat">
                                                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-white"/>Self</span>
                                                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-terracotta"/>Others</span>
                                            </div>
                                        </div>
                                        <PerceptionBar label="Communication" self={88} others={71} status="Blind spot"/>
                                        <PerceptionBar label="Listening" self={79} others={77} status="Aligned"/>
                                        <PerceptionBar label="Empowering Others" self={62} others={81} status="Hidden strength"/>
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
                                            <p className="text-white text-sm font-semibold font-Montserrat">Development
                                                Plans</p>
                                            <p className="text-white/70 text-[12px] font-Montserrat">Matched to
                                                assessment insight</p>
                                        </div>
                                        <div className="rounded-full bg-white/15 px-3 py-1 shrink-0">
                                            <p className="text-white text-[11px] font-Montserrat font-semibold">Personalised</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl border border-white/20 relative overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"/>
                                    <div className="relative space-y-3">
                                        {[
                                            {src: '/images/headshot/2.jpg', name: 'Ademola B.', focus: 'Strategic Thinking', activity: 'Executive coaching'},
                                            {src: '/images/headshot/8.jpg', name: 'Chidinma O.', focus: 'Coaching Others', activity: 'Manager workshop'},
                                            {src: '/images/headshot/7.jpg', name: 'Kofi A.', focus: 'Stakeholder Influence', activity: 'Mentoring programme'},
                                        ].map((plan) => (
                                            <div key={plan.name}
                                                 className="flex items-center gap-3 pb-3 border-b border-white/15 last:border-0 last:pb-0">
                                                <img className="w-9 h-9 rounded-full object-cover object-top shrink-0"
                                                     src={plan.src} alt=""/>
                                                <div className="min-w-0 flex-1">
                                                    <p className="text-white text-[12px] font-semibold font-Montserrat">{plan.name}</p>
                                                    <p className="text-white/70 text-[10px] font-Montserrat">{plan.focus}</p>
                                                </div>
                                                <span
                                                    className="rounded-full bg-terracotta px-2.5 py-1 text-white text-[9px] font-semibold font-Montserrat shrink-0">
                                                    {plan.activity}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 col-span-3">
                                <span
                                    className="inline-block bg-highlight/10 text-highlight text-xs font-semibold font-Montserrat px-3 py-1 rounded-full mb-2">
                                Development
                            </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-MonaSans">
                                    Develop the right capabilities
                                </h3>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    Generic leadership programmes can be broad but unfocused.
                                </p>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    Assessment insight helps organisations identify the capabilities that matter most
                                    for each leader, making it easier to connect development activity to specific needs
                                    rather than offering the same programme to everyone.
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

                    <div className="bg-gray-50 rounded-3xl border border-gray-200 p-1 shadow-sm w-full xl:w-[80%] mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-5 md:gap-8">
                            <div className="p-4 col-span-3">
                                <span
                                    className="inline-block bg-highlight/10 text-highlight text-xs font-semibold font-Montserrat px-3 py-1 rounded-full mb-2">
                                Readiness
                            </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-MonaSans">
                                    Prepare emerging leaders for greater responsibility
                                </h3>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    High performance in a current role does not automatically mean someone is ready to
                                    lead.
                                </p>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    <strong>Zanga</strong> helps organisations identify potential, readiness and
                                    development needs so emerging leaders can be prepared before they step into more
                                    complex roles.
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
                            <div
                                className="md:p-6 p-2 col-span-2 min-h-[280px] md:min-h-[420px] bg-[url('/images/13.jpg')] bg-cover bg-center rounded-b-3xl md:rounded-r-3xl md:rounded-2xl flex flex-col justify-between gap-4 relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-olive/80 to-[#6b7027]/85 rounded-b-3xl md:rounded-r-3xl md:rounded-2xl"/>
                                <div className="p-4 rounded-xl border border-white/20 relative overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"/>
                                    <div className="relative flex items-center gap-2">
                                        <div className="flex -space-x-3">
                                            <img className="w-9 h-9 rounded-full ring-2 ring-white/40 object-cover object-top"
                                                 src="/images/headshot/1.jpg" alt=""/>
                                            <img className="w-9 h-9 rounded-full ring-2 ring-white/40 object-cover object-top"
                                                 src="/images/headshot/5.jpg" alt=""/>
                                            <img className="w-9 h-9 rounded-full ring-2 ring-white/40 object-cover object-top"
                                                 src="/images/headshot/8.jpg" alt=""/>
                                        </div>
                                        <div
                                            className="w-9 h-9 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white text-[10px] font-semibold font-Montserrat shrink-0">
                                            +8
                                        </div>
                                        <p className="text-white/80 text-[11px] font-Montserrat ml-1">Emerging Leaders</p>
                                    </div>
                                </div>
                                <div className="flex-1 p-4 rounded-xl border border-white/20 relative overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"/>
                                    <div className="relative">
                                        <div className="flex items-center gap-4">
                                            <img
                                                className="w-16 h-20 rounded-lg object-cover object-top shrink-0"
                                                src="/images/headshot/3.jpg" alt="Zainab Musa"/>
                                            <div className="min-w-0">
                                                <span
                                                    className="inline-block bg-white/15 text-white text-[9px] font-semibold font-Montserrat px-2 py-0.5 rounded-full mb-1 uppercase tracking-wide">
                                                    High Performer
                                                </span>
                                                <p className="text-white text-sm font-semibold font-Montserrat">Zainab
                                                    Musa</p>
                                                <p className="text-white/70 text-[11px] font-Montserrat">Senior Analyst
                                                    &rarr; Team Lead</p>
                                            </div>
                                        </div>
                                        <div className="mt-4 pt-3 border-t border-white/15">
                                            <div className="flex items-center justify-between mb-2">
                                                <p className="text-white/50 text-[9px] font-Montserrat uppercase tracking-wide">
                                                    Leadership Readiness
                                                </p>
                                                <span
                                                    className="rounded-full bg-white/20 px-2 py-0.5 text-white text-[9px] font-semibold font-Montserrat">
                                                    Ready in 6&ndash;12 months
                                                </span>
                                            </div>
                                            <CapabilityBar label="Potential" value={89}/>
                                            <CapabilityBar label="People Leadership" value={57} gap/>
                                            <div className="flex flex-wrap gap-1.5 mt-3">
                                                {['Delegation', 'Leading peers', 'Difficult conversations'].map((need) => (
                                                    <span key={need}
                                                          className="rounded-full border border-white/25 px-2.5 py-0.5 text-white text-[9px] font-Montserrat">
                                                        {need}
                                                    </span>
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
                                        <img className="w-7 h-7 rounded-full object-cover object-top"
                                             src="/images/headshot/2.jpg" alt="Ademola Bamidele"/>
                                        <p className="text-white text-[11px] font-Montserrat font-semibold">Chief Operating Officer</p>
                                    </div>
                                    <p className="flex items-center gap-1 text-white/70 text-[10px] font-Montserrat uppercase tracking-wide">
                                        <FiLock className="w-3 h-3"/> Anonymous
                                    </p>
                                </div>

                                <div className="relative space-y-2">
                                    {[
                                        {quote: 'Brilliant strategist, but decisions rarely leave the top table.', from: 'Direct report', align: 'mr-8'},
                                        {quote: 'I wish we debated ideas more openly in exec meetings.', from: 'Peer', align: 'ml-8'},
                                        {quote: 'Delegating more would free them to lead the bigger picture.', from: 'Board member', align: 'mr-4'},
                                    ].map((item) => (
                                        <div key={item.from}
                                             className={`${item.align} rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md px-4 py-2.5`}>
                                            <p className="text-white text-[12px] font-Montserrat leading-snug">
                                                &ldquo;{item.quote}&rdquo;
                                            </p>
                                            <p className="text-white/50 text-[10px] font-Montserrat mt-1">&mdash; {item.from}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="relative rounded-2xl bg-white px-4 py-3 shadow-lg">
                                    <p className="text-gray-400 text-[9px] font-Montserrat uppercase tracking-wide">
                                        Greatest development opportunity
                                    </p>
                                    <div className="flex items-center justify-between gap-3 mt-1">
                                        <p className="text-gray-900 text-base font-bold font-MonaSans">Empowering the team to decide</p>
                                        <span className="w-8 h-8 rounded-full bg-terracotta text-white flex items-center justify-center shrink-0">
                                            <FiArrowUpRight className="w-4 h-4"/>
                                        </span>
                                    </div>
                                    <div className="mt-2 flex items-center gap-3">
                                        <div className="flex-1 h-1.5 rounded-full bg-gray-100">
                                            <div className="h-full w-1/4 rounded-full bg-olive"/>
                                        </div>
                                        <p className="text-gray-500 text-[10px] font-Montserrat whitespace-nowrap">Coaching &middot; week 3 of 12</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 col-span-3">
                                <span
                                    className="inline-block bg-highlight/10 text-highlight text-xs font-semibold font-Montserrat px-3 py-1 rounded-full mb-2">
                                Executive
                            </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-MonaSans">
                                    Strengthen senior and executive leadership
                                </h3>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    Senior leaders often operate with fewer opportunities for candid feedback.
                                </p>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    <strong>Zanga</strong> provides structured leadership insight that can support
                                    executive development, coaching and behaviour change, helping experienced leaders
                                    understand where their greatest development opportunities lie.
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
                                            <FiBriefcase/>
                                            <p className="text-[13px]">Executive Leadership Assessment</p>
                                        </Link>
                                        <Link
                                            href="#"
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2 hover:bg-terracotta hover:text-white transition-colors">
                                            <FiRefreshCw/>
                                            <p className="text-[13px]">360 Feedback Leadership Assessment</p>
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
