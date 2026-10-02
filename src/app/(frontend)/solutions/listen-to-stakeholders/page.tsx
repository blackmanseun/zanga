import React from 'react'
import ListenToStakeholdersHero from '@/components/listen-to-stakeholders/ListenToStakeholdersHero'
import ListenToStakeholdersFeaturesBenefits from '@/components/listen-to-stakeholders/ListenToStakeholdersFeaturesBenefits'
import ListenToStakeholdersMethodology from '@/components/listen-to-stakeholders/ListenToStakeholdersMethodology'
import ListenToStakeholdersOutcomes from '@/components/listen-to-stakeholders/ListenToStakeholdersOutcomes'
import ListenToStakeholdersUseCases from '@/components/listen-to-stakeholders/ListenToStakeholdersUseCases'
import ListenToStakeholdersTestimonials from '@/components/listen-to-stakeholders/ListenToStakeholdersTestimonials'
import ListenToStakeholdersFaq from '@/components/listen-to-stakeholders/ListenToStakeholdersFaq'
import ListenToStakeholdersCta from '@/components/listen-to-stakeholders/ListenToStakeholdersCta'

export default function ListenToStakeholdersPage() {
    return (
        <>
            <ListenToStakeholdersHero/>
            <ListenToStakeholdersFeaturesBenefits/>
            <ListenToStakeholdersMethodology/>
            <ListenToStakeholdersOutcomes/>
            <ListenToStakeholdersUseCases/>
            <ListenToStakeholdersTestimonials/>
            <ListenToStakeholdersFaq/>
            <ListenToStakeholdersCta/>
        </>
    )
}
