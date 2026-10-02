import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import {
    FiMessageSquare,
    FiBarChart2,
    FiClipboard,
    FiAlertTriangle,
    FiFileText,
    FiCheck,
    FiTrendingUp,
} from "react-icons/fi";
import {FaArrowTrendDown} from "react-icons/fa6";

function ChannelBar({label, value, count}: { label: string; value: number; count: number }) {
    return (
        <div className="mb-2.5 last:mb-0">
            <div className="flex justify-between items-center text-[10px] text-white/70 font-Montserrat mb-1">
                <span>{label}</span>
                <span className="font-semibold text-white">{count}</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/15">
                <div className="h-full rounded-full bg-white" style={{width: `${value}%`}}/>
            </div>
        </div>
    )
}

export default function ListenToStakeholdersFeaturesBenefits() {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <Reveal className="text-center mb-14">
          <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
            Features &amp; Benefits
          </span>
                    <h2 className="text-3xl md:text-[2.8rem] leading-[1.1] font-bold text-gray-700 mt-3 font-MonaSans max-w-3xl mx-auto">
                        Turn Stakeholder Feedback Into Actionable Intelligence
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
                                            <p className="text-white text-sm font-semibold font-Montserrat">Voice
                                                Channels</p>
                                            <p className="text-white/70 text-[12px] font-Montserrat">1,284 submissions
                                                &middot; this quarter</p>
                                        </div>
                                        <div className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 shrink-0">
                                            <span className="w-1.5 h-1.5 rounded-full bg-terracotta"/>
                                            <p className="text-white text-[11px] font-Montserrat font-semibold">Open</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl border border-white/20 relative overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"/>
                                    <div className="relative">
                                        <p className="text-white/60 text-[10px] font-Montserrat uppercase tracking-wide mb-2">
                                            How stakeholders reach you
                                        </p>
                                        <ChannelBar label="WhatsApp" value={82} count={512}/>
                                        <ChannelBar label="SMS / USSD" value={54} count={338}/>
                                        <ChannelBar label="Field officers" value={38} count={241}/>
                                        <ChannelBar label="Web form" value={30} count={193}/>
                                        <div className="mt-4 pt-3 border-t border-white/15">
                                            <p className="text-white/60 text-[10px] font-Montserrat uppercase tracking-wide mb-1.5">
                                                Stakeholder groups
                                            </p>
                                            <div className="flex flex-wrap gap-1.5">
                                                {['Employees', 'Customers', 'Suppliers', 'Farmers', 'Communities'].map((group) => (
                                                    <span key={group}
                                                          className="rounded-full bg-white/15 px-2 py-0.5 text-white text-[9px] font-semibold font-Montserrat">
                                                        {group}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 col-span-3">
                                <span
                                    className="inline-block bg-highlight/10 text-highlight text-xs font-semibold font-Montserrat px-3 py-1 rounded-full mb-2">
                                Access
                            </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-MonaSans">
                                    Give stakeholders a clear way to speak
                                </h3>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    Feedback is only useful when people have an accessible and trusted way to share it.
                                </p>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    <strong>Zanga</strong> can support structured channels for feedback, concerns and
                                    grievances across different stakeholder groups, including employees, customers,
                                    suppliers, farmers and communities.
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
                                            <FiMessageSquare/>
                                            <p className="text-[13px]">Voice by Zanga</p>
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
                                Themes
                            </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-MonaSans">
                                    Bring dispersed feedback into one view
                                </h3>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    Stakeholder feedback often sits across calls, messages, forms, complaints and
                                    informal conversations.
                                </p>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    <strong>Zanga</strong> helps bring those signals together so organisations can see
                                    recurring themes, emerging concerns and issues that may otherwise remain fragmented.
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
                                            <FiMessageSquare/>
                                            <p className="text-[13px]">Voice by Zanga</p>
                                        </Link>
                                        <Link
                                            href="#"
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2 hover:bg-terracotta hover:text-white transition-colors">
                                            <FiBarChart2/>
                                            <p className="text-[13px]">Stakeholder Analytics</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="md:p-6 p-2 col-span-2 min-h-[280px] md:min-h-[420px] bg-[url('/images/16.jpg')] bg-cover bg-center rounded-b-3xl md:rounded-r-3xl md:rounded-2xl flex flex-col justify-between gap-4 relative">
                                <div className="absolute inset-0 bg-slate-800/40 rounded-b-3xl md:rounded-r-3xl md:rounded-2xl"/>
                                <div className="p-4 rounded-xl border border-white/20 relative overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"/>
                                    <div className="relative">
                                        <div className="flex items-center justify-between gap-3">
                                            <div>
                                                <p className="text-white text-sm font-semibold font-Montserrat">Unified
                                                    Feedback View</p>
                                                <p className="text-white/70 text-[12px] font-Montserrat">4 sources
                                                    &middot; 1 picture</p>
                                            </div>
                                            <div className="rounded-full bg-white/15 px-3 py-1 shrink-0">
                                                <p className="text-white text-[11px] font-Montserrat font-semibold">Merged</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-4 gap-1.5 mt-3">
                                            {[
                                                {source: 'Calls', count: 214},
                                                {source: 'Messages', count: 486},
                                                {source: 'Forms', count: 193},
                                                {source: 'Complaints', count: 97},
                                            ].map((item) => (
                                                <div key={item.source}
                                                     className="rounded-lg bg-white/10 border border-white/15 px-1.5 py-1.5 text-center">
                                                    <p className="text-white text-[12px] font-bold font-MonaSans leading-tight">{item.count}</p>
                                                    <p className="text-white/60 text-[8px] font-Montserrat">{item.source}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl border border-white/20 relative overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"/>
                                    <div className="relative">
                                        <p className="text-white/60 text-[10px] font-Montserrat uppercase tracking-wide mb-3">
                                            Recurring themes
                                        </p>
                                        <div className="space-y-2.5">
                                            {[
                                                {theme: 'Delayed payments', mentions: 168, status: 'Rising'},
                                                {theme: 'Service wait times', mentions: 131, status: 'Rising'},
                                                {theme: 'Road safety near site', mentions: 74, status: 'New'},
                                                {theme: 'Staff conduct', mentions: 52, status: 'Stable'},
                                            ].map((row) => (
                                                <div key={row.theme} className="flex items-center justify-between gap-3">
                                                    <div className="min-w-0">
                                                        <p className="text-white text-[12px] font-semibold font-Montserrat">{row.theme}</p>
                                                        <p className="text-white/60 text-[10px] font-Montserrat">{row.mentions} mentions</p>
                                                    </div>
                                                    <span
                                                        className={`rounded-full px-2.5 py-0.5 text-white text-[9px] font-semibold font-Montserrat uppercase tracking-wide shrink-0 ${row.status === 'Rising' ? 'bg-terracotta' : row.status === 'New' ? 'bg-white/20' : 'border border-white/25'}`}>
                                                        {row.status}
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
                                            <p className="text-white text-sm font-semibold font-Montserrat">Case
                                                VZ-2041</p>
                                            <p className="text-white/70 text-[12px] font-Montserrat">Supplier payment
                                                delay &middot; Day 3</p>
                                        </div>
                                        <div className="rounded-full bg-terracotta px-3 py-1 shrink-0">
                                            <p className="text-white text-[11px] font-Montserrat font-semibold">In
                                                progress</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl border border-white/20 relative overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"/>
                                    <div className="relative">
                                        <p className="text-white/60 text-[10px] font-Montserrat uppercase tracking-wide mb-3">
                                            Case trail
                                        </p>
                                        <div className="space-y-2.5">
                                            {[
                                                {step: 'Received via WhatsApp', meta: 'Mon 09:14', status: 'done'},
                                                {step: 'Categorised: Payments', meta: 'Mon 09:40', status: 'done'},
                                                {step: 'Assigned to Procurement', meta: 'Mon 11:02', status: 'done'},
                                                {step: 'Follow-up with supplier', meta: 'Due Thu', status: 'active'},
                                                {step: 'Resolved & closed', meta: 'Pending', status: 'next'},
                                            ].map((item) => (
                                                <div key={item.step} className="flex items-center gap-2.5">
                                                    <span
                                                        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${item.status === 'done' ? 'bg-white text-slate-800' : item.status === 'active' ? 'bg-terracotta' : 'border border-white/30'}`}>
                                                        {item.status === 'done' && <FiCheck className="w-2.5 h-2.5"/>}
                                                    </span>
                                                    <p className={`flex-1 min-w-0 text-[11px] font-Montserrat ${item.status === 'next' ? 'text-white/50' : 'text-white'}`}>
                                                        {item.step}
                                                    </p>
                                                    <span className="text-white/60 text-[9px] font-Montserrat shrink-0">{item.meta}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 col-span-3">
                                <span
                                    className="inline-block bg-highlight/10 text-highlight text-xs font-semibold font-Montserrat px-3 py-1 rounded-full mb-2">
                                Resolution
                            </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-MonaSans">
                                    Track issues through to resolution
                                </h3>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    Listening is only one part of effective stakeholder engagement.
                                </p>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    <strong>Zanga</strong> supports structured case management and escalation so issues
                                    can be recorded, assigned, followed up and tracked more consistently.
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
                                            <FiMessageSquare/>
                                            <p className="text-[13px]">Voice by Zanga</p>
                                        </Link>
                                        <Link
                                            href="#"
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2 hover:bg-terracotta hover:text-white transition-colors">
                                            <FiClipboard/>
                                            <p className="text-[13px]">Case Management</p>
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
                                Early Warning
                            </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-MonaSans">
                                    Identify emerging risk earlier
                                </h3>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    Patterns in stakeholder feedback can provide early warning of operational,
                                    reputational, social or relationship risk.
                                </p>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    By analysing recurring concerns and changes in sentiment, <strong>Zanga</strong> helps
                                    organisations identify where closer attention may be required.
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
                                            <FiMessageSquare/>
                                            <p className="text-[13px]">Voice by Zanga</p>
                                        </Link>
                                        <Link
                                            href="#"
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2 hover:bg-terracotta hover:text-white transition-colors">
                                            <FiAlertTriangle/>
                                            <p className="text-[13px]">Stakeholder Intelligence</p>
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
                                            <p className="text-white text-sm font-semibold font-Montserrat">Risk
                                                Signals</p>
                                            <p className="text-white/70 text-[12px] font-Montserrat">Community feedback
                                                &middot; Northern sites</p>
                                        </div>
                                        <div className="rounded-full bg-white/15 px-3 py-1 shrink-0">
                                            <p className="text-white text-[11px] font-Montserrat font-semibold">Watch</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 p-4 rounded-xl border border-white/20 relative overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"/>
                                    <div className="relative">
                                        <p className="text-white/60 text-[10px] font-Montserrat uppercase tracking-wide mb-2">
                                            Last 30 days
                                        </p>
                                        <div className="grid grid-cols-3 gap-2">
                                            {[
                                                {label: 'Sentiment', value: '−12', note: 'pts', down: true},
                                                {label: 'Repeat grievances', value: '14', note: '+6 cases', down: true},
                                                {label: 'Resolved', value: '81%', note: '+3 pts', down: false},
                                            ].map((stat) => (
                                                <div key={stat.label} className="rounded-lg bg-white/10 border border-white/15 px-2 py-2">
                                                    <p className="text-white/60 text-[9px] font-Montserrat leading-tight">{stat.label}</p>
                                                    <p className="text-white text-lg font-bold font-MonaSans leading-tight mt-1">{stat.value}</p>
                                                    <p className={`text-[10px] font-semibold font-Montserrat ${stat.down ? 'text-terracotta' : 'text-white'}`}>
                                                        {stat.note}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-4 pt-3 border-t border-white/15">
                                            <p className="text-white/60 text-[10px] font-Montserrat uppercase tracking-wide mb-2">
                                                Needs closer attention
                                            </p>
                                            <div className="space-y-1.5">
                                                {[
                                                    'Water access concerns up 38% near the processing site',
                                                    'Same contractor named in four separate grievances',
                                                ].map((signal, i) => (
                                                    <div key={signal} className="flex items-start gap-2">
                                                        <span
                                                            className={`w-4 h-4 rounded-full text-white text-[9px] font-semibold flex items-center justify-center shrink-0 ${i === 0 ? 'bg-terracotta' : 'bg-white/20'}`}>
                                                            {i + 1}
                                                        </span>
                                                        <p className="text-white text-[11px] font-Montserrat leading-snug">{signal}</p>
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
                                            <FiFileText className="w-3.5 h-3.5 text-white"/>
                                        </span>
                                        <p className="text-white text-[11px] font-Montserrat font-semibold">Evidence trail</p>
                                    </div>
                                    <p className="text-white/70 text-[10px] font-Montserrat uppercase tracking-wide">
                                        FY 2025
                                    </p>
                                </div>

                                <div className="relative space-y-2">
                                    {[
                                        {label: 'Grievances received', value: '142'},
                                        {label: 'Escalated to leadership', value: '38'},
                                        {label: 'Average time to respond', value: '6 days'},
                                    ].map((row) => (
                                        <div key={row.label}
                                             className="flex items-center gap-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md px-4 py-2.5">
                                            <p className="flex-1 min-w-0 text-white text-[12px] font-Montserrat leading-snug">
                                                {row.label}
                                            </p>
                                            <p className="text-white text-[12px] font-bold font-MonaSans shrink-0">
                                                {row.value}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="relative rounded-2xl bg-white px-4 py-3 shadow-lg">
                                    <p className="text-gray-400 text-[9px] font-Montserrat uppercase tracking-wide">
                                        Cases resolved &middot; FY 2025
                                    </p>
                                    <div className="flex items-end justify-between gap-4 mt-1">
                                        <div>
                                            <p className="text-gray-900 text-2xl font-bold font-MonaSans leading-none">89%</p>
                                            <p className="flex items-center gap-1 text-olive text-[10px] font-semibold font-Montserrat mt-1">
                                                <FiTrendingUp className="w-3 h-3"/> +14 pts year on year
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
                                Accountability
                            </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-MonaSans">
                                    Strengthen ESG and accountability evidence
                                </h3>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    Organisations increasingly need to show not only that they consulted stakeholders,
                                    but that they listened, responded and tracked outcomes.
                                </p>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    <strong>Zanga</strong> helps create a clearer evidence trail around engagement,
                                    grievances, escalation and response.
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
                                            <FiMessageSquare/>
                                            <p className="text-[13px]">Voice by Zanga</p>
                                        </Link>
                                        <Link
                                            href="#"
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2 hover:bg-terracotta hover:text-white transition-colors">
                                            <FiFileText/>
                                            <p className="text-[13px]">ESG and Stakeholder Reporting</p>
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
