import React from 'react'
import LeadershipAssessmentsHero from '@/components/leadership-assessments/LeadershipAssessmentsHero'
import LeadershipAssessmentsClarity from '@/components/leadership-assessments/LeadershipAssessmentsClarity'
import LeadershipAssessmentsCompetency from '@/components/leadership-assessments/LeadershipAssessmentsCompetency'
import LeadershipAssessments360 from '@/components/leadership-assessments/LeadershipAssessments360'
import LeadershipAssessmentsPotential from '@/components/leadership-assessments/LeadershipAssessmentsPotential'
import LeadershipAssessmentsExecutive from '@/components/leadership-assessments/LeadershipAssessmentsExecutive'
import LeadershipAssessmentsComparison from '@/components/leadership-assessments/LeadershipAssessmentsComparison'
import LeadershipAssessmentsAchieve from '@/components/leadership-assessments/LeadershipAssessmentsAchieve'
import LeadershipAssessmentsApproach from '@/components/leadership-assessments/LeadershipAssessmentsApproach'
import LeadershipAssessmentsContext from '@/components/leadership-assessments/LeadershipAssessmentsContext'
import LeadershipAssessmentsAudiences from '@/components/leadership-assessments/LeadershipAssessmentsAudiences'
import LeadershipAssessmentsMoments from '@/components/leadership-assessments/LeadershipAssessmentsMoments'
import LeadershipAssessmentsWhatYouReceive from '@/components/leadership-assessments/LeadershipAssessmentsWhatYouReceive'
import LeadershipAssessmentsFaq from '@/components/leadership-assessments/LeadershipAssessmentsFaq'
import LeadershipAssessmentsCta from '@/components/leadership-assessments/LeadershipAssessmentsCta'

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
            <LeadershipAssessmentsAchieve/>
            <LeadershipAssessmentsApproach/>
            <LeadershipAssessmentsContext/>
            <LeadershipAssessmentsAudiences/>
            <LeadershipAssessmentsMoments/>
            <LeadershipAssessmentsWhatYouReceive/>
            <LeadershipAssessmentsFaq/>
            <LeadershipAssessmentsCta/>
        </>
    )
}
