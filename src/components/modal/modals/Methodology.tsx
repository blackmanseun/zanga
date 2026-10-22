'use client'

import React from 'react'
import {useModal} from '@/components/modal/ModalProvider'
import {ModalHeader} from '@/components/modal/ModalFormFields'
import BoldZanga from '@/components/ui/BoldZanga'
import * as leadership from '@/components/develop-stronger-leaders/DevelopStrongerLeadersMethodology'
import * as investment from '@/components/make-better-investment-lending-decisions/MakeBetterInvestmentLendingDecisionsMethodology'
import * as stakeholders from '@/components/listen-to-stakeholders/ListenToStakeholdersMethodology'
import * as hiring from '@/components/solutions/SolutionsMethodology'
import * as engagement from '@/components/improve-engagement-retention/ImproveEngagementRetentionMethodology'

// Each version reuses the copy from the matching Solutions page's Methodology section.
const versions = {leadership, investment, stakeholders, hiring, engagement}

export type MethodologyVersion = keyof typeof versions

export default function Methodology({version}: { version: MethodologyVersion }) {
    const {closeModal, openModal} = useModal()
    const {heading, paragraphs, steps} = versions[version]

    return (
        <div className="p-6 md:p-10">
            <ModalHeader
                eyebrow="Methodology"
                title={<>{heading.lead}<span className="text-olive">{heading.highlight}</span></>}
                onClose={closeModal}
            />

            <div className="space-y-4 mb-8">
                {paragraphs.map((p) => {
                    const isContextLine = p.startsWith('What makes')
                    return (
                        <p
                            key={p}
                            className={`font-Montserrat leading-relaxed ${isContextLine ? 'font-semibold text-gray-700' : 'text-gray-500'}`}
                        >
                            {isContextLine ? (
                                <><BoldZanga text={p.replace(/context\.$/, '')}/><em className="italic">context</em>.</>
                            ) : (
                                <BoldZanga text={p}/>
                            )}
                        </p>
                    )
                })}
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 sm:p-8 bg-gray-50 space-y-6 mb-8">
                {steps.map((s) => (
                    <div key={s.title} className="flex items-start gap-5">
                        <span className="text-4xl font-bold text-olive/30 font-MonaSans leading-none shrink-0 w-12">
                            {s.number}
                        </span>
                        <div>
                            <h3 className="text-base font-bold text-gray-900 font-MonaSans mb-1">{s.title}</h3>
                            <p className="text-gray-500 text-sm font-Montserrat leading-relaxed">{s.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button
                type="button"
                onClick={() => openModal('book-a-demo')}
                className="w-full md:w-auto bg-olive text-white px-8 py-3 rounded-md font-bold text-sm hover:bg-olive/90 transition-colors font-Montserrat"
            >
                Request a Demo
            </button>
        </div>
    )
}
