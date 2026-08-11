import React from 'react'
import Link from 'next/link'

export default function ReadyCta() {
    return (
        <section className="md:py-20 py-14 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div
                    className="md:rounded-3xl rounded-xl bg-[#282A30] py-10 px-4 md:p-14">
                    <div className="grid md:grid-cols-5 gap-10 items-center">
                        <div className="col-span-3">
                            <h2 className="text-3xl md:text-[2.5rem] font-bold font-MonaSans leading-tight text-white mb-4">
                                Ready to understand what <br className="hidden md:block"/>your people and stakeholders <br className="hidden md:block"/>are telling you?
                            </h2>
                            <p className="text-white/60 font-Montserrat leading-relaxed max-w-lg text-md">
                                Book a demonstration to explore the right Zanga solution for your organisation, or
                                experience our approach by taking an assessment.
                            </p>
                        </div>

                        <div className="col-span-2 md:flex flex-col items-end">
                            <p className="text-sm text-white/50 font-Montserrat mb-3">Choose how you&apos;d like to start</p>
                            <div className="flex flex-col sm:flex-row gap-3 mb-3">
                                <Link
                                    href="#"
                                    className="bg-olive text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-olive/90 transition-colors font-Montserrat text-center"
                                >
                                    Book a Demo
                                </Link>
                                <Link
                                    href="#"
                                    className="border border-white text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-white hover:text-primary transition-colors font-Montserrat text-center"
                                >
                                    Take an Assessment
                                </Link>
                            </div>
                            <p className="text-white/40 font-Montserrat text-sm">
                                Prefer to talk it through first?{' '}
                                <Link href="#" className="text-white hover:text-olive hover:no-underline transition-colors">
                                    Contact our team
                                </Link>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
