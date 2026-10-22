'use client'

import React, {useEffect} from 'react'
import {useModal} from '@/components/modal/ModalProvider'
import {
    FormError,
    HoneypotField,
    ModalHeader,
    SubmitButton,
    SuccessMessage,
    TextField,
} from '@/components/modal/ModalFormFields'
import {submitReportRequest} from '@/forms/actions'
import {useFormSubmission} from '@/forms/useFormSubmission'

export default function DownloadReport() {
    const {isOpen, closeModal} = useModal()
    const {submitted, error, pending, submit, reset} = useFormSubmission(submitReportRequest)

    // Show a fresh form the next time the modal opens.
    useEffect(() => {
        if (!isOpen) reset()
    }, [isOpen])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        submit(event.currentTarget)
    }

    return (
        <div className="p-6 md:p-10">
            <ModalHeader eyebrow="Featured Research" title="The Africa Workforce Report" onClose={closeModal}/>

            {submitted ? (
                <SuccessMessage title="Thank you"
                                message="The Africa Workforce Report will be sent to your email."/>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <p className="text-sm text-gray-500 font-Montserrat leading-relaxed">
                        Enter your email address and we&apos;ll send the report to you.
                    </p>
                    <TextField id="report-email" name="email" label="Email" type="email" required
                               autoComplete="email" placeholder="you@company.com"/>

                    <HoneypotField/>
                    <FormError message={error}/>
                    <SubmitButton pending={pending}>Send Me the Report</SubmitButton>
                </form>
            )}
        </div>
    )
}
