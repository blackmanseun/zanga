import React from 'react'
import FitHero from '@/components/fit/FitHero'
import FitClientLogoBar from '@/components/fit/FitClientLogoBar'
import FitCapabilities from '@/components/fit/FitCapabilities'
import FitHowItWorks from '@/components/fit/FitHowItWorks'
import FitCulturalContext from '@/components/fit/FitCulturalContext'
import FitOutcomes from '@/components/fit/FitOutcomes'
import FitAchieve from '@/components/fit/FitAchieve'
import FitUseCases from '@/components/fit/FitUseCases'
import FitOrganisationStages from '@/components/fit/FitOrganisationStages'
import FitWhatYouReceive from '@/components/fit/FitWhatYouReceive'
import FitDashboardQuestions from '@/components/fit/FitDashboardQuestions'
import FitTestimonial from '@/components/fit/FitTestimonial'
import FitFaq from '@/components/fit/FitFaq'
import FitCta from '@/components/fit/FitCta'

export default function FitByZangaPage() {
    return (
        <>
            <FitHero/>
            <FitClientLogoBar/>
            <FitCapabilities/>
            <FitHowItWorks/>
            <FitCulturalContext/>
            <FitOutcomes/>
            <FitAchieve/>
            <FitUseCases/>
            <FitOrganisationStages/>
            <FitWhatYouReceive/>
            <FitDashboardQuestions/>
            <FitTestimonial/>
            <FitFaq/>
            <FitCta/>
        </>
    )
}
