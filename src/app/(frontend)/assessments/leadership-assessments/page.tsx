import React from 'react'
import LeadershipAssessmentsHero from '@/components/leadership-assessments/LeadershipAssessmentsHero'
import LeadershipAssessmentsClarity from '@/components/leadership-assessments/LeadershipAssessmentsClarity'
import LeadershipAssessmentsCompetency from '@/components/leadership-assessments/LeadershipAssessmentsCompetency'
import LeadershipAssessments360 from '@/components/leadership-assessments/LeadershipAssessments360'
import LeadershipAssessmentsPotential from '@/components/leadership-assessments/LeadershipAssessmentsPotential'
import LeadershipAssessmentsExecutive from '@/components/leadership-assessments/LeadershipAssessmentsExecutive'
import LeadershipAssessmentsComparison from '@/components/leadership-assessments/LeadershipAssessmentsComparison'

export default function LeadershipAssessmentsPage() {
    return (
        <>
            <LeadershipAssessmentsHero/>
            <LeadershipAssessmentsClarity/>
            <LeadershipAssessmentsCompetency/>
            <LeadershipAssessments360/>
            <LeadershipAssessmentsPotential/>
            <LeadershipAssessmentsExecutive/>
            <LeadershipAssessmentsComparison/>
        </>
    )
}
