'use client'

import React, {useEffect, useState} from 'react'
import {useModal} from '@/components/modal/ModalProvider'
import {
    CheckboxGroup,
    FormSection,
    ModalHeader,
    RequiredNote,
    SelectField,
    SubmitButton,
    SuccessMessage,
    TextField,
} from '@/components/modal/ModalFormFields'

const services = [
    'Leadership Assessments',
    'Psychometric Assessments',
    'Workforce Analytics',
    'Employee Engagement Surveys',
    'Leadership Development, Training & Coaching',
    'Other / Not sure',
]

const partnershipTypes = [
    'Coach / Practitioner',
    'Referral Partner',
    'Reseller / Franchise',
    'White Label',
    'Technology Partner',
    'Research Partner',
    'Not sure yet',
]

export default function PartnerWithZanga() {
    const {isOpen, closeModal} = useModal()
    const [submitted, setSubmitted] = useState(false)
    const [partnershipError, setPartnershipError] = useState('')

    // Show a fresh form the next time the modal opens.
    useEffect(() => {
        if (!isOpen) {
            setSubmitted(false)
            setPartnershipError('')
        }
    }, [isOpen])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // Checkbox groups can't use `required`, so check at least one is ticked.
        if (new FormData(event.currentTarget).getAll('partnershipTypes').length === 0) {
            setPartnershipError('Please select at least one partnership type.')
            return
        }
        setPartnershipError('')
        // TODO: send the form data to its destination (not wired up yet).
        setSubmitted(true)
    }

    return (
        <div className="p-6 md:p-10">
            <ModalHeader eyebrow="Partnerships" title={<>Partner with <strong>Zanga</strong></>} onClose={closeModal}/>

            {submitted ? (
                <SuccessMessage title="Thank you for your interest" message="Our partnerships team will be in touch."/>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                    <FormSection title="Contact details">
                        <TextField id="partner-full-name" name="fullName" label="Full Name" required
                                   autoComplete="name" placeholder="Full name"/>
                        <TextField id="partner-email" name="email" label="Work Email" type="email" required
                                   autoComplete="email" placeholder="you@company.com"/>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <TextField id="partner-job-title" name="jobTitle" label="Job Title / Role" required
                                       autoComplete="organization-title" placeholder="Job title"/>
                            <TextField id="partner-location" name="location" label="Country / Location" required
                                       autoComplete="country-name" placeholder="Country"/>
                        </div>
                        <SelectField id="partner-service" name="service" label="Type of Zanga service interested in?"
                                     options={services} required/>
                    </FormSection>

                    <FormSection title="About your partnership">
                        <CheckboxGroup name="partnershipTypes"
                                       label="What type of partnership are you interested in? (select all that apply)"
                                       options={partnershipTypes} required error={partnershipError}/>
                    </FormSection>

                    <RequiredNote/>
                    <SubmitButton/>
                </form>
            )}
        </div>
    )
}
