import React from 'react'
import Image from 'next/image'
import {FiArrowRight} from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'
import OpenModalButton from '@/components/modal/OpenModalButton'
import CardAction from '@/components/ui/CardAction'

type StartCard = {
    title: string
    description: string
    cta: string
    href?: string
    image: string
    alt: string
}

const sideCards: StartCard[] = [
    {
        title: 'Building leadership capability across portfolio companies?',
        description:
            'Start with the Leadership Competency Assessment to understand strengths and development priorities across founders and senior teams.',
        cta: 'Fit by Zanga',
        href: '/products/fit-by-zanga',
        image: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/163',
        alt: 'Senior team members discussing development priorities',
    },
    {
        title: 'Hiring a critical C-suite leader?',
        description:
            'Start with Fit by Zanga to bring structured assessment insight into executive recruitment.',
        cta: 'Explore Fit by Zanga',
        href: '/products/fit-by-zanga',
        image: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/62',
        alt: 'An executive candidate in conversation',
    },
    {
        title: 'Concerned about engagement or culture within a portfolio company?',
        description:
            'Start with Pulse by Zanga to understand workforce sentiment and employee experience.',
        cta: 'Explore Pulse by Zanga',
        href: '/products/pulse-by-zanga',
        image: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/76',
        alt: 'Colleagues discussing workplace culture',
    },
]

export default function InvestorsFundManagersWhereToStart() {
    return (
        <section className="bg-white md:py-20 py-14 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <div className="grid gap-8 lg:grid-cols-[3.5fr_2fr] items-end">
                        <div>
                            <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                                Get Started
                            </span>
                            <h2 className="text-3xl md:text-[2.8rem] leading-[1.1] font-bold mt-3 font-MonaSans text-gray-700">
                                Where should you start?
                            </h2>
                            <p className="md:max-w-xl mt-4 text-gray-500 text-[16px] font-Montserrat leading-relaxed lg:pb-1">
                                Every investor&apos;s priorities are different. Choose the path that
                                matches what you are trying to solve right now.
                            </p>
                        </div>
                    </div>
                </Reveal>

                <div className="mt-10 md:mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-[1.4fr_1fr]">
                    <Reveal delayMs={90}>
                        <OpenModalButton
                            modal="book-a-demo"
                            className="group relative flex w-full text-left h-[420px] sm:h-full overflow-hidden rounded-2xl"
                        >
                            <Image
                                src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/167"
                                alt="An investor reviewing a founder and management team"
                                fill
                                sizes="(min-width: 1024px) 55vw, 100vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-800/90 via-slate-800/20 to-transparent"/>
                            <div className="absolute inset-x-0 bottom-0 md:p-8 p-5">
                                <p className="font-MonaSans text-2xl font-bold text-white">
                                    Assessing a founder or management team before investment?
                                </p>
                                <p className="mt-2 max-w-md text-sm font-Montserrat leading-relaxed text-white/75">
                                    Start with Diligence by Zanga to add structured leadership insight to your
                                    existing diligence process.
                                </p>
                                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold font-Montserrat text-white">
                                    Talk to Zanga About Diligence
                                    <FiArrowRight
                                        size={16}
                                        aria-hidden="true"
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </span>
                            </div>
                        </OpenModalButton>
                    </Reveal>

                    <div className="flex flex-col gap-6">
                        {sideCards.map((card, i) => (
                            <Reveal key={card.title} delayMs={150 + i * 30}>
                                <CardAction
                                    href={card.href}
                                    wholeCard
                                    className="group relative flex min-h-[200px] h-full overflow-hidden rounded-2xl"
                                >
                                    <Image
                                        src={card.image}
                                        alt={card.alt}
                                        fill
                                        sizes="(min-width: 1024px) 25vw, 100vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-slate-800/70"/>
                                    <div className="absolute inset-x-0 bottom-0 md:p-6 p-5">
                                        <p className="font-MonaSans text-lg font-bold text-white">
                                            {card.title}
                                        </p>
                                        <p className="mt-1.5 text-sm font-Montserrat leading-relaxed text-white/80">
                                            {card.description}
                                        </p>
                                        <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold font-Montserrat text-white">
                                            {card.cta}
                                            <FiArrowRight
                                                size={16}
                                                aria-hidden="true"
                                                className="transition-transform duration-300 group-hover:translate-x-1"
                                            />
                                        </span>
                                    </div>
                                </CardAction>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
