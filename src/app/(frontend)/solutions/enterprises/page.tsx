import React from 'react'
import EnterprisesHero from '@/components/enterprises/EnterprisesHero'
import EnterprisesChallenge from '@/components/enterprises/EnterprisesChallenge'
import EnterprisesAchieveGrid from '@/components/enterprises/EnterprisesAchieveGrid'
import EnterprisesSolutions from '@/components/enterprises/EnterprisesSolutions'
import EnterprisesHowUseZanga from '@/components/enterprises/EnterprisesHowUseZanga'
import EnterprisesBuiltForComplexOrganisations from '@/components/enterprises/EnterprisesBuiltForComplexOrganisations'
import EnterprisesWhyZanga from '@/components/enterprises/EnterprisesWhyZanga'
import EnterprisesWhereToStart from '@/components/enterprises/EnterprisesWhereToStart'
import EnterprisesFaq from '@/components/enterprises/EnterprisesFaq'
import EnterprisesCta from '@/components/enterprises/EnterprisesCta'

export default function EnterprisesPage() {
    return (
        <>
            <EnterprisesHero/>
            <EnterprisesChallenge/>
            <EnterprisesAchieveGrid/>
            <EnterprisesSolutions/>
            <EnterprisesHowUseZanga/>
            <EnterprisesBuiltForComplexOrganisations/>
            <EnterprisesWhyZanga/>
            <EnterprisesWhereToStart/>
            <EnterprisesFaq/>
            <EnterprisesCta/>
        </>
    )
}
