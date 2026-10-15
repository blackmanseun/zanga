import React from 'react'
import DiligenceHero from '@/components/diligence/DiligenceHero'
import DiligenceClientLogoBar from '@/components/diligence/DiligenceClientLogoBar'
import DiligenceCapabilities from '@/components/diligence/DiligenceCapabilities'
import DiligenceHowItWorks from '@/components/diligence/DiligenceHowItWorks'
import DiligenceCulturalContext from '@/components/diligence/DiligenceCulturalContext'
import DiligenceOutcomes from '@/components/diligence/DiligenceOutcomes'
import DiligenceAchieve from '@/components/diligence/DiligenceAchieve'
import DiligenceUseCases from '@/components/diligence/DiligenceUseCases'
import DiligenceOrganisationStages from '@/components/diligence/DiligenceOrganisationStages'
import DiligenceWhatYouReceive from '@/components/diligence/DiligenceWhatYouReceive'
import DiligenceDashboardQuestions from '@/components/diligence/DiligenceDashboardQuestions'
import DiligenceTestimonial from '@/components/diligence/DiligenceTestimonial'
import DiligenceFaq from '@/components/diligence/DiligenceFaq'
import DiligenceCta from '@/components/diligence/DiligenceCta'

export default function DiligenceByZangaPage() {
    return (
        <>
            <DiligenceHero/>
            <DiligenceClientLogoBar/>
            <DiligenceCapabilities/>
            <DiligenceHowItWorks/>
            <DiligenceCulturalContext/>
            <DiligenceOutcomes/>
            <DiligenceAchieve/>
            <DiligenceUseCases/>
            <DiligenceOrganisationStages/>
            <DiligenceWhatYouReceive/>
            <DiligenceDashboardQuestions/>
            <DiligenceTestimonial/>
            <DiligenceFaq/>
            <DiligenceCta/>
        </>
    )
}
