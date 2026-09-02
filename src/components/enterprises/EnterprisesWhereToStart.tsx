import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {FiArrowRight} from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'

export default function EnterprisesWhereToStart() {
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
                                Where Should You Start?
                            </h2>
                            <p className="md:max-w-xl mt-4 text-gray-500 text-[16px] font-Montserrat leading-relaxed lg:pb-1">
                                Every organisation&apos;s people priorities are different. Choose the path
                                that matches what you are trying to solve right now.
                            </p>
                        </div>
                    </div>
                </Reveal>

                <div className="mt-10 md:mt-14 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
                    <Reveal delayMs={90}>
                        <Link
                            href="#"
                            className="group relative flex h-[420px] sm:h-full overflow-hidden rounded-2xl"
                        >
                            <Image
                                src="/images/7.jpg"
                                alt="A senior leader guiding members of her team"
                                fill
                                sizes="(min-width: 1024px) 55vw, 100vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"/>
                            <div className="absolute inset-x-0 bottom-0 md:p-8 p-5">
                                <p className="font-MonaSans text-2xl font-bold text-white">
                                    Building a stronger leadership pipeline?
                                </p>
                                <p className="mt-2 max-w-md text-sm font-Montserrat leading-relaxed text-white/75">
                                    Start with the Leadership Competency Assessment to understand current
                                    leadership capability and development priorities across your
                                    organisation.
                                </p>
                                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold font-Montserrat text-white">
                                    Explore Leadership Assessments
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
                        <Reveal delayMs={150}>
                            <Link
                                href="#"
                                className="group relative flex xl:min-h-[200px] min-h-[300px] h-full overflow-hidden rounded-2xl"
                            >
                                <Image
                                    src="/images/8.jpg"
                                    alt="Colleagues collaborating together in an open office"
                                    fill
                                    sizes="(min-width: 1024px) 25vw, 100vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-slate-900/55"/>
                                <div className="absolute inset-x-0 bottom-0 md:p-7 p-5">
                                    <p className="font-MonaSans text-xl font-bold text-white">
                                        Trying to understand the wider workforce?
                                    </p>
                                    <p className="mt-2 text-sm font-Montserrat leading-relaxed text-white/80">
                                        Start with Pulse by Zanga to understand engagement, culture,
                                        retention and employee sentiment.
                                    </p>
                                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold font-Montserrat text-white">
                                        Explore Pulse by Zanga
                                        <FiArrowRight
                                            size={16}
                                            aria-hidden="true"
                                            className="transition-transform duration-300 group-hover:translate-x-1"
                                        />
                                    </span>
                                </div>
                            </Link>
                        </Reveal>

                        <Reveal delayMs={210}>
                            <div className="relative flex-1 overflow-hidden rounded-2xl bg-terracotta/10 md:px-7 px-5 py-7">
                                <div
                                    className="pointer-events-none absolute -right-16 -bottom-20"
                                    aria-hidden="true"
                                >
                                    <div className="w-[16rem] h-[16rem] rounded-[50%] border-2 border-terracotta/20"/>
                                    <div className="absolute w-[9rem] h-[9rem] right-10 bottom-6 rounded-[50%] border-2 border-terracotta/20"/>
                                </div>
                                <p className="relative font-MonaSans text-xl font-bold text-gray-700">
                                    Not sure what your organisation needs?
                                </p>
                                <p className="relative mt-2 text-sm font-Montserrat leading-relaxed text-gray-500">
                                    Tell us what you are trying to solve, and we will recommend the most
                                    appropriate <strong>Zanga</strong> pathway.
                                </p>
                                <Link
                                    href="#"
                                    className="relative mt-5 inline-flex items-center justify-center gap-2 bg-terracotta text-white px-6 py-3 rounded-md font-semibold text-sm font-Montserrat hover:bg-terracotta/90 transition-colors"
                                >
                                    Book a free assessment
                                    <FiArrowRight size={16} aria-hidden="true"/>
                                </Link>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    )
}
