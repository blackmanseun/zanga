import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import {FiActivity, FiMessageSquare, FiShield, FiCompass, FiBarChart2, FiRefreshCw, FiTrendingUp} from "react-icons/fi";
import {FaArrowTrendDown} from "react-icons/fa6";

function DriverBar({label, value, risk}: { label: string; value: number; risk?: boolean }) {
    return (
        <div className="mb-2.5 last:mb-0">
            <div className="flex justify-between items-center text-[10px] text-white/70 font-Montserrat mb-1">
                <span className="flex items-center gap-1.5">
                    {label}
                    <span
                        className={`rounded-full px-1.5 py-px text-[8px] font-semibold uppercase tracking-wide ${risk ? 'bg-terracotta text-white' : 'bg-white/20 text-white'}`}>
                        {risk ? 'At risk' : 'Strength'}
                    </span>
                </span>
                <span className="font-semibold text-white">{value}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/15">
                <div className={`h-full rounded-full ${risk ? 'bg-terracotta' : 'bg-white'}`} style={{width: `${value}%`}}/>
            </div>
        </div>
    )
}

export default function ImproveEngagementRetentionFeaturesBenefits() {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <Reveal className="text-center mb-14">
          <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
            Features &amp; Benefits
          </span>
                    <h2 className="text-3xl md:text-[2.8rem] leading-[1.1] font-bold text-gray-700 mt-3 font-MonaSans max-w-3xl mx-auto">
                        See What Is Driving Engagement, Before Problems Escalate
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
                                            <p className="text-white text-sm font-semibold font-Montserrat">Employee
                                                Experience Pulse</p>
                                            <p className="text-white/70 text-[12px] font-Montserrat">412 responses &middot;
                                                78% participation</p>
                                        </div>
                                        <div className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 shrink-0">
                                            <span className="w-1.5 h-1.5 rounded-full bg-terracotta"/>
                                            <p className="text-white text-[11px] font-Montserrat font-semibold">Live</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl border border-white/20 relative overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"/>
                                    <div className="relative">
                                        <p className="text-white/60 text-[10px] font-Montserrat uppercase tracking-wide mb-2">
                                            What is shaping experience
                                        </p>
                                        <DriverBar label="Leadership" value={74}/>
                                        <DriverBar label="Growth" value={68}/>
                                        <DriverBar label="Communication" value={56} risk/>
                                        <DriverBar label="Recognition" value={49} risk/>
                                        <div className="mt-4 pt-3 border-t border-white/15">
                                            <p className="text-white/60 text-[10px] font-Montserrat uppercase tracking-wide mb-1.5">
                                                Employee voice
                                            </p>
                                            <p className="text-white text-[11px] font-Montserrat leading-snug">
                                                &ldquo;Good work often goes unnoticed, and we hear about changes
                                                too late.&rdquo;
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 col-span-3">
                                <span
                                    className="inline-block bg-highlight/10 text-highlight text-xs font-semibold font-Montserrat px-3 py-1 rounded-full mb-2">
                                Experience
                            </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-MonaSans">
                                    Understand what employees are really experiencing
                                </h3>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    Annual surveys can tell you how people feel at a point in time. <strong>Zanga</strong> helps
                                    organisations go further by identifying the factors shaping that experience.
                                </p>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    Understand what employees are saying about leadership, communication, culture,
                                    trust, recognition, growth and the wider workplace environment.
                                </p>
                                <div className="pt-10">
                                    <p className="flex items-center gap-1 text-sm text-gray-600 font-Montserrat mb-2">
                                        <strong>Zanga</strong> solution
                                        <span><FaArrowTrendDown className="text-terracotta" size={18}/></span>
                                    </p>
                                    <div className="flex md:flex-row flex-col items-center gap-2">
                                        <Link
                                            href="/products/pulse-by-zanga"
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2 hover:bg-terracotta hover:text-white transition-colors">
                                            <FiActivity/>
                                            <p className="text-[13px]">Pulse by Zanga</p>
                                        </Link>
                                        <Link
                                            href="#"
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2 hover:bg-terracotta hover:text-white transition-colors">
                                            <FiMessageSquare/>
                                            <p className="text-[13px]">Employee Engagement Surveys</p>
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
                                Retention
                            </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-MonaSans">
                                    Identify retention risk earlier
                                </h3>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    People rarely disengage all at once.
                                </p>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    Changes in motivation, trust, intent to stay, manager relationships or perceived
                                    opportunity can provide useful warning signals before resignation becomes the
                                    outcome.
                                </p>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    <strong>Zanga</strong> helps organisations identify where those signals may be
                                    emerging so leaders can investigate and act earlier.
                                </p>
                                <div className="pt-10">
                                    <p className="flex items-center gap-1 text-sm text-gray-600 font-Montserrat mb-2">
                                        <strong>Zanga</strong> solution
                                        <span><FaArrowTrendDown className="text-terracotta" size={18}/></span>
                                    </p>
                                    <div className="flex md:flex-row flex-col items-center gap-2">
                                        <Link
                                            href="/products/pulse-by-zanga"
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2 hover:bg-terracotta hover:text-white transition-colors">
                                            <FiActivity/>
                                            <p className="text-[13px]">Pulse by Zanga</p>
                                        </Link>
                                        <Link
                                            href="#"
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2 hover:bg-terracotta hover:text-white transition-colors">
                                            <FiShield/>
                                            <p className="text-[13px]">Retention Intelligence</p>
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
                                            <p className="text-white text-sm font-semibold font-Montserrat">Retention
                                                Risk Monitor</p>
                                            <p className="text-white/70 text-[12px] font-Montserrat">3 teams showing
                                                early signals</p>
                                        </div>
                                        <div className="rounded-full bg-terracotta px-3 py-1 shrink-0">
                                            <p className="text-white text-[11px] font-Montserrat font-semibold">Act
                                                early</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl border border-white/20 relative overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"/>
                                    <div className="relative">
                                        <div className="flex items-center justify-between mb-2">
                                            <p className="text-white/60 text-[10px] font-Montserrat uppercase tracking-wide">
                                                Intent to stay
                                            </p>
                                            <p className="text-terracotta text-[10px] font-semibold font-Montserrat">
                                                &minus;16 pts in 6 months
                                            </p>
                                        </div>
                                        <div className="flex items-end gap-1.5 h-12">
                                            {[82, 80, 77, 74, 70, 66].map((value, i) => (
                                                <div key={i}
                                                     className={`flex-1 rounded-t ${i >= 4 ? 'bg-terracotta' : 'bg-white/70'}`}
                                                     style={{height: `${value}%`}}/>
                                            ))}
                                        </div>
                                        <div className="flex gap-1.5 mt-1">
                                            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month) => (
                                                <span key={month}
                                                      className="flex-1 text-center text-white/50 text-[9px] font-Montserrat">
                                                    {month}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="mt-4 pt-3 border-t border-white/15 space-y-2.5">
                                            {[
                                                {team: 'Sales', signal: 'Manager relationship', level: 'High'},
                                                {team: 'Operations', signal: 'Perceived opportunity', level: 'Medium'},
                                                {team: 'Finance', signal: 'Trust in leadership', level: 'Low'},
                                            ].map((row) => (
                                                <div key={row.team} className="flex items-center justify-between gap-3">
                                                    <div className="min-w-0">
                                                        <p className="text-white text-[12px] font-semibold font-Montserrat">{row.team}</p>
                                                        <p className="text-white/70 text-[10px] font-Montserrat">{row.signal}</p>
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
                                            <p className="text-white text-sm font-semibold font-Montserrat">Culture
                                                Snapshot</p>
                                            <p className="text-white/70 text-[12px] font-Montserrat">Stated values vs.
                                                everyday experience</p>
                                        </div>
                                        <div className="rounded-full bg-white/15 px-3 py-1 shrink-0">
                                            <p className="text-white text-[11px] font-Montserrat font-semibold">Q3
                                                view</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl border border-white/20 relative overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"/>
                                    <div className="relative">
                                        <div className="flex items-center justify-between mb-3">
                                            <p className="text-white/60 text-[10px] font-Montserrat uppercase tracking-wide">
                                                Where culture stands
                                            </p>
                                            <div className="flex items-center gap-3 text-[9px] text-white/70 font-Montserrat">
                                                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-white"/>Stated</span>
                                                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-terracotta"/>Experienced</span>
                                            </div>
                                        </div>
                                        {[
                                            {label: 'Leadership', stated: 86, experienced: 81, status: 'Aligned'},
                                            {label: 'Collaboration', stated: 80, experienced: 76, status: 'Aligned'},
                                            {label: 'Communication', stated: 84, experienced: 61, status: 'Gap'},
                                            {label: 'Fairness', stated: 88, experienced: 52, status: 'Breaking down'},
                                        ].map((row) => (
                                            <div key={row.label} className="mb-3 last:mb-0">
                                                <div className="flex justify-between items-center text-[10px] text-white/70 font-Montserrat mb-1">
                                                    <span>{row.label}</span>
                                                    <span
                                                        className={`rounded-full px-1.5 py-px text-[8px] font-semibold uppercase tracking-wide text-white ${row.status === 'Aligned' ? 'bg-white/20' : 'bg-terracotta'}`}>
                                                        {row.status}
                                                    </span>
                                                </div>
                                                <div className="space-y-1">
                                                    <div className="h-1.5 rounded-full bg-white/15">
                                                        <div className="h-full rounded-full bg-white" style={{width: `${row.stated}%`}}/>
                                                    </div>
                                                    <div className="h-1.5 rounded-full bg-white/15">
                                                        <div className="h-full rounded-full bg-terracotta" style={{width: `${row.experienced}%`}}/>
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
                                Culture
                            </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-MonaSans">
                                    Make culture more visible
                                </h3>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    Culture is experienced through everyday behaviour, not just values statements.
                                </p>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    <strong>Zanga</strong> helps organisations understand how employees experience
                                    leadership, communication, fairness, collaboration and organisational norms,
                                    giving leadership teams a clearer picture of where culture is aligned and where it
                                    may be breaking down.
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
                                            <FiCompass/>
                                            <p className="text-[13px]">Culture Assessments</p>
                                        </Link>
                                        <Link
                                            href="/products/pulse-by-zanga"
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2 hover:bg-terracotta hover:text-white transition-colors">
                                            <FiActivity/>
                                            <p className="text-[13px]">Pulse by Zanga</p>
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
                                Managers
                            </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-MonaSans">
                                    Give managers better insight
                                </h3>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    Engagement data is most useful when managers can understand what it means for their
                                    teams.
                                </p>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    <strong>Zanga</strong> helps translate workforce feedback into practical insight so
                                    managers can see where attention is needed and have better-informed conversations
                                    with employees.
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
                                            <FiBarChart2/>
                                            <p className="text-[13px]">Workforce Analytics</p>
                                        </Link>
                                        <Link
                                            href="/products/pulse-by-zanga"
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2 hover:bg-terracotta hover:text-white transition-colors">
                                            <FiActivity/>
                                            <p className="text-[13px]">Pulse by Zanga</p>
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
                                                 src="/images/headshot/2.jpg" alt="Chidi Okeke"/>
                                            <div>
                                                <p className="text-white text-sm font-semibold font-Montserrat">Chidi
                                                    Okeke</p>
                                                <p className="text-white/70 text-[12px] font-Montserrat">Operations
                                                    Manager &middot; 14 reports</p>
                                            </div>
                                        </div>
                                        <div className="rounded-full bg-white/15 px-3 py-1 shrink-0">
                                            <p className="text-white text-[11px] font-Montserrat font-semibold">Team
                                                view</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 p-4 rounded-xl border border-white/20 relative overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"/>
                                    <div className="relative">
                                        <p className="text-white/60 text-[10px] font-Montserrat uppercase tracking-wide mb-2">
                                            Your team this month
                                        </p>
                                        <div className="grid grid-cols-3 gap-2">
                                            {[
                                                {label: 'Engagement', value: 71, change: '+4', down: false},
                                                {label: 'Workload', value: 58, change: '−9', down: true},
                                                {label: 'Intent to stay', value: 66, change: '−3', down: true},
                                            ].map((stat) => (
                                                <div key={stat.label} className="rounded-lg bg-white/10 border border-white/15 px-2 py-2">
                                                    <p className="text-white/60 text-[9px] font-Montserrat leading-tight">{stat.label}</p>
                                                    <p className="text-white text-lg font-bold font-MonaSans leading-tight mt-1">{stat.value}</p>
                                                    <p className={`text-[10px] font-semibold font-Montserrat ${stat.down ? 'text-terracotta' : 'text-white'}`}>
                                                        {stat.change} pts
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-4 pt-3 border-t border-white/15">
                                            <p className="text-white/60 text-[10px] font-Montserrat uppercase tracking-wide mb-2">
                                                Conversation prompts
                                            </p>
                                            <div className="space-y-1.5">
                                                {[
                                                    'Ask how workload has felt since the new rota',
                                                    'Talk through growth plans with newer joiners',
                                                ].map((prompt, i) => (
                                                    <div key={prompt} className="flex items-start gap-2">
                                                        <span
                                                            className={`w-4 h-4 rounded-full text-white text-[9px] font-semibold flex items-center justify-center shrink-0 ${i === 0 ? 'bg-terracotta' : 'bg-white/20'}`}>
                                                            {i + 1}
                                                        </span>
                                                        <p className="text-white text-[11px] font-Montserrat leading-snug">{prompt}</p>
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
                                            <FiRefreshCw className="w-3.5 h-3.5 text-white"/>
                                        </span>
                                        <p className="text-white text-[11px] font-Montserrat font-semibold">Quarterly pulse</p>
                                    </div>
                                    <p className="text-white/70 text-[10px] font-Montserrat uppercase tracking-wide">
                                        4 checks
                                    </p>
                                </div>

                                <div className="relative space-y-2">
                                    {[
                                        {quarter: 'Q1', action: 'Baseline survey', score: 62, change: null},
                                        {quarter: 'Q2', action: 'Manager check-ins launched', score: 66, change: '+4'},
                                        {quarter: 'Q3', action: 'Recognition programme', score: 71, change: '+5'},
                                    ].map((step) => (
                                        <div key={step.quarter}
                                             className="flex items-center gap-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md px-4 py-2.5">
                                            <span className="text-white/60 text-[10px] font-semibold font-Montserrat shrink-0">
                                                {step.quarter}
                                            </span>
                                            <p className="flex-1 min-w-0 text-white text-[12px] font-Montserrat leading-snug">
                                                {step.action}
                                            </p>
                                            <p className="text-white text-[12px] font-bold font-MonaSans shrink-0">
                                                {step.score}
                                                {step.change && (
                                                    <span className="ml-1 text-[10px] font-semibold font-Montserrat text-white/70">{step.change}</span>
                                                )}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="relative rounded-2xl bg-white px-4 py-3 shadow-lg">
                                    <p className="text-gray-400 text-[9px] font-Montserrat uppercase tracking-wide">
                                        Overall sentiment &middot; Q4
                                    </p>
                                    <div className="flex items-end justify-between gap-4 mt-1">
                                        <div>
                                            <p className="text-gray-900 text-2xl font-bold font-MonaSans leading-none">74</p>
                                            <p className="flex items-center gap-1 text-olive text-[10px] font-semibold font-Montserrat mt-1">
                                                <FiTrendingUp className="w-3 h-3"/> +12 pts since baseline
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
                                Tracking
                            </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-MonaSans">
                                    Track change over time
                                </h3>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    A single survey provides a snapshot. Repeated listening helps organisations
                                    understand whether the employee experience is improving.
                                </p>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    Use pulse checks and follow-up measurement to monitor changes in sentiment and
                                    assess whether actions taken are having the intended effect.
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
                                            <FiRefreshCw/>
                                            <p className="text-[13px]">Pulse Surveys</p>
                                        </Link>
                                        <Link
                                            href="#"
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2 hover:bg-terracotta hover:text-white transition-colors">
                                            <FiBarChart2/>
                                            <p className="text-[13px]">Workforce Analytics</p>
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
