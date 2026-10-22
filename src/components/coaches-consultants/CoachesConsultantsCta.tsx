import React from 'react'
import OpenModalButton from '@/components/modal/OpenModalButton'
import Reveal from '@/components/ui/Reveal'
import OpenNavMenuButton from '@/components/ui/OpenNavMenuButton'

export default function CoachesConsultantsCta() {
    return (
        <section className="md:py-20 py-14 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <div className="md:rounded-3xl rounded-xl bg-[#282A30] py-10 px-4 md:p-14">
                        <div className="grid xl:grid-cols-5 md:grid-cols-2 gap-10 items-center">
                            <div className="col-span-2 xl:col-span-3">
                                <h2 className="text-3xl md:text-[2.5rem] font-bold font-MonaSans leading-[1.1] text-white mb-4">
                                    Bring more evidence into your practice.
                                </h2>
                                <p className="text-white/60 font-Montserrat leading-relaxed max-w-lg text-md">
                                    Use culturally intelligent assessment, structured insight and Zanga&apos;s
                                    practitioner ecosystem to deepen client work and expand what you can offer.
                                </p>
                            </div>
                            <div className="col-span-2 xl:flex flex-col items-end">
                                <p className="text-sm text-white/50 font-Montserrat mb-3">Choose how you&apos;d like to start</p>
                                <div className="flex flex-col sm:flex-row gap-3 mb-3">
                                    <OpenModalButton
                                        modal="book-a-demo"
                                        className="bg-olive text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-olive/90 transition-colors font-Montserrat text-center"
                                    >
                                        Book a Demo
                                    </OpenModalButton>
                                    <OpenNavMenuButton
                                        menu="Solutions"
                                        className="border border-white text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-white hover:text-primary transition-colors font-Montserrat text-center"
                                    >
                                        Explore Zanga Solutions
                                    </OpenNavMenuButton>
                                </div>
                                <p className="text-white/40 font-Montserrat text-sm">
                                    Prefer to talk it through first?{' '}
                                    <OpenModalButton modal="book-a-demo" className="text-white hover:text-olive hover:no-underline transition-colors">
                                        Contact our team
                                    </OpenModalButton>
                                </p>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
