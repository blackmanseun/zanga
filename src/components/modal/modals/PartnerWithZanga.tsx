'use client'

import React, {useEffect, useState} from 'react'
import {FiX, FiChevronDown, FiCheckCircle} from 'react-icons/fi'
import {useModal} from '@/components/modal/ModalProvider'

const services = [
    'Pulse by Zanga',
    'Fit by Zanga',
    'Voice by Zanga',
    'Diligence by Zanga',
    'Leadership Assessments',
    'Not sure yet',
]

const partnershipTypes = [
    'Practitioner Model',
    'Referral Model',
    'Reseller Model',
    'Franchise Model',
    'White-label Model',
    'Strategic / Institutional Model',
]

const inputClasses =
    'w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 font-Montserrat placeholder:text-gray-400 focus:outline-none focus:border-olive focus:ring-1 focus:ring-olive'

const labelClasses = 'block text-sm font-semibold text-gray-700 font-Montserrat mb-2'

function SelectField({id, name, label, options}: { id: string; name: string; label: string; options: string[] }) {
    return (
        <div>
            <label htmlFor={id} className={labelClasses}>{label}</label>
            <div className="relative">
                <select id={id} name={name} required defaultValue="" className={`${inputClasses} appearance-none pr-10`}>
                    <option value="" disabled>Select an option</option>
                    {options.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
                <FiChevronDown
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    aria-hidden="true"
                />
            </div>
        </div>
    )
}

export default function PartnerWithZanga() {
    const {isOpen, closeModal} = useModal()
    const [submitted, setSubmitted] = useState(false)

    // Show a fresh form the next time the modal opens.
    useEffect(() => {
        if (!isOpen) setSubmitted(false)
    }, [isOpen])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // TODO: send the form data to its destination (not wired up yet).
        setSubmitted(true)
    }

    return (
        <div className="p-6 md:p-10">
            <div className="flex items-start justify-between gap-6 mb-8">
                <div>
                    <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                        Partnerships
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-700 font-MonaSans leading-tight mt-2">
                        Partner with <strong>Zanga</strong>
                    </h2>
                </div>
                <button
                    type="button"
                    onClick={closeModal}
                    aria-label="Close"
                    className="shrink-0 w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-300 transition-colors"
                >
                    <FiX size={18} aria-hidden="true"/>
                </button>
            </div>

            {submitted ? (
                <div className="rounded-2xl bg-gray-50 border border-gray-200 p-8 text-center">
                    <FiCheckCircle className="mx-auto text-olive mb-4" size={36} aria-hidden="true"/>
                    <h3 className="text-lg font-bold text-gray-900 font-MonaSans mb-2">Thank you for your interest</h3>
                    <p className="text-sm text-gray-500 font-Montserrat leading-relaxed">
                        Our partnerships team will be in touch.
                    </p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label htmlFor="partner-first-name" className={labelClasses}>First name</label>
                            <input id="partner-first-name" name="firstName" type="text" required
                                   autoComplete="given-name" placeholder="First name" className={inputClasses}/>
                        </div>
                        <div>
                            <label htmlFor="partner-last-name" className={labelClasses}>Last name</label>
                            <input id="partner-last-name" name="lastName" type="text" required
                                   autoComplete="family-name" placeholder="Last name" className={inputClasses}/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="partner-email" className={labelClasses}>Email</label>
                        <input id="partner-email" name="email" type="email" required autoComplete="email"
                               placeholder="you@company.com" className={inputClasses}/>
                    </div>
                    <div>
                        <label htmlFor="partner-location" className={labelClasses}>Location</label>
                        <input id="partner-location" name="location" type="text" required placeholder="City, country"
                               className={inputClasses}/>
                    </div>
                    <SelectField id="partner-service" name="service" label="Zanga service interested in"
                                 options={services}/>
                    <SelectField id="partner-type" name="partnershipType" label="Partnership type"
                                 options={partnershipTypes}/>
                    <button
                        type="submit"
                        className="w-full md:w-auto bg-olive text-white px-8 py-3 rounded-md font-bold text-sm hover:bg-olive/90 transition-colors font-Montserrat"
                    >
                        Submit
                    </button>
                </form>
            )}
        </div>
    )
}
