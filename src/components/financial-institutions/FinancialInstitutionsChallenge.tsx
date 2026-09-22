import React from 'react'
import Link from 'next/link'
import {FiArrowRight} from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'
import EnterprisesPolaroid from '@/components/enterprises/EnterprisesPolaroid'

const challenges: string[] = [
    'Leadership capability and succession readiness',
    'Inconsistent management quality across branches and functions',
    'Frontline and branch employee attrition',
    'Limited visibility into organisational culture and conduct',
    'Low trust in employee feedback or speak-up channels',
    'Limited structured insight into leadership quality within lending or investment decisions',
]

export default function FinancialInstitutionsChallenge() {
    return (
        <section className="relative overflow-hidden bg-white py-20 md:py-28 px-4 sm:px-6 lg:px-8">
            <div className="relative max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <Reveal>
                        <div className="relative w-full max-w-[420px] h-[420px] sm:h-[460px] mx-auto md:block">
                            <EnterprisesPolaroid
                                imgClassName="md:h-[250px] h-[200px]"
                                src="/images/69.jpg"
                                className="w-[250px] md:h-[280px] h-[250px] md:top-[-10%] top-0 left-0 md:-rotate-3 z-10"
                            />
                            <EnterprisesPolaroid
                                imgClassName="md:h-[200px] h-[180px]"
                                src="/images/28.jpg"
                                className="w-[60%] top-[14%] -right-10 rotate-[8deg] z-20"
                            />
                            <EnterprisesPolaroid
                                imgClassName="md:h-[220px] h-[180px]"
                                src="/images/35.jpg"
                                className="w-[60%] top-[46%] md:left-[-2%] left-2 rotate-[-10deg] z-30"
                            />
                            <span
                                className="animate-pulse absolute right-2 bottom-0 w-14 h-14 rounded-full bg-terracotta/10 border border-terracotta/20"
                                aria-hidden="true"
                            />
                        </div>
                    </Reveal>

                    <Reveal>
                        <div className="md:max-w-lg xl:max-w-xl">
                            <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
           The Challenge for Financial Institutions
          </span>

                            <h2 className="mb-6 text-gray-700 text-3xl md:text-[2.8rem] font-bold mt-3 font-MonaSans leading-[1.1]">
                                The challenge for financial institutions
                            </h2>

                            <div className="space-y-4">
                                <p className="text-gray-500 font-Montserrat leading-relaxed">
                                    Financial institutions operate in environments where leadership
                                    quality, organisational culture, employee conduct and customer
                                    experience can carry significant operational and reputational
                                    consequences.
                                </p>
                                <p className="text-gray-500 font-Montserrat leading-relaxed">
                                    As institutions grow across branches, regions and subsidiaries, these
                                    issues become harder to see consistently.
                                </p>
                                <p className="text-gray-500 font-Montserrat leading-relaxed">
                                    Leadership capability may vary across teams. Succession pipelines may
                                    be unclear. Culture can differ significantly between head office and
                                    branches. And important employee or customer signals may remain
                                    fragmented across surveys, complaints, interviews and reporting
                                    channels.
                                </p>
                                <p className="text-gray-500 font-Montserrat leading-relaxed">
                                    <strong>Zanga</strong> helps financial institutions bring more
                                    structure, evidence and context into those decisions.
                                </p>
                            </div>

                            <Link
                                href="#"
                                className="mt-8 inline-flex items-center justify-center gap-2 bg-olive text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-olive/90 transition-colors font-Montserrat"
                            >
                                Speak to us
                                <FiArrowRight size={16} aria-hidden="true"/>
                            </Link>
                        </div>
                    </Reveal>
                </div>

                <Reveal>
                    <p className="mt-16 md:mt-16 text-xs font-semibold text-olive uppercase tracking-wide font-Montserrat mb-6">
                        Common challenges we help address
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
                        {challenges.map((challenge, i) => (
                            <div key={challenge}>
                                <p className="text-terracotta/70 text-[18px]">0{i + 1}</p>
                                <span className="block w-8 h-[2px] bg-terracotta mb-3" aria-hidden="true"/>
                                <p className="text-gray-900 font-semibold font-Montserrat leading-snug md:w-[80%]">
                                    {challenge}
                                </p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
