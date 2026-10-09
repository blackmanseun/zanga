import React from 'react'
import InvestorsFundManagersHero from '@/components/investors-fund-managers/InvestorsFundManagersHero'
import InvestorsFundManagersChallenge from '@/components/investors-fund-managers/InvestorsFundManagersChallenge'
import InvestorsFundManagersAchieveGrid from '@/components/investors-fund-managers/InvestorsFundManagersAchieveGrid'
import InvestorsFundManagersSolutions from '@/components/investors-fund-managers/InvestorsFundManagersSolutions'
import InvestorsFundManagersHowUseZanga from '@/components/investors-fund-managers/InvestorsFundManagersHowUseZanga'
import InvestorsFundManagersBuiltForFunds from '@/components/investors-fund-managers/InvestorsFundManagersBuiltForFunds'
import InvestorsFundManagersWhyZanga from '@/components/investors-fund-managers/InvestorsFundManagersWhyZanga'
import InvestorsFundManagersWhereToStart from '@/components/investors-fund-managers/InvestorsFundManagersWhereToStart'
import InvestorsFundManagersFaq from '@/components/investors-fund-managers/InvestorsFundManagersFaq'
import InvestorsFundManagersCta from '@/components/investors-fund-managers/InvestorsFundManagersCta'

export default function InvestorsFundManagersPage() {
    return (
        <>
            <InvestorsFundManagersHero/>
            <InvestorsFundManagersChallenge/>
            <InvestorsFundManagersAchieveGrid/>
            <InvestorsFundManagersSolutions/>
            <InvestorsFundManagersHowUseZanga/>
            <InvestorsFundManagersBuiltForFunds/>
            <InvestorsFundManagersWhyZanga/>
            <InvestorsFundManagersWhereToStart/>
            <InvestorsFundManagersFaq/>
            <InvestorsFundManagersCta/>
        </>
    )
}
