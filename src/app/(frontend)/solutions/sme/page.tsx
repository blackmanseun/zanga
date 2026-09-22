import React from 'react'
import SmesHero from '@/components/smes/SmesHero'
import SmesChallenge from '@/components/smes/SmesChallenge'
import SmesAchieveGrid from '@/components/smes/SmesAchieveGrid'
import SmesSolutions from '@/components/smes/SmesSolutions'
import SmesHowUseZanga from '@/components/smes/SmesHowUseZanga'
import SmesBuiltForSmallerTeams from '@/components/smes/SmesBuiltForSmallerTeams'
import SmesWhyZanga from '@/components/smes/SmesWhyZanga'
import SmesWhereToStart from '@/components/smes/SmesWhereToStart'
import SmesFaq from '@/components/smes/SmesFaq'
import SmesCta from '@/components/smes/SmesCta'

export default function SmesPage() {
    return (
        <>
            <SmesHero/>
            <SmesChallenge/>
            <SmesAchieveGrid/>
            <SmesSolutions/>
            <SmesHowUseZanga/>
            <SmesBuiltForSmallerTeams/>
            <SmesWhyZanga/>
            <SmesWhereToStart/>
            <SmesFaq/>
            <SmesCta/>
        </>
    )
}
