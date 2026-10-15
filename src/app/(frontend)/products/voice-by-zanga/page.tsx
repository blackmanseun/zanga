import React from 'react'
import VoiceHero from '@/components/voice/VoiceHero'
import VoiceClientLogoBar from '@/components/voice/VoiceClientLogoBar'
import VoiceCapabilities from '@/components/voice/VoiceCapabilities'
import VoiceHowItWorks from '@/components/voice/VoiceHowItWorks'
import VoiceCulturalContext from '@/components/voice/VoiceCulturalContext'
import VoiceOutcomes from '@/components/voice/VoiceOutcomes'
import VoiceAchieve from '@/components/voice/VoiceAchieve'
import VoiceUseCases from '@/components/voice/VoiceUseCases'
import VoiceOrganisationStages from '@/components/voice/VoiceOrganisationStages'
import VoiceWhatYouReceive from '@/components/voice/VoiceWhatYouReceive'
import VoiceDashboardQuestions from '@/components/voice/VoiceDashboardQuestions'
import VoiceTestimonial from '@/components/voice/VoiceTestimonial'
import VoiceFaq from '@/components/voice/VoiceFaq'
import VoiceCta from '@/components/voice/VoiceCta'

export default function VoiceByZangaPage() {
    return (
        <>
            <VoiceHero/>
            <VoiceClientLogoBar/>
            <VoiceCapabilities/>
            <VoiceHowItWorks/>
            <VoiceCulturalContext/>
            <VoiceOutcomes/>
            <VoiceAchieve/>
            <VoiceUseCases/>
            <VoiceOrganisationStages/>
            <VoiceWhatYouReceive/>
            <VoiceDashboardQuestions/>
            <VoiceTestimonial/>
            <VoiceFaq/>
            <VoiceCta/>
        </>
    )
}
