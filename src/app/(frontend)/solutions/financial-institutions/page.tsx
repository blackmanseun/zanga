import React from 'react'
import FinancialInstitutionsHero from '@/components/financial-institutions/FinancialInstitutionsHero'
import FinancialInstitutionsChallenge from '@/components/financial-institutions/FinancialInstitutionsChallenge'
import FinancialInstitutionsAchieveGrid from '@/components/financial-institutions/FinancialInstitutionsAchieveGrid'
import FinancialInstitutionsSolutions from '@/components/financial-institutions/FinancialInstitutionsSolutions'
import FinancialInstitutionsHowUseZanga from '@/components/financial-institutions/FinancialInstitutionsHowUseZanga'
import FinancialInstitutionsBuiltForInstitutions from '@/components/financial-institutions/FinancialInstitutionsBuiltForInstitutions'
import FinancialInstitutionsWhyZanga from '@/components/financial-institutions/FinancialInstitutionsWhyZanga'
import FinancialInstitutionsWhereToStart from '@/components/financial-institutions/FinancialInstitutionsWhereToStart'
import FinancialInstitutionsFaq from '@/components/financial-institutions/FinancialInstitutionsFaq'
import FinancialInstitutionsCta from '@/components/financial-institutions/FinancialInstitutionsCta'

export default function FinancialInstitutionsPage() {
    return (
        <>
            <FinancialInstitutionsHero/>
            <FinancialInstitutionsChallenge/>
            <FinancialInstitutionsAchieveGrid/>
            <FinancialInstitutionsSolutions/>
            <FinancialInstitutionsHowUseZanga/>
            <FinancialInstitutionsBuiltForInstitutions/>
            <FinancialInstitutionsWhyZanga/>
            <FinancialInstitutionsWhereToStart/>
            <FinancialInstitutionsFaq/>
            <FinancialInstitutionsCta/>
        </>
    )
}
