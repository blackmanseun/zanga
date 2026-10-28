import React from 'react'
import {FiArrowRight} from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'
import EnterprisesPolaroid from '@/components/enterprises/EnterprisesPolaroid'
import OpenModalButton from '@/components/modal/OpenModalButton'

const challenges: { text: string; label: string; href: string }[] = [
    {
        text: 'Limited scientific data behind coaching and consulting insights.',
        label: 'Leadership Intelligence',
        href: '#solutions-leadership-intelligence',
    },
    {
        text: 'Difficulty identifying underlying strengths and development priorities.',
        label: 'Leadership Intelligence',
        href: '#solutions-leadership-intelligence',
    },
    {
        text: 'Coaching conversations that remain broad rather than focused.',
        label: 'Leadership Intelligence',
        href: '#solutions-leadership-intelligence',
    },
    {
        text: 'Limited ways to demonstrate development over time.',
        label: 'Training & Development',
        href: '#solutions-training-development',
    },
    {
        text: 'Need for credible assessment capability within an existing offering.',
        label: 'Leadership Intelligence',
        href: '#solutions-leadership-intelligence',
    },
    {
        text: 'Limited access to assessment tools designed for African and other high-context workplaces.',
        label: 'Zanga Assessments',
        href: '#why-zanga',
    },
]

export default function CoachesConsultantsChallenge() {
    return (
        <section className="relative overflow-hidden bg-white py-20 md:py-28 px-4 sm:px-6 lg:px-8">
            <div className="relative max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <Reveal>
                        <div className="relative w-full max-w-[420px] h-[420px] sm:h-[460px] mx-auto md:block">
                            <EnterprisesPolaroid
                                imgClassName="md:h-[250px] h-[200px]"
                                src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/121"
                                className="w-[250px] md:h-[280px] h-[250px] md:top-[-10%] top-0 left-0 md:-rotate-3 z-10"
                            />
                            <EnterprisesPolaroid
                                imgClassName="md:h-[200px] h-[180px]"
                                src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/2"
                                className="w-[60%] top-[14%] -right-10 rotate-[8deg] z-20"
                            />
                            <EnterprisesPolaroid
                                imgClassName="md:h-[220px] h-[180px]"
                                src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/137"
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
           The Challenge
          </span>

                            <h2 className="mb-6 text-gray-700 text-3xl md:text-[2.8rem] font-bold mt-3 font-MonaSans leading-[1.1]">
                                The coach and consultant challenge
                            </h2>

                            <div className="space-y-4">
                                <p className="text-gray-500 font-Montserrat leading-relaxed">
                                    Strong coaching and consulting work depends on understanding what is
                                    really happening beneath the surface.
                                </p>
                                <p className="text-gray-500 font-Montserrat leading-relaxed">
                                    But conversations alone do not always reveal behavioural patterns,
                                    leadership gaps, blind spots or the differences between how clients see
                                    themselves and how others experience them.
                                </p>
                                <p className="text-gray-500 font-Montserrat leading-relaxed">
                                    Practitioners may also want to provide more evidence behind their
                                    recommendations, demonstrate progress more clearly or expand their offer
                                    without having to build assessment capability from scratch.
                                </p>
                                <p className="text-gray-500 font-Montserrat leading-relaxed">
                                    <strong>Zanga</strong> helps coaches and consultants add structured people
                                    insight to their existing practice, without replacing the professional
                                    judgement and contextual understanding that make their work valuable.
                                </p>
                            </div>

                            <OpenModalButton
                                modal="book-a-demo"
                                className="mt-8 inline-flex items-center justify-center gap-2 bg-olive text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-olive/90 transition-colors font-Montserrat"
                            >
                                Speak to us
                                <FiArrowRight size={16} aria-hidden="true"/>
                            </OpenModalButton>
                        </div>
                    </Reveal>
                </div>

                <Reveal>
                    <p className="mt-16 md:mt-16 text-xs font-semibold text-olive uppercase tracking-wide font-Montserrat mb-6">
                        Common challenges we help address
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
                        {challenges.map((challenge, i) => (
                            <div key={challenge.text}>
                                <p className="text-terracotta/70 text-[18px]">0{i + 1}</p>
                                <span className="block w-8 h-[2px] bg-terracotta mb-3" aria-hidden="true"/>
                                <p className="text-gray-900 font-semibold font-Montserrat leading-snug md:w-[80%]">
                                    {challenge.text}
                                </p>
                                <a
                                    href={challenge.href}
                                    className="mt-3 inline-flex items-center gap-1.5 text-olive text-sm font-semibold font-Montserrat hover:gap-2.5 transition-all"
                                >
                                    {challenge.label}
                                    <FiArrowRight size={14} aria-hidden="true"/>
                                </a>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
