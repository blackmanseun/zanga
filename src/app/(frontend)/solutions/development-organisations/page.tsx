import React from 'react'
import DevelopmentOrganisationsHero from '@/components/development-organisations/DevelopmentOrganisationsHero'
import DevelopmentOrganisationsChallenge from '@/components/development-organisations/DevelopmentOrganisationsChallenge'
import DevelopmentOrganisationsAchieveGrid from '@/components/development-organisations/DevelopmentOrganisationsAchieveGrid'
import DevelopmentOrganisationsSolutions from '@/components/development-organisations/DevelopmentOrganisationsSolutions'
import DevelopmentOrganisationsHowUseZanga from '@/components/development-organisations/DevelopmentOrganisationsHowUseZanga'
import DevelopmentOrganisationsBuiltForDispersedOrganisations from '@/components/development-organisations/DevelopmentOrganisationsBuiltForDispersedOrganisations'
import DevelopmentOrganisationsWhyZanga from '@/components/development-organisations/DevelopmentOrganisationsWhyZanga'
import DevelopmentOrganisationsWhereToStart from '@/components/development-organisations/DevelopmentOrganisationsWhereToStart'
import DevelopmentOrganisationsFaq from '@/components/development-organisations/DevelopmentOrganisationsFaq'
import DevelopmentOrganisationsCta from '@/components/development-organisations/DevelopmentOrganisationsCta'

export default function DevelopmentOrganisationsPage() {
    return (
        <>
            <DevelopmentOrganisationsHero/>
            <DevelopmentOrganisationsChallenge/>
            <DevelopmentOrganisationsAchieveGrid/>
            <DevelopmentOrganisationsSolutions/>
            <DevelopmentOrganisationsHowUseZanga/>
            <DevelopmentOrganisationsBuiltForDispersedOrganisations/>
            <DevelopmentOrganisationsWhyZanga/>
            <DevelopmentOrganisationsWhereToStart/>
            <DevelopmentOrganisationsFaq/>
            <DevelopmentOrganisationsCta/>
        </>
    )
}
