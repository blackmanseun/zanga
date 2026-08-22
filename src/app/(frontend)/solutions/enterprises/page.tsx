import React from 'react'
import Hero from '@/components/enterprises/Hero'
import EnterpriseChallenge from '@/components/enterprises/EnterpriseChallenge'
import AchieveGrid from '@/components/enterprises/AchieveGrid'
import EnterpriseSolutions from '@/components/enterprises/EnterpriseSolutions'
import HowEnterprisesUseZanga from '@/components/enterprises/HowEnterprisesUseZanga'
import BuiltForComplexOrganisations from '@/components/enterprises/BuiltForComplexOrganisations'
import WhyZanga from '@/components/enterprises/WhyZanga'
import WhereToStart from '@/components/enterprises/WhereToStart'
import Faq from '@/components/enterprises/Faq'
import Cta from '@/components/enterprises/Cta'

export default function EnterprisesPage() {
    return (
        <>
            <Hero/>
            <EnterpriseChallenge/>
            <AchieveGrid/>
            <EnterpriseSolutions/>
            <HowEnterprisesUseZanga/>
            <BuiltForComplexOrganisations/>
            <WhyZanga/>
            <WhereToStart/>
            <Faq/>
            <Cta/>
        </>
    )
}
