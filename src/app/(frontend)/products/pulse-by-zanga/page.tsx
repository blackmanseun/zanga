import React from 'react'
import PulseHero from '@/components/pulse/PulseHero'
import PulseClientLogoBar from '@/components/pulse/PulseClientLogoBar'
import PulseCapabilities from '@/components/pulse/PulseCapabilities'
import PulseHowItWorks from '@/components/pulse/PulseHowItWorks'
import PulseCulturalContext from '@/components/pulse/PulseCulturalContext'
import PulseOutcomes from '@/components/pulse/PulseOutcomes'
import PulseAchieve from '@/components/pulse/PulseAchieve'
import PulseUseCases from '@/components/pulse/PulseUseCases'
import PulseOrganisationStages from '@/components/pulse/PulseOrganisationStages'
import PulseWhatYouReceive from '@/components/pulse/PulseWhatYouReceive'
import PulseDashboardQuestions from '@/components/pulse/PulseDashboardQuestions'
import PulseTestimonial from '@/components/pulse/PulseTestimonial'
import PulseFaq from '@/components/pulse/PulseFaq'
import PulseCta from '@/components/pulse/PulseCta'

export default function PulseByZangaPage() {
    return (
        <>
            <PulseHero/>
            <PulseClientLogoBar/>
            <PulseCapabilities/>
            <PulseHowItWorks/>
            <PulseCulturalContext/>
            <PulseOutcomes/>
            <PulseAchieve/>
            <PulseUseCases/>
            <PulseOrganisationStages/>
            <PulseWhatYouReceive/>
            <PulseDashboardQuestions/>
            <PulseTestimonial/>
            <PulseFaq/>
            <PulseCta/>
        </>
    )
}
