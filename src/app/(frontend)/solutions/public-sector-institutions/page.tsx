import React from 'react'
import PublicSectorInstitutionsHero from '@/components/public-sector-institutions/PublicSectorInstitutionsHero'
import PublicSectorInstitutionsChallenge from '@/components/public-sector-institutions/PublicSectorInstitutionsChallenge'
import PublicSectorInstitutionsAchieveGrid from '@/components/public-sector-institutions/PublicSectorInstitutionsAchieveGrid'
import PublicSectorInstitutionsSolutions from '@/components/public-sector-institutions/PublicSectorInstitutionsSolutions'
import PublicSectorInstitutionsHowUseZanga from '@/components/public-sector-institutions/PublicSectorInstitutionsHowUseZanga'
import PublicSectorInstitutionsBuiltForInstitutions from '@/components/public-sector-institutions/PublicSectorInstitutionsBuiltForInstitutions'
import PublicSectorInstitutionsWhyZanga from '@/components/public-sector-institutions/PublicSectorInstitutionsWhyZanga'
import PublicSectorInstitutionsWhereToStart from '@/components/public-sector-institutions/PublicSectorInstitutionsWhereToStart'
import PublicSectorInstitutionsFaq from '@/components/public-sector-institutions/PublicSectorInstitutionsFaq'
import PublicSectorInstitutionsCta from '@/components/public-sector-institutions/PublicSectorInstitutionsCta'

export default function PublicSectorInstitutionsPage() {
    return (
        <>
            <PublicSectorInstitutionsHero/>
            <PublicSectorInstitutionsChallenge/>
            <PublicSectorInstitutionsAchieveGrid/>
            <PublicSectorInstitutionsSolutions/>
            <PublicSectorInstitutionsHowUseZanga/>
            <PublicSectorInstitutionsBuiltForInstitutions/>
            <PublicSectorInstitutionsWhyZanga/>
            <PublicSectorInstitutionsWhereToStart/>
            <PublicSectorInstitutionsFaq/>
            <PublicSectorInstitutionsCta/>
        </>
    )
}
