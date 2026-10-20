'use client'

import React from 'react'
import {FiClock} from 'react-icons/fi'
import {useModal} from '@/components/modal/ModalProvider'
import {ModalHeader} from '@/components/modal/ModalFormFields'

export default function PartnerLoginUnavailable() {
    const {closeModal} = useModal()

    return (
        <div className="p-6 md:p-10">
            <ModalHeader eyebrow="Business Partners" title={<>Partner login</>} onClose={closeModal}/>

            <div className="rounded-2xl bg-gray-50 border border-gray-200 p-8 text-center">
                <FiClock className="mx-auto text-olive mb-4" size={36} aria-hidden="true"/>
                <h3 className="text-lg font-bold text-gray-900 font-MonaSans mb-2">Currently unavailable</h3>
                <p className="text-sm text-gray-500 font-Montserrat leading-relaxed">
                    The Business Partner portal isn&apos;t available yet. Please check back soon.
                </p>
            </div>
        </div>
    )
}
