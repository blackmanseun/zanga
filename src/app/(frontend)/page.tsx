import React from 'react'
import Hero from '@/components/home/Hero'
import ClientLogoBar from '@/components/home/ClientLogoBar'
import WhatZangaDoes from '@/components/home/WhatZangaDoes'
import Products from '@/components/home/Products'
import HowItWorks from '@/components/home/HowItWorks'
import CulturalContext from '@/components/home/CulturalContext'
import SolutionCards from '@/components/home/SolutionCards'
import StakeholderIntelligence from '@/components/home/StakeholderIntelligence'
import ResearchAndEvidence from '@/components/home/ResearchAndEvidence'
import BuildWithZanga from '@/components/home/BuildWithZanga'
import InsightsReport from '@/components/home/InsightsReport'
import InsightsTeaser from '@/components/home/InsightsTeaser'
import ReadyCta from '@/components/home/ReadyCta'

export default function HomePage() {
    return (
        <>
            <Hero/>
            <ClientLogoBar/>
            <WhatZangaDoes/>
            <Products/>
            <SolutionCards/>
            <HowItWorks/>
            <CulturalContext/>
            <StakeholderIntelligence/>
            <ResearchAndEvidence/>
            <BuildWithZanga/>
            <InsightsReport/>
            <InsightsTeaser/>
            <ReadyCta/>
        </>
    )
}
