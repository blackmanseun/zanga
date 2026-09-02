import React from 'react'
import HomeHero from '@/components/home/HomeHero'
import HomeClientLogoBar from '@/components/home/HomeClientLogoBar'
import HomeWhatZangaDoes from '@/components/home/HomeWhatZangaDoes'
import HomeProducts from '@/components/home/HomeProducts'
import HomeHowItWorks from '@/components/home/HomeHowItWorks'
import HomeCulturalContext from '@/components/home/HomeCulturalContext'
import HomeSolutionCards from '@/components/home/HomeSolutionCards'
import HomeStakeholderIntelligence from '@/components/home/HomeStakeholderIntelligence'
import HomeResearchAndEvidence from '@/components/home/HomeResearchAndEvidence'
import HomeBuildWithZanga from '@/components/home/HomeBuildWithZanga'
import HomeInsightsReport from '@/components/home/HomeInsightsReport'
import HomeInsightsTeaser from '@/components/home/HomeInsightsTeaser'
import HomeReadyCta from '@/components/home/HomeReadyCta'

export default function HomePage() {
    return (
        <>
            <HomeHero/>
            <HomeClientLogoBar/>
            <HomeWhatZangaDoes/>
            <HomeProducts/>
            <HomeSolutionCards/>
            <HomeHowItWorks/>
            <HomeCulturalContext/>
            <HomeStakeholderIntelligence/>
            <HomeResearchAndEvidence/>
            <HomeBuildWithZanga/>
            <HomeInsightsReport/>
            <HomeInsightsTeaser/>
            <HomeReadyCta/>
        </>
    )
}
