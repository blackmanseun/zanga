'use client'

import React from 'react'
import {useModal, type ModalKey} from '@/components/modal/ModalProvider'

// Lets server components open a modal without becoming client components themselves.
export default function OpenModalButton({modal, className, style, 'aria-label': ariaLabel, children}: {
    modal: ModalKey
    className?: string
    style?: React.CSSProperties
    'aria-label'?: string
    children: React.ReactNode
}) {
    const {openModal} = useModal()

    return (
        <button type="button" onClick={() => openModal(modal)} className={className} style={style}
                aria-label={ariaLabel}>
            {children}
        </button>
    )
}
