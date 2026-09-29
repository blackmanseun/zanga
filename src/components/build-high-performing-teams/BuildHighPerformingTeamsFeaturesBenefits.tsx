import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import {FiUsers, FiActivity, FiCheck, FiAlertTriangle, FiMessageCircle, FiArrowUpRight, FiTrendingUp, FiAward} from "react-icons/fi";
import {FaArrowTrendDown} from "react-icons/fa6";

const workingStyles = [
    {label: 'Driver', count: 2, color: 'bg-terracotta'},
    {label: 'Analytical', count: 2, color: 'bg-white'},
    {label: 'Supportive', count: 1, color: 'bg-olive'},
    {label: 'Expressive', count: 1, color: 'bg-white/40'},
]

export default function BuildHighPerformingTeamsFeaturesBenefits() {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <Reveal className="text-center mb-14">
          <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
            Features &amp; Benefits
          </span>
                    <h2 className="text-3xl md:text-[2.8rem] leading-[1.1] font-bold text-gray-700 mt-3 font-MonaSans max-w-3xl mx-auto">
                        Understand What Is Really Shaping Team Performance
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
                                            <p className="text-white text-sm font-semibold font-Montserrat">Product
                                                Delivery Team</p>
                                            <p className="text-white/70 text-[12px] font-Montserrat">6 members &middot; 4
                                                working styles</p>
                                        </div>
                                        <div className="flex -space-x-3">
                                            <img className="w-8 h-8 rounded-full ring-2 ring-white/40 object-cover object-top"
                                                 src="/images/headshot/5.jpg" alt=""/>
                                            <img className="w-8 h-8 rounded-full ring-2 ring-white/40 object-cover object-top"
                                                 src="/images/headshot/2.jpg" alt=""/>
                                            <img className="w-8 h-8 rounded-full ring-2 ring-white/40 object-cover object-top"
                                                 src="/images/headshot/8.jpg" alt=""/>
                                            <div
                                                className="w-8 h-8 rounded-full ring-2 ring-white/40 bg-white/20 flex items-center justify-center text-white text-[10px] font-semibold font-Montserrat">
                                                +3
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl border border-white/20 relative overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"/>
                                    <div className="relative">
                                        <p className="text-white/60 text-[10px] font-Montserrat uppercase tracking-wide mb-2">
                                            Working Styles
                                        </p>
                                        <div className="flex h-2 rounded-full overflow-hidden gap-0.5">
                                            {workingStyles.map((style) => (
                                                <div key={style.label} className={style.color}
                                                     style={{flex: style.count}}/>
                                            ))}
                                        </div>
                                        <div className="grid grid-cols-2 gap-x-3 gap-y-1 mt-2">
                                            {workingStyles.map((style) => (
                                                <span key={style.label}
                                                      className="flex items-center gap-1.5 text-[10px] text-white/70 font-Montserrat">
                                                    <span className={`w-2 h-2 rounded-full ${style.color}`}/>
                                                    {style.label}
                                                    <span className="text-white font-semibold ml-auto">{style.count}</span>
                                                </span>
                                            ))}
                                        </div>
                                        <div className="mt-4 pt-3 border-t border-white/15 grid grid-cols-2 gap-3">
                                            <div>
                                                <p className="text-white/60 text-[9px] font-Montserrat uppercase tracking-wide mb-1.5">
                                                    Helping performance
                                                </p>
                                                <div className="space-y-1.5">
                                                    {['Clear goal-setting', 'Detail and rigour'].map((item) => (
                                                        <p key={item}
                                                           className="flex items-start gap-1.5 text-white text-[11px] font-Montserrat leading-snug">
                                                            <FiCheck className="w-3 h-3 mt-0.5 shrink-0"/>
                                                            {item}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-white/60 text-[9px] font-Montserrat uppercase tracking-wide mb-1.5">
                                                    Getting in the way
                                                </p>
                                                <div className="space-y-1.5">
                                                    {['Direct vs. indirect feedback', 'Pace of decisions'].map((item) => (
                                                        <p key={item}
                                                           className="flex items-start gap-1.5 text-white text-[11px] font-Montserrat leading-snug">
                                                            <FiAlertTriangle className="w-3 h-3 mt-0.5 shrink-0 text-terracotta"/>
                                                            {item}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 col-span-3">
                                <span
                                    className="inline-block bg-highlight/10 text-highlight text-xs font-semibold font-Montserrat px-3 py-1 rounded-full mb-2">
                                Dynamics
                            </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-MonaSans">
                                    See the dynamics behind the team
                                </h3>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    Performance problems are not always about capability. Sometimes the issue is how
                                    people work together.
                                </p>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    <strong>Zanga</strong> helps teams understand behavioural differences, communication
                                    preferences, and working styles so they can see what helps performance and what may
                                    be getting in the way.
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
                                            <FiUsers/>
                                            <p className="text-[13px]">Team Assessments</p>
                                        </Link>
                                        <Link
                                            href="#"
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2 hover:bg-terracotta hover:text-white transition-colors">
                                            <FiActivity/>
                                            <p className="text-[13px]">Psychometric Assessments</p>
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
                                Collaboration
                            </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-MonaSans">
                                    Improve communication and collaboration
                                </h3>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    Teams work better when people understand how others prefer to communicate, make
                                    decisions and respond under pressure.
                                </p>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    <strong>Zanga</strong> gives teams a shared language for understanding those
                                    differences, making collaboration more deliberate and reducing avoidable
                                    misunderstandings.
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
                                            <FiUsers/>
                                            <p className="text-[13px]">Team Assessments</p>
                                        </Link>
                                        <Link
                                            href="#"
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2 hover:bg-terracotta hover:text-white transition-colors">
                                            <FiActivity/>
                                            <p className="text-[13px]">Psychometric Assessments</p>
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
                                            <p className="text-white text-sm font-semibold font-Montserrat">Team
                                                Communication Guide</p>
                                            <p className="text-white/70 text-[12px] font-Montserrat">6 profiles &middot;
                                                one shared language</p>
                                        </div>
                                        <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                                            <FiMessageCircle className="w-4 h-4 text-white"/>
                                        </div>
                                    </div>
                                    <div className="relative flex items-center gap-2 mt-3">
                                        {['/images/headshot/1.jpg', '/images/headshot/3.jpg', '/images/headshot/7.jpg', '/images/headshot/5.jpg', '/images/headshot/8.jpg'].map((src) => (
                                            <img key={src}
                                                 className={`w-8 h-8 rounded-full object-cover object-top ${src.endsWith('/7.jpg') ? 'ring-2 ring-terracotta' : 'ring-2 ring-white/30 opacity-70'}`}
                                                 src={src} alt=""/>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl border border-white/20 relative overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"/>
                                    <div className="relative">
                                        <div className="flex items-center justify-between gap-3 mb-3">
                                            <div className="flex items-center gap-3">
                                                <img className="w-10 h-10 rounded-full object-cover object-top shrink-0"
                                                     src="/images/headshot/7.jpg" alt="Kofi Asante"/>
                                                <div>
                                                    <p className="text-white text-sm font-semibold font-Montserrat">Kofi
                                                        Asante</p>
                                                    <p className="text-white/70 text-[11px] font-Montserrat">Data
                                                        Analyst</p>
                                                </div>
                                            </div>
                                            <span
                                                className="rounded-full bg-white/20 px-2 py-0.5 text-white text-[9px] font-semibold font-Montserrat uppercase tracking-wide shrink-0">
                                                Analytical
                                            </span>
                                        </div>
                                        {[
                                            {label: 'Communicates', value: 'Detailed and precise'},
                                            {label: 'Decides', value: 'Data first'},
                                            {label: 'Under pressure', value: 'Goes quiet'},
                                        ].map((trait) => (
                                            <div key={trait.label}
                                                 className="flex items-center justify-between gap-3 py-2 border-t border-white/15">
                                                <p className="text-white/60 text-[10px] font-Montserrat uppercase tracking-wide">
                                                    {trait.label}
                                                </p>
                                                <p className="text-white text-[12px] font-semibold font-Montserrat">
                                                    {trait.value}
                                                </p>
                                            </div>
                                        ))}
                                        <div className="mt-2 rounded-lg bg-white px-3 py-2 shadow">
                                            <p className="text-gray-400 text-[9px] font-Montserrat uppercase tracking-wide">
                                                Working with Kofi
                                            </p>
                                            <p className="text-gray-900 text-[11px] font-semibold font-Montserrat leading-snug mt-0.5">
                                                Share data ahead of time and give room to reflect before deciding.
                                            </p>
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
                                            <p className="text-white text-sm font-semibold font-Montserrat">Team
                                                Friction Signals</p>
                                            <p className="text-white/70 text-[12px] font-Montserrat">3 patterns surfaced
                                                early</p>
                                        </div>
                                        <div className="rounded-full bg-white/15 px-3 py-1 shrink-0">
                                            <p className="text-white text-[11px] font-Montserrat font-semibold">Early
                                                warning</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl border border-white/20 relative overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"/>
                                    <div className="relative">
                                        <div className="space-y-3">
                                            {[
                                                {pair: ['/images/headshot/1.jpg', '/images/headshot/7.jpg'], area: 'Pace', detail: 'Fast movers vs. deliberate planners', level: 'Rising'},
                                                {pair: ['/images/headshot/3.jpg', '/images/headshot/2.jpg'], area: 'Communication', detail: 'Direct feedback vs. diplomatic tone', level: 'Watch'},
                                                {pair: ['/images/headshot/5.jpg', '/images/headshot/8.jpg'], area: 'Expectations', detail: 'Unclear ownership of handovers', level: 'Low'},
                                            ].map((signal) => (
                                                <div key={signal.area}
                                                     className="flex items-center gap-3 pb-3 border-b border-white/15 last:border-0 last:pb-0">
                                                    <div className="flex -space-x-2 shrink-0">
                                                        {signal.pair.map((src) => (
                                                            <img key={src}
                                                                 className="w-7 h-7 rounded-full ring-2 ring-white/40 object-cover object-top"
                                                                 src={src} alt=""/>
                                                        ))}
                                                    </div>
                                                    <div className="min-w-0 flex-1">
                                                        <p className="text-white text-[12px] font-semibold font-Montserrat">{signal.area}</p>
                                                        <p className="text-white/70 text-[10px] font-Montserrat leading-snug">{signal.detail}</p>
                                                    </div>
                                                    <span
                                                        className={`rounded-full px-2.5 py-0.5 text-white text-[9px] font-semibold font-Montserrat uppercase tracking-wide shrink-0 ${signal.level === 'Rising' ? 'bg-terracotta' : signal.level === 'Watch' ? 'bg-white/20' : 'border border-white/25'}`}>
                                                        {signal.level}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-4 rounded-lg bg-white px-3 py-2 shadow flex items-center justify-between gap-3">
                                            <div>
                                                <p className="text-gray-400 text-[9px] font-Montserrat uppercase tracking-wide">
                                                    Suggested team conversation
                                                </p>
                                                <p className="text-gray-900 text-[11px] font-semibold font-Montserrat leading-snug mt-0.5">
                                                    Agree decision timelines before work starts.
                                                </p>
                                            </div>
                                            <span className="w-7 h-7 rounded-full bg-terracotta text-white flex items-center justify-center shrink-0">
                                                <FiArrowUpRight className="w-4 h-4"/>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 col-span-3">
                                <span
                                    className="inline-block bg-highlight/10 text-highlight text-xs font-semibold font-Montserrat px-3 py-1 rounded-full mb-2">
                                Friction
                            </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-MonaSans">
                                    Reduce friction before it becomes dysfunction
                                </h3>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    Differences in pace, style, communication or expectations can create tension long
                                    before a team openly acknowledges it.
                                </p>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    Structured team insight helps make those patterns visible so managers and team
                                    members can address them earlier and more constructively.
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
                                            <FiUsers/>
                                            <p className="text-[13px]">Team Assessments</p>
                                        </Link>
                                        <Link
                                            href="#"
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2 hover:bg-terracotta hover:text-white transition-colors">
                                            <FiTrendingUp/>
                                            <p className="text-[13px]">Team Development</p>
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
                                Leadership
                            </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-MonaSans">
                                    Strengthen team leadership
                                </h3>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    A manager cannot lead every team in the same way.
                                </p>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    <strong>Zanga</strong> helps team leaders understand the mix of personalities,
                                    behaviours and working preferences within the group so they can adapt how they
                                    communicate, delegate and manage performance.
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
                                            <p className="text-[13px]">Team Assessments</p>
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
                                        <div className="flex items-center gap-3">
                                            <img className="w-11 h-11 object-cover object-top rounded-full shrink-0"
                                                 src="/images/headshot/6.jpg" alt="Funmi Adeyemi"/>
                                            <div>
                                                <p className="text-white text-sm font-semibold font-Montserrat">Funmi
                                                    Adeyemi</p>
                                                <p className="text-white/70 text-[12px] font-Montserrat">Team Lead &middot;
                                                    leads 6</p>
                                            </div>
                                        </div>
                                        <div className="rounded-full bg-white/15 px-3 py-1 shrink-0">
                                            <p className="text-white text-[11px] font-Montserrat font-semibold">Manager
                                                view</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl border border-white/20 relative overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"/>
                                    <div className="relative">
                                        <p className="text-white/60 text-[10px] font-Montserrat uppercase tracking-wide mb-2">
                                            Adapt your approach
                                        </p>
                                        <div className="flex flex-wrap gap-1.5 mb-3">
                                            {['Communicate', 'Delegate', 'Manage performance'].map((tab) => (
                                                <span key={tab}
                                                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-Montserrat ${tab === 'Delegate' ? 'bg-white text-gray-900 font-semibold' : 'border border-white/25 text-white'}`}>
                                                    {tab}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="space-y-3">
                                            {[
                                                {src: '/images/headshot/1.jpg', name: 'Amara', style: 'Driver', approach: 'Give the outcome, not the steps.'},
                                                {src: '/images/headshot/7.jpg', name: 'Kofi', style: 'Analytical', approach: 'Share full context and success criteria.'},
                                                {src: '/images/headshot/3.jpg', name: 'Ngozi', style: 'Supportive', approach: 'Agree early check-ins and offer backing.'},
                                            ].map((member) => (
                                                <div key={member.name}
                                                     className="flex items-center gap-3 pb-3 border-b border-white/15 last:border-0 last:pb-0">
                                                    <img className="w-9 h-9 rounded-full object-cover object-top shrink-0"
                                                         src={member.src} alt=""/>
                                                    <div className="min-w-0 flex-1">
                                                        <div className="flex items-center gap-1.5">
                                                            <p className="text-white text-[12px] font-semibold font-Montserrat">{member.name}</p>
                                                            <span
                                                                className="rounded-full bg-white/20 px-1.5 py-px text-white text-[8px] font-semibold uppercase tracking-wide font-Montserrat">
                                                                {member.style}
                                                            </span>
                                                        </div>
                                                        <p className="text-white/80 text-[11px] font-Montserrat leading-snug">{member.approach}</p>
                                                    </div>
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
                                className="relative col-span-2 min-h-[280px] md:min-h-[420px] p-4 bg-[url('/images/18.jpg')] bg-cover bg-center rounded-t-3xl md:rounded-l-3xl md:rounded-2xl overflow-hidden flex flex-col justify-between gap-2">
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/70 to-primary/30 rounded-t-3xl md:rounded-l-3xl md:rounded-2xl"/>

                                <div className="relative flex items-center justify-between">
                                    <div className="flex items-center gap-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md pl-1 pr-3 py-1">
                                        <div className="flex -space-x-2">
                                            <img className="w-7 h-7 rounded-full ring-2 ring-white/40 object-cover object-top"
                                                 src="/images/headshot/2.jpg" alt=""/>
                                            <img className="w-7 h-7 rounded-full ring-2 ring-white/40 object-cover object-top"
                                                 src="/images/headshot/5.jpg" alt=""/>
                                        </div>
                                        <span className="text-white/70 text-[11px] font-Montserrat">+</span>
                                        <div className="flex -space-x-2">
                                            <img className="w-7 h-7 rounded-full ring-2 ring-terracotta object-cover object-top"
                                                 src="/images/headshot/8.jpg" alt=""/>
                                            <img className="w-7 h-7 rounded-full ring-2 ring-terracotta object-cover object-top"
                                                 src="/images/headshot/1.jpg" alt=""/>
                                        </div>
                                        <p className="text-white text-[11px] font-Montserrat font-semibold ml-1">Merged team</p>
                                    </div>
                                    <p className="text-white/70 text-[10px] font-Montserrat uppercase tracking-wide">
                                        Week 2
                                    </p>
                                </div>

                                <div className="relative space-y-2">
                                    {[
                                        {item: 'How we communicate', status: 'Agreed', done: true},
                                        {item: 'How we make decisions', status: 'Agreed', done: true},
                                        {item: 'Who owns what', status: 'In progress', done: false},
                                    ].map((charter) => (
                                        <div key={charter.item}
                                             className="flex items-center justify-between gap-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md px-4 py-2.5">
                                            <p className="flex items-center gap-2 text-white text-[12px] font-Montserrat">
                                                <span
                                                    className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${charter.done ? 'bg-olive' : 'border border-white/40'}`}>
                                                    {charter.done && <FiCheck className="w-2.5 h-2.5 text-white"/>}
                                                </span>
                                                {charter.item}
                                            </p>
                                            <span
                                                className={`text-[10px] font-Montserrat shrink-0 ${charter.done ? 'text-white/60' : 'text-terracotta font-semibold'}`}>
                                                {charter.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="relative rounded-2xl bg-white px-4 py-3 shadow-lg">
                                    <p className="text-gray-400 text-[9px] font-Montserrat uppercase tracking-wide">
                                        Team foundation
                                    </p>
                                    <div className="grid grid-cols-3 gap-3 mt-2">
                                        {[
                                            {label: 'Trust', value: 72},
                                            {label: 'Accountability', value: 64},
                                            {label: 'Performance', value: 58},
                                        ].map((pillar) => (
                                            <div key={pillar.label}>
                                                <div className="flex items-baseline justify-between gap-1">
                                                    <p className="text-gray-700 text-[10px] font-semibold font-Montserrat truncate">{pillar.label}</p>
                                                    <p className="text-gray-900 text-[11px] font-bold font-MonaSans">{pillar.value}%</p>
                                                </div>
                                                <div className="h-1.5 rounded-full bg-gray-100 mt-1">
                                                    <div className="h-full rounded-full bg-olive" style={{width: `${pillar.value}%`}}/>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 col-span-3">
                                <span
                                    className="inline-block bg-highlight/10 text-highlight text-xs font-semibold font-Montserrat px-3 py-1 rounded-full mb-2">
                                Change
                            </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-MonaSans">
                                    Build more effective new or changing teams
                                </h3>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    New teams, merged teams and teams going through change often need more than a
                                    planning session.
                                </p>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    <strong>Zanga</strong> helps teams establish a clearer understanding of how they work
                                    together from the start, creating a stronger foundation for trust, accountability and
                                    performance.
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
                                            <FiUsers/>
                                            <p className="text-[13px]">Team Assessments</p>
                                        </Link>
                                        <Link
                                            href="#"
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2 hover:bg-terracotta hover:text-white transition-colors">
                                            <FiTrendingUp/>
                                            <p className="text-[13px]">Team Development</p>
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
