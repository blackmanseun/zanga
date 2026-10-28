import React from 'react'
import CoachesConsultantsHero from '@/components/coaches-consultants/CoachesConsultantsHero'
import CoachesConsultantsChallenge from '@/components/coaches-consultants/CoachesConsultantsChallenge'
import CoachesConsultantsCertification from '@/components/coaches-consultants/CoachesConsultantsCertification'
import CoachesConsultantsSolutions from '@/components/coaches-consultants/CoachesConsultantsSolutions'
import CoachesConsultantsJourney from '@/components/coaches-consultants/CoachesConsultantsJourney'
import CoachesConsultantsBuiltForPractice from '@/components/coaches-consultants/CoachesConsultantsBuiltForPractice'
import CoachesConsultantsTestimonials from '@/components/coaches-consultants/CoachesConsultantsTestimonials'
import CoachesConsultantsPartner from '@/components/coaches-consultants/CoachesConsultantsPartner'
import CoachesConsultantsPartnershipSteps from '@/components/coaches-consultants/CoachesConsultantsPartnershipSteps'
import CoachesConsultantsWhyZanga from '@/components/coaches-consultants/CoachesConsultantsWhyZanga'
import CoachesConsultantsWhereToStart from '@/components/coaches-consultants/CoachesConsultantsWhereToStart'
import CoachesConsultantsFaq from '@/components/coaches-consultants/CoachesConsultantsFaq'
import CoachesConsultantsCta from '@/components/coaches-consultants/CoachesConsultantsCta'

export default function CoachesConsultantsPage() {
    return (
        <>
            <CoachesConsultantsHero/>
            <CoachesConsultantsChallenge/>
            <CoachesConsultantsCertification/>
            <CoachesConsultantsJourney/>
            <CoachesConsultantsSolutions/>
            <CoachesConsultantsBuiltForPractice/>
            <CoachesConsultantsTestimonials/>
            <CoachesConsultantsPartner/>
            <CoachesConsultantsPartnershipSteps/>
            <CoachesConsultantsWhyZanga/>
            <CoachesConsultantsWhereToStart/>
            <CoachesConsultantsFaq/>
            <CoachesConsultantsCta/>
        </>
    )
}
