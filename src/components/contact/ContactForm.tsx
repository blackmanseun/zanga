'use client'

import React from 'react'
import {FormError, HoneypotField, SuccessMessage} from '@/components/modal/ModalFormFields'
import {submitContactEnquiry} from '@/forms/actions'
import {contactReasons} from '@/forms/options'
import {useFormSubmission} from '@/forms/useFormSubmission'

const labelClasses = 'block text-sm font-semibold text-gray-700 mb-1.5 font-Montserrat'
const inputClasses =
    'w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-highlight font-Montserrat'

function Required() {
    return <span className="text-terracotta"> *</span>
}

export default function ContactForm() {
    const {submitted, error, pending, submit} = useFormSubmission(submitContactEnquiry)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        submit(event.currentTarget)
    }

    if (submitted) {
        return <SuccessMessage title="Thank you for your message" message="We respond to all enquiries within 1 business day."/>
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="contact-first-name" className={labelClasses}>First Name<Required/></label>
                    <input id="contact-first-name" name="firstName" type="text" required autoComplete="given-name"
                           placeholder="Amara" className={inputClasses}/>
                </div>
                <div>
                    <label htmlFor="contact-last-name" className={labelClasses}>Last Name</label>
                    <input id="contact-last-name" name="lastName" type="text" autoComplete="family-name"
                           placeholder="Osei" className={inputClasses}/>
                </div>
            </div>
            <div>
                <label htmlFor="contact-email" className={labelClasses}>Work Email<Required/></label>
                <input id="contact-email" name="email" type="email" required autoComplete="email"
                       placeholder="amara@yourcompany.com" className={inputClasses}/>
            </div>
            <div>
                <label htmlFor="contact-organisation" className={labelClasses}>Organisation</label>
                <input id="contact-organisation" name="organisation" type="text" autoComplete="organization"
                       placeholder="Your Company Ltd" className={inputClasses}/>
            </div>
            <div>
                <label htmlFor="contact-reason" className={labelClasses}>Reason for Contact</label>
                <select id="contact-reason" name="reason" defaultValue=""
                        className={`${inputClasses} text-gray-500`}>
                    <option value="">Select a reason</option>
                    {contactReasons.map((reason) => (
                        <option key={reason} value={reason}>{reason}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="contact-message" className={labelClasses}>Message<Required/></label>
                <textarea id="contact-message" name="message" rows={5} required
                          placeholder="Tell us about your organisation's coaching needs or questions..."
                          className={`${inputClasses} resize-none`}/>
            </div>
            <HoneypotField/>
            <FormError message={error}/>
            <button
                type="submit"
                disabled={pending}
                className="w-full bg-highlight text-white py-4 rounded-md font-bold hover:bg-highlight/85 transition-colors font-Montserrat disabled:opacity-60 disabled:cursor-wait"
            >
                {pending ? 'Sending…' : 'Send Message'}
            </button>
        </form>
    )
}
