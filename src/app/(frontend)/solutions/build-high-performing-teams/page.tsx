import React from 'react'
import BuildHighPerformingTeamsHero from '@/components/build-high-performing-teams/BuildHighPerformingTeamsHero'
import BuildHighPerformingTeamsFeaturesBenefits from '@/components/build-high-performing-teams/BuildHighPerformingTeamsFeaturesBenefits'
import BuildHighPerformingTeamsMethodology from '@/components/build-high-performing-teams/BuildHighPerformingTeamsMethodology'
import BuildHighPerformingTeamsOutcomes from '@/components/build-high-performing-teams/BuildHighPerformingTeamsOutcomes'
import BuildHighPerformingTeamsUseCases from '@/components/build-high-performing-teams/BuildHighPerformingTeamsUseCases'
import HomeTestimonials from '@/components/home/HomeTestimonials'
import BuildHighPerformingTeamsFaq from '@/components/build-high-performing-teams/BuildHighPerformingTeamsFaq'
import BuildHighPerformingTeamsCta from '@/components/build-high-performing-teams/BuildHighPerformingTeamsCta'

export default function BuildHighPerformingTeamsPage() {
    return (
        <>
            <BuildHighPerformingTeamsHero/>
            <BuildHighPerformingTeamsFeaturesBenefits/>
            <BuildHighPerformingTeamsMethodology/>
            <BuildHighPerformingTeamsOutcomes/>
            <BuildHighPerformingTeamsUseCases/>
            <HomeTestimonials/>
            <BuildHighPerformingTeamsFaq/>
            <BuildHighPerformingTeamsCta/>
        </>
    )
}
