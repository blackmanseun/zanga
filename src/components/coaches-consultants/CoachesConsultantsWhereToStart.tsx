import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {FiArrowRight} from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'
import CardAction from '@/components/ui/CardAction'
import type {ModalKey} from '@/components/modal/ModalProvider'
import OpenModalButton from '@/components/modal/OpenModalButton'

type StartCard = {
    title: string
    description: string
    cta: string
    image: string
    alt: string
    href?: string
    // When set, the card opens this modal instead of linking.
    modal?: ModalKey
}

const sideCards: StartCard[] = [
    {
        title: 'Running leadership or team programmes?',
        description:
            'Use Zanga assessment tools to create a stronger baseline and focus development around identified needs.',
        cta: 'Explore Leadership & Team Solutions',
        image: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/170',
        alt: 'A facilitator running a leadership programme',
    },
    {
        title: 'Want to use Zanga regularly with clients?',
        description:
            'Explore the Zanga Business Partner Programme and the tools, commercial models and support available to practitioners.',
        cta: 'Become a Zanga Partner',
        modal: 'partner-with-zanga',
        image: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/203',
        alt: 'A coach preparing for a client session',
    },
    {
        title: 'Want co-branded or white-labelled solutions?',
        description:
            'Explore the partnership options available for practitioners and consulting firms that want to integrate Zanga more deeply into their own client proposition.',
        cta: 'Explore Partnership Options',
        href: '/partners/become-a-partner#commercial-models',
        image: 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/82',
        alt: 'Consultants reviewing a client proposition',
    },
]

export default function CoachesConsultantsWhereToStart() {
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
                                What are you trying to achieve? Choose the path that matches where your
                                practice is right now.
                            </p>
                        </div>
                    </div>
                </Reveal>

                <div className="mt-10 md:mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-[1.4fr_1fr]">
                    <Reveal delayMs={90}>
                        <Link
                            href="/products/fit-by-zanga"
                            className="group relative flex h-[420px] sm:h-full overflow-hidden rounded-2xl"
                        >
                            <Image
                                src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/175"
                                alt="A coach in a one-to-one session with a client"
                                fill
                                sizes="(min-width: 1024px) 55vw, 100vw"
                                className="object-cover object-[50%_30%] transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-800/90 via-slate-800/20 to-transparent"/>
                            <div className="absolute inset-x-0 bottom-0 md:p-8 p-5">
                                <p className="font-MonaSans text-2xl font-bold text-white">
                                    Strengthen your coaching practice?
                                </p>
                                <p className="mt-2 max-w-md text-sm font-Montserrat leading-relaxed text-white/75">
                                    Explore Zanga assessment tools and certification options to bring more
                                    structured insight into individual development.
                                </p>
                                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold font-Montserrat text-white">
                                    Fit by Zanga
                                    <FiArrowRight
                                        size={16}
                                        aria-hidden="true"
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </span>
                            </div>
                        </Link>
                    </Reveal>

                    <div className="flex flex-col gap-6">
                        {sideCards.map((card, i) => (
                            <Reveal key={card.title} delayMs={150 + i * 30}>
                                <CardAction
                                    href={card.href}
                                    modal={card.modal}
                                    className="group relative flex w-full text-left min-h-[200px] h-full overflow-hidden rounded-2xl"
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

                <Reveal delayMs={120}>
                    <div className="relative mt-6 overflow-hidden rounded-2xl bg-terracotta/10 md:px-10 px-5 md:py-8 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                        <div
                            className="pointer-events-none absolute -right-16 -bottom-20"
                            aria-hidden="true"
                        >
                            <div className="w-[16rem] h-[16rem] rounded-[50%] border-2 border-terracotta/20"/>
                            <div className="absolute w-[9rem] h-[9rem] right-10 bottom-6 rounded-[50%] border-2 border-terracotta/20"/>
                        </div>
                        <div className="relative">
                            <p className="font-MonaSans text-lg font-bold text-gray-700">
                                Not sure where to begin?
                            </p>
                            <p className="mt-2 max-w-xl text-sm font-Montserrat leading-relaxed text-gray-500">
                                Tell us how you currently work with clients and what you want to add to
                                your practice.
                            </p>
                        </div>
                        <OpenModalButton
                            modal="book-a-demo"
                            className="relative shrink-0 self-start md:self-auto inline-flex items-center justify-center gap-2 bg-terracotta text-white px-6 py-3 rounded-md font-semibold text-sm font-Montserrat hover:bg-terracotta/90 transition-colors"
                        >
                            Talk to Zanga
                            <FiArrowRight size={16} aria-hidden="true"/>
                        </OpenModalButton>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
