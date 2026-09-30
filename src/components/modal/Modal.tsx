'use client'

import React from 'react'
import {useModal} from '@/components/modal/ModalProvider'
import PartnerWithZanga from '@/components/modal/modals/PartnerWithZanga'
import BookADemo from '@/components/modal/modals/BookADemo'

export default function Modal() {
    const {modal, isOpen} = useModal()

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-hidden={!isOpen}
            inert={!isOpen}
            className={`fixed z-[101] bottom-0 right-0 w-full max-h-[90vh] md:max-h-none md:top-0 md:w-[750px] bg-white rounded-t-2xl md:rounded-none md:rounded-l-3xl shadow-xl overflow-y-auto transition-transform duration-300 ease-in-out ${
                isOpen ? 'translate-y-0 md:translate-x-0' : 'translate-y-full md:translate-y-0 md:translate-x-full'
            }`}
        >
            {modal === 'partner-with-zanga' && <PartnerWithZanga/>}
            {modal === 'book-a-demo' && <BookADemo/>}
        </div>
    )
}
