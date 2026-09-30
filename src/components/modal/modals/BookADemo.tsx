'use client'

import React, {useEffect, useState} from 'react'
import {useModal} from '@/components/modal/ModalProvider'
import {
    FormSection,
    ModalHeader,
    RequiredNote,
    SelectField,
    SubmitButton,
    SuccessMessage,
    TextAreaField,
    TextField,
} from '@/components/modal/ModalFormFields'

const explorationOptions = [
    'Hire Better People',
    'Develop Stronger Leaders',
    'Build High-Performing Teams',
    'Improve Engagement & Retention',
    'Strengthen Succession Planning',
    'Listen to Stakeholders',
    'Make Better Investment & Lending Decisions',
    "I'm not sure yet",
]

const organisationSizes = [
    '1–49 employees',
    '50–199 employees',
    '200–499 employees',
    '500–999 employees',
    '1,000+ employees',
]

export default function BookADemo() {
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
            <ModalHeader eyebrow="Get started" title="Book a Demo" onClose={closeModal}/>

            {submitted ? (
                <SuccessMessage title="Thank you for your request" message="Our team will be in touch to arrange your demo."/>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                    <FormSection title="Contact details">
                        <TextField id="demo-full-name" name="fullName" label="Full Name" required
                                   autoComplete="name" placeholder="Full name"/>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <TextField id="demo-email" name="email" label="Work Email" type="email" required
                                       autoComplete="email" placeholder="you@company.com"/>
                            <TextField id="demo-phone" name="phone" label="Phone Number" type="tel"
                                       autoComplete="tel" placeholder="Phone number"/>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <TextField id="demo-job-title" name="jobTitle" label="Job Title / Role" required
                                       autoComplete="organization-title" placeholder="Job title"/>
                            <TextField id="demo-location" name="location" label="Country / Location" required
                                       autoComplete="country-name" placeholder="Country"/>
                        </div>
                    </FormSection>

                    <FormSection title="Tell us what you're looking for">
                        <SelectField id="demo-explore" name="explore" label="What would you like to explore?"
                                     options={explorationOptions} required/>
                        <SelectField id="demo-org-size" name="organisationSize" label="Organisation Size"
                                     options={organisationSizes} required/>
                        <TextAreaField id="demo-message" name="message"
                                       label="Tell us briefly what you're looking to solve"
                                       placeholder="A short description of what you're looking to solve"/>
                    </FormSection>

                    <RequiredNote/>
                    <SubmitButton/>
                </form>
            )}
        </div>
    )
}
