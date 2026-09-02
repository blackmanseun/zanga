import Reveal from '@/components/ui/Reveal'
import {FiTarget, FiAward, FiTrendingUp, FiZap, FiUsers} from "react-icons/fi";
import {CiCircleList} from "react-icons/ci";
import {AiFillStar} from "react-icons/ai";
import {FaInstagram, FaTiktok, FaYoutube} from "react-icons/fa";
import {PiBrainLight} from "react-icons/pi";
import {LiaShoePrintsSolid} from "react-icons/lia";
import { FaArrowTrendDown } from "react-icons/fa6";

function MiniBar({label, value}: { label: string; value: number }) {
    return (
        <div className="mb-2.5 last:mb-0">
            <div className="flex justify-between text-[10px] text-white/70 font-Montserrat mb-1">
                <span>{label}</span>
                <span className="font-semibold text-white">{value}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/15">
                <div className="h-full rounded-full bg-white" style={{width: `${value}%`}}/>
            </div>
        </div>
    )
}

const networkNodes = [
    {src: '/images/headshot/5.jpg', top: '38%', left: '44%', size: 48, center: true},
    {src: '/images/headshot/1.jpg', top: '8%', left: '14%', size: 34},
    {src: '/images/headshot/2.jpg', top: '6%', left: '76%', size: 34},
    {src: '/images/headshot/3.jpg', top: '44%', left: '8%', size: 30},
    {src: '/images/headshot/6.jpg', top: '48%', left: '84%', size: 30},
    {src: '/images/headshot/7.jpg', top: '82%', left: '22%', size: 32},
    {src: '/images/headshot/8.jpg', top: '80%', left: '70%', size: 32},
]

const networkDots = [
    {top: '18%', left: '58%'}, {top: '30%', left: '92%'}, {top: '64%', left: '48%'},
    {top: '68%', left: '10%'}, {top: '92%', left: '46%'}, {top: '10%', left: '48%'},
]

function NetworkVisual() {
    const center = networkNodes[0]
    return (
        <div className="relative h-full min-h-[190px]" aria-hidden="true">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {networkNodes.slice(1).map((n) => (
                    <line
                        key={n.src}
                        x1={parseFloat(center.left)} y1={parseFloat(center.top)}
                        x2={parseFloat(n.left)} y2={parseFloat(n.top)}
                        stroke="rgba(255,255,255,0.25)" strokeWidth="0.5"
                    />
                ))}
            </svg>
            {networkDots.map((d, i) => (
                <span key={i} className="absolute w-1.5 h-1.5 rounded-full bg-emerald-400"
                      style={{top: d.top, left: d.left}}/>
            ))}
            {networkNodes.map((n) => (
                <img
                    key={n.src}
                    src={n.src}
                    alt=""
                    className={`absolute object-cover object-top rounded-full ${n.center ? 'ring-2 ring-white/70' : 'ring-2 ring-white/30'}`}
                    style={{
                        top: n.top,
                        left: n.left,
                        width: n.size,
                        height: n.size,
                        transform: 'translate(-50%, -50%)',
                    }}
                />
            ))}
        </div>
    )
}

export default function SolutionsFeaturesBenefits() {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <Reveal className="text-center mb-14">
          <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
            Features &amp; Benefits
          </span>
                    <h2 className="text-3xl md:text-[2.8rem] leading-[1.1] font-bold text-gray-700 mt-3 font-MonaSans max-w-2xl mx-auto">
                        See Beyond Experience and Qualifications
                    </h2>
                </Reveal>

                <div className="flex flex-col gap-12">
                    <div className="bg-gray-50 rounded-3xl border border-gray-200 p-1 shadow-sm w-full xl:w-[80%] mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-5 md:gap-8">
                            <div
                                className="md:p-6 p-2 col-span-2 min-h-[280px] md:min-h-[420px] bg-[url('/images/17.jpg')] bg-cover bg-center rounded-t-3xl md:rounded-l-3xl md:rounded-2xl flex flex-col justify-between gap-4">
                                <div
                                    className="p-4 md:rounded-xl rounded-3xl border border-white/20 relative overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"/>
                                    <div className="relative">
                                        <div className="flex items-center gap-3">
                                            <img
                                                className="w-[56px] h-[56px] object-cover object-top rounded-xl shrink-0"
                                                src="/images/headshot/1.jpg" alt="Amaka Johnson"/>
                                            <div>
                                                <p className="text-white text-sm font-semibold font-Montserrat">Amaka
                                                    Johnson</p>
                                                <p className="text-white/70 text-[12px] font-Montserrat">Shortlisted
                                                    &middot; Operations Lead</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 mt-4">
                                            <div className="rounded-full bg-white/15 px-3 py-1">
                                                <p className="text-white text-[11px] font-Montserrat">Full Profile
                                                    &middot; 12 min read</p>
                                            </div>
                                            <div className="flex items-center gap-1 rounded-full bg-white/15 px-3 py-1">
                                                <AiFillStar className="text-yellow-400"/>
                                                <p className="text-white text-[11px] font-Montserrat font-semibold">4.9
                                                    Fit Score</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div
                                        className="flex-1 p-4 rounded-xl border border-white/20 relative overflow-hidden shadow-lg">
                                        <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"/>
                                        <div className="relative">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <img className="w-8 h-8 object-cover object-top rounded-full"
                                                         src="/images/headshot/2.jpg" alt="Ademola Bamidele"/>
                                                    <div>
                                                        <p className="text-white text-[12px] font-semibold font-Montserrat">Ademola
                                                            Bamidele</p>
                                                        <p className="text-white/60 text-[10px] font-Montserrat">Head of
                                                            Talent, FirstBank</p>
                                                    </div>
                                                </div>
                                                <div className="flex text-yellow-400">
                                                    {Array.from({length: 5}).map((_, i) => (
                                                        <AiFillStar key={i} className="w-3 h-3"/>
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="text-white/80 text-[12px] font-Montserrat leading-relaxed mt-2">
                                                &ldquo;The Fit report gave us a clear read on Amaka&apos;s working
                                                style before the final interview. It made our decision so much
                                                easier.&rdquo;
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 shrink-0">
                                        <div
                                            className="w-10 h-10 rounded-full bg-white/15 border border-white/20 backdrop-blur-md flex items-center justify-center text-white">
                                            <FaInstagram className="w-4 h-4"/>
                                        </div>
                                        <div
                                            className="w-10 h-10 rounded-full bg-white/15 border border-white/20 backdrop-blur-md flex items-center justify-center text-white">
                                            <FaYoutube className="w-4 h-4"/>
                                        </div>
                                        <div
                                            className="w-10 h-10 rounded-full bg-white/15 border border-white/20 backdrop-blur-md flex items-center justify-center text-white">
                                            <FaTiktok className="w-4 h-4"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 col-span-3">
                                <span
                                    className="inline-block bg-highlight/10 text-highlight text-xs font-semibold font-Montserrat px-3 py-1 rounded-full mb-2">
                                Insight
                            </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-MonaSans">
                                    Understand the person behind the CV
                                </h3>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    Experience tells you what a candidate has done. <strong>Zanga</strong> helps you understand how they
                                    are likely to think, behave, communicate and approach their work.
                                </p>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    Use structured psychometric insight alongside interviews and experience to build a
                                    more complete picture of the person you are considering.
                                </p>
                                <div className="pt-10">
                                    <p className="flex items-center gap-1 text-sm text-gray-600 font-Montserrat mb-2">
                                        <strong>Zanga</strong> solution
                                        <span><FaArrowTrendDown className="text-terracotta" size={18}/></span>
                                    </p>
                                    <div className="flex md:flex-row flex-col items-center gap-2">
                                        <div
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2">
                                            <FiTarget/>
                                            <p className="text-[13px] text-terracotta">Fit by Zanga</p>
                                        </div>
                                        <div
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2">
                                            <CiCircleList/>
                                            <p className="text-[13px] text-terracotta">Psychometric Assessments</p>
                                        </div>
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
                                Role Fit
                            </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-MonaSans">
                                    Make better role-fit decisions
                                </h3>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    A strong candidate can still struggle in the wrong role or environment.
                                </p>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    Understand how an individual&rsquo;s behavioural tendencies, working style and
                                    capabilities align with the demands of the position. Helping you identify where
                                    there is strong alignment and where further exploration may be needed.
                                </p>
                                <div className="pt-10">
                                    <p className="flex items-center gap-1 text-sm text-gray-600 font-Montserrat mb-2">
                                        <strong>Zanga</strong> solution
                                        <span><FaArrowTrendDown className="text-terracotta" size={18}/></span>
                                    </p>
                                    <div className="flex md:flex-row flex-col items-center gap-2">
                                        <div
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2">
                                            <FiTarget/>
                                            <p className="text-[13px] text-terracotta">Fit by Zanga</p>
                                        </div>
                                        <div
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2">
                                            <LiaShoePrintsSolid/>
                                            <p className="text-[13px] text-terracotta">Role-Fit Assessment</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="md:p-6 p-2 col-span-2 min-h-[280px] md:min-h-[420px] bg-[url('/images/16.jpg')] bg-cover bg-center rounded-b-3xl md:rounded-r-3xl md:rounded-2xl flex flex-col justify-between gap-4 relative">
                                <div className="absolute inset-0 bg-slate-800/40 rounded-b-3xl md:rounded-r-3xl md:rounded-2xl"/>
                                <div
                                    className="p-4 rounded-xl border border-white/20 relative overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"/>
                                    <div className="relative flex items-center gap-5">
                                        <div
                                            className="relative w-16 h-16 shrink-0 rounded-full"
                                            style={{background: 'conic-gradient(#fff 0% 84%, rgba(255,255,255,0.25) 84% 100%)'}}
                                        >
                                            <div
                                                className="absolute inset-1.5 rounded-full bg-terracotta flex items-center justify-center text-sm font-bold text-white">
                                                84%
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-white text-sm font-semibold font-Montserrat">Role
                                                Alignment</p>
                                            <p className="text-white/70 text-[12px] font-Montserrat leading-snug">
                                                Amaka Johnson &middot; Operations Team Lead
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="p-4 rounded-xl border border-white/20 relative overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"/>
                                    <div className="relative">
                                        <p className="text-white/60 text-[10px] font-Montserrat uppercase tracking-wide mb-2">
                                            Fit Breakdown
                                        </p>
                                        <MiniBar label="Working Style Fit" value={88}/>
                                        <MiniBar label="Environment Fit" value={79}/>
                                        <MiniBar label="Capability Fit" value={91}/>
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
                                <div
                                    className="p-4 rounded-xl border border-white/20 relative overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"/>
                                    <div className="relative flex items-center justify-between">
                                        <div>
                                            <p className="text-white text-sm font-semibold font-Montserrat">Structured
                                                Comparison</p>
                                            <p className="text-white/70 text-[12px] font-Montserrat">12 candidates
                                                evaluated</p>
                                        </div>
                                        <div className="rounded-full bg-white/15 px-3 py-1 shrink-0">
                                            <p className="text-white text-[11px] font-Montserrat font-semibold">Bias-checked</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex-1 p-4 rounded-xl border border-white/20 relative overflow-hidden shadow-lg min-h-[220px]">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"/>
                                    <div className="relative h-full">
                                        <NetworkVisual/>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 col-span-3">
                                <span
                                    className="inline-block bg-highlight/10 text-highlight text-xs font-semibold font-Montserrat px-3 py-1 rounded-full mb-2">
                                Objectivity
                            </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-MonaSans">
                                    Reduce subjectivity in selection
                                </h3>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    Interviews can be influenced by confidence, familiarity, personal chemistry and
                                    unconscious preferences.
                                </p>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
<strong>Zanga</strong> introduces a structured evidence base that gives hiring teams a more
                                    consistent way to understand and compare candidates, while complementing rather
                                    than replacing professional judgement.
                                </p>
                                <div className="pt-10">
                                    <p className="flex items-center gap-1 text-sm text-gray-600 font-Montserrat mb-2">
                                        <strong>Zanga</strong> solution
                                        <span><FaArrowTrendDown className="text-terracotta" size={18}/></span>
                                    </p>
                                    <div className="flex md:flex-row flex-col items-center gap-2">
                                        <div
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2">
                                            <PiBrainLight/>
                                            <p className="text-[13px] text-terracotta">Psychometric Testing</p>
                                        </div>
                                        <div
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2">
                                            <CiCircleList/>
                                            <p className="text-[13px] text-terracotta">Candidate Assessment</p>
                                        </div>
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
                                    Make stronger leadership appointments
                                </h3>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    Senior hiring decisions affect far more than one position.
                                </p>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    Understand leadership capability, behavioural strengths, development areas and
                                    future potential before making a business-critical appointment. Use those
                                    insights to strengthen final interviews, references and onboarding.
                                </p>
                                <div className="pt-10">
                                    <p className="flex items-center gap-1 text-sm text-gray-600 font-Montserrat mb-2">
                                        <strong>Zanga</strong> solution
                                        <span><FaArrowTrendDown className="text-terracotta" size={18}/></span>
                                    </p>
                                    <div className="flex md:flex-row flex-col items-center gap-2">
                                        <div
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2">
                                            <FiAward/>
                                            <p className="text-[13px] text-terracotta">Leadership Competency
                                                Assessment</p>
                                        </div>
                                        <div
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2">
                                            <FiTrendingUp/>
                                            <p className="text-[13px] text-terracotta">Leadership Potential
                                                Assessment</p>
                                        </div>
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
                                                 src="/images/headshot/2.jpg" alt=""/>
                                            <img className="w-9 h-9 rounded-full ring-2 ring-white/40 object-cover object-top"
                                                 src="/images/headshot/3.jpg" alt=""/>
                                            <img className="w-9 h-9 rounded-full ring-2 ring-white/40 object-cover object-top"
                                                 src="/images/headshot/4.png" alt=""/>
                                            <img className="w-9 h-9 rounded-full ring-2 ring-white/40 object-cover object-top"
                                                 src="/images/headshot/7.jpg" alt=""/>
                                        </div>
                                        <div
                                            className="w-9 h-9 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white text-[10px] font-semibold font-Montserrat shrink-0">
                                            +12
                                        </div>
                                        <p className="text-white/80 text-[11px] font-Montserrat ml-1">Leadership
                                            Pipeline</p>
                                    </div>
                                </div>
                                <div className="flex-1 p-4 rounded-xl border border-white/20 relative overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl"/>
                                    <div className="relative">
                                        <div className="flex items-center gap-4">
                                            <img
                                                className="w-16 h-20 rounded-lg object-cover object-top shrink-0"
                                                src="/images/headshot/6.jpg" alt="Ngozi Adeyemi"/>
                                            <div className="min-w-0">
                                                <span
                                                    className="inline-block bg-white/15 text-white text-[9px] font-semibold font-Montserrat px-2 py-0.5 rounded-full mb-1 uppercase tracking-wide">
                                                    Leadership
                                                </span>
                                                <p className="text-white text-sm font-semibold font-Montserrat">Kwena
                                                    Mshindi</p>
                                                <p className="text-white/70 text-[11px] font-Montserrat mb-2">Regional
                                                    Director Candidate</p>
                                                <MiniBar label="Leadership Readiness" value={82}/>
                                            </div>
                                        </div>
                                        <div className="mt-4 pt-3 border-t border-white/15">
                                            <p className="text-white/50 text-[9px] font-Montserrat uppercase tracking-wide mb-2">
                                                Leadership Report
                                            </p>
                                            <MiniBar label="Strategic Thinking" value={88}/>
                                            <MiniBar label="Decision-Making" value={91}/>
                                            <MiniBar label="Influence" value={79}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-3xl border border-gray-200 p-1 shadow-sm w-full xl:w-[80%] mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-5 md:gap-8">
                            <div
                                className="relative col-span-2 min-h-[280px] md:min-h-[420px] py-10 md:py-0 bg-[url('/images/18.jpg')] bg-cover bg-center rounded-t-3xl md:rounded-l-3xl md:rounded-2xl flex items-center justify-center ">
                                 <div className="relative w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] max-w-full">
                                     <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full"/>

                                     <div
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[210px] h-[210px] sm:w-[280px] sm:h-[280px] rounded-full border-2 border-dashed border-gray-200"/>

                                    <div
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-primary p-2">
                                        <div className="w-full h-full rounded-full overflow-hidden ring-4 ring-white shadow-lg">
                                            <img
                                                className="w-full h-full object-cover object-top"
                                                src="/images/headshot/8.jpg" alt="Chidinma Okoro"/>
                                        </div>
                                    </div>

                                    <div
                                        className="absolute top-1 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-terracotta shadow-md flex items-center justify-center text-white">
                                        <FiZap className="w-5 h-5"/>
                                    </div>

                                    <div
                                        className="absolute -left-4 top-[26%] -translate-x-1/4 flex items-center gap-2 bg-white rounded-full shadow-md border border-gray-100 pl-1.5 pr-3 py-1.5">
                                        <span
                                            className="w-7 h-7 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                            <FiTrendingUp className="w-4 h-4"/>
                                        </span>
                                        <p className="text-gray-700 text-[11px] font-Montserrat font-semibold whitespace-nowrap">Growth
                                            Signals</p>
                                    </div>

                                    <div
                                        className="hidden absolute right-0 top-[36%] translate-x-1/4 md:flex items-center gap-2 bg-white rounded-full shadow-md border border-gray-100 pl-1.5 pr-3 py-1.5">
                                        <span
                                            className="w-7 h-7 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                            <FiUsers className="w-4 h-4"/>
                                        </span>
                                        <p className="text-gray-700 text-[11px] font-Montserrat font-semibold whitespace-nowrap">Succession
                                            Report</p>
                                    </div>

                                    <div
                                        className="absolute right-[4%] md:bottom-[16%] bottom-0 bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-3 text-center">
                                        <p className="text-gray-400 text-[9px] font-Montserrat uppercase tracking-wide">Top
                                            decile</p>
                                        <p className="text-gray-900 text-2xl font-bold font-MonaSans leading-tight">92%</p>
                                        <p className="text-gray-400 text-[9px] font-Montserrat">potential accuracy</p>
                                    </div>

                                    <div
                                        className="hidden md:block absolute left-0 -bottom-16 w-[168px] bg-white rounded-xl shadow-lg border border-gray-100 p-3">
                                        <div className="flex items-center gap-1 mb-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-200"/>
                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-200"/>
                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-200"/>
                                        </div>
                                        <div
                                            className="h-16 w-full rounded-md bg-primary/10 mb-2 flex items-center justify-center text-primary">
                                            <FiTarget className="w-5 h-5"/>
                                        </div>
                                        <p className="text-gray-800 text-[11px] font-semibold font-Montserrat leading-snug mb-1.5">
                                            Succession Readiness Report
                                        </p>
                                        <div className="h-1.5 rounded-full bg-gray-100 mb-1 w-full"/>
                                        <div className="h-1.5 rounded-full bg-gray-100 mb-2 w-3/4"/>
                                        <span
                                            className="inline-block bg-primary text-white text-[9px] font-semibold font-Montserrat px-3 py-1 rounded-full">
                                            View Report
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 col-span-3">
                                <span
                                    className="inline-block bg-highlight/10 text-highlight text-xs font-semibold font-Montserrat px-3 py-1 rounded-full mb-2">
                                Potential
                            </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-MonaSans">
                                    Identify potential, not just current performance
                                </h3>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
                                    The person who can do the job today may not always be the person who can grow
                                    with the organisation tomorrow.
                                </p>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed font-Montserrat mb-3 last:mb-5">
<strong>Zanga</strong> helps organisations identify indicators of leadership potential and
                                    readiness for greater responsibility, supporting graduate recruitment,
                                    emerging-talent programmes and succession pipelines.
                                </p>
                                <div className="pt-10">
                                    <p className="flex items-center gap-1 text-sm text-gray-600 font-Montserrat mb-2">
                                        <strong>Zanga</strong> solution
                                        <span><FaArrowTrendDown className="text-terracotta" size={18}/></span>
                                    </p>
                                    <div className="flex md:flex-row flex-col items-center gap-2">
                                        <div
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2">
                                            <FiTrendingUp/>
                                            <p className="text-[13px] text-terracotta">Leadership Potential
                                                Assessment</p>
                                        </div>
                                        <div
                                            className="md:w-fit w-full flex items-center justify-center gap-1 rounded-full border border-terracotta text-terracotta px-5 py-2">
                                            <FiTarget/>
                                            <p className="text-[13px] text-terracotta">Fit by Zanga</p>
                                        </div>
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
