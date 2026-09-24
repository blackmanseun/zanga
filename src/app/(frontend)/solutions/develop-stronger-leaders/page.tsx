import React from 'react'
import DevelopStrongerLeadersHero from '@/components/develop-stronger-leaders/DevelopStrongerLeadersHero'
import DevelopStrongerLeadersFeaturesBenefits from '@/components/develop-stronger-leaders/DevelopStrongerLeadersFeaturesBenefits'
import DevelopStrongerLeadersMethodology from '@/components/develop-stronger-leaders/DevelopStrongerLeadersMethodology'
import DevelopStrongerLeadersOutcomes from '@/components/develop-stronger-leaders/DevelopStrongerLeadersOutcomes'
import DevelopStrongerLeadersUseCases from '@/components/develop-stronger-leaders/DevelopStrongerLeadersUseCases'
import HomeTestimonials from '@/components/home/HomeTestimonials'
import DevelopStrongerLeadersFaq from '@/components/develop-stronger-leaders/DevelopStrongerLeadersFaq'
import DevelopStrongerLeadersCta from '@/components/develop-stronger-leaders/DevelopStrongerLeadersCta'

export default function DevelopStrongerLeadersPage() {
    return (
        <>
            <DevelopStrongerLeadersHero/>
            <DevelopStrongerLeadersFeaturesBenefits/>
            <DevelopStrongerLeadersMethodology/>
            <DevelopStrongerLeadersOutcomes/>
            <DevelopStrongerLeadersUseCases/>
            <HomeTestimonials/>
            <DevelopStrongerLeadersFaq/>
            <DevelopStrongerLeadersCta/>
        </>
    )
}
