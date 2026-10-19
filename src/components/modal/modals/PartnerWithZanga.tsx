'use client'

import React, {useEffect, useState} from 'react'
import {useModal} from '@/components/modal/ModalProvider'
import {
    CheckboxGroup,
    FormError,
    FormSection,
    HoneypotField,
    ModalHeader,
    RequiredNote,
    SelectField,
    SubmitButton,
    SuccessMessage,
    TextField,
} from '@/components/modal/ModalFormFields'
import {submitPartnerApplication} from '@/forms/actions'
import {partnerServices, partnershipTypes} from '@/forms/options'
import {useFormSubmission} from '@/forms/useFormSubmission'

export default function PartnerWithZanga() {
    const {isOpen, closeModal} = useModal()
    const {submitted, error, pending, submit, reset} = useFormSubmission(submitPartnerApplication)
    const [partnershipError, setPartnershipError] = useState('')

    // Show a fresh form the next time the modal opens.
    useEffect(() => {
        if (!isOpen) {
            reset()
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
        submit(event.currentTarget)
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
                                     options={partnerServices} required/>
                    </FormSection>

                    <FormSection title="About your partnership">
                        <CheckboxGroup name="partnershipTypes"
                                       label="What type of partnership are you interested in? (select all that apply)"
                                       options={partnershipTypes} required error={partnershipError}/>
                    </FormSection>

                    <HoneypotField/>
                    <RequiredNote/>
                    <FormError message={error}/>
                    <SubmitButton pending={pending}/>
                </form>
            )}
        </div>
    )
}
