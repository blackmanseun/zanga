'use client'

import React, {createContext, useCallback, useContext, useEffect, useState} from 'react'
import Modal from '@/components/modal/Modal'

export type ModalKey = 'partner-with-zanga'

type ModalContextValue = {
    modal: ModalKey | null
    isOpen: boolean
    openModal: (modal: ModalKey) => void
    closeModal: () => void
}

const ModalContext = createContext<ModalContextValue | null>(null)

export function useModal() {
    const context = useContext(ModalContext)
    if (!context) throw new Error('useModal must be used inside ModalProvider')
    return context
}

export default function ModalProvider({children}: { children: React.ReactNode }) {
    const [modal, setModal] = useState<ModalKey | null>(null)
    const [isOpen, setIsOpen] = useState(false)

    const openModal = useCallback((key: ModalKey) => {
        setModal(key)
        setIsOpen(true)
    }, [])

    const closeModal = useCallback(() => setIsOpen(false), [])

    // Lock page scroll behind the modal and close on Escape.
    useEffect(() => {
        if (!isOpen) return
        const root = document.documentElement
        const previousOverflow = root.style.overflow
        root.style.overflow = 'hidden'

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') closeModal()
        }
        window.addEventListener('keydown', onKeyDown)

        return () => {
            root.style.overflow = previousOverflow
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, closeModal])

    return (
        <ModalContext.Provider value={{modal, isOpen, openModal, closeModal}}>
            {children}
            <div
                onClick={closeModal}
                aria-hidden="true"
                className={`fixed inset-0 z-[100] bg-black/40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            />
            <Modal/>
        </ModalContext.Provider>
    )
}
