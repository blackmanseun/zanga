import React from 'react'
import WorkforceAssessmentsHero from '@/components/workforce-assessments/WorkforceAssessmentsHero'
import WorkforceAssessmentsClarity from '@/components/workforce-assessments/WorkforceAssessmentsClarity'
import WorkforceAssessmentsEngagementSurvey from '@/components/workforce-assessments/WorkforceAssessmentsEngagementSurvey'
import WorkforceAssessmentsCultureAssessment from '@/components/workforce-assessments/WorkforceAssessmentsCultureAssessment'
import WorkforceAssessmentsTeamEffectiveness from '@/components/workforce-assessments/WorkforceAssessmentsTeamEffectiveness'
import WorkforceAssessmentsCustomSurvey from '@/components/workforce-assessments/WorkforceAssessmentsCustomSurvey'
import WorkforceAssessmentsAnalytics from '@/components/workforce-assessments/WorkforceAssessmentsAnalytics'
import WorkforceAssessmentsComparison from '@/components/workforce-assessments/WorkforceAssessmentsComparison'
import WorkforceAssessmentsAchieve from '@/components/workforce-assessments/WorkforceAssessmentsAchieve'
import WorkforceAssessmentsApproach from '@/components/workforce-assessments/WorkforceAssessmentsApproach'
import WorkforceAssessmentsContext from '@/components/workforce-assessments/WorkforceAssessmentsContext'
import WorkforceAssessmentsAudiences from '@/components/workforce-assessments/WorkforceAssessmentsAudiences'
import WorkforceAssessmentsMoments from '@/components/workforce-assessments/WorkforceAssessmentsMoments'
import WorkforceAssessmentsWhatYouReceive from '@/components/workforce-assessments/WorkforceAssessmentsWhatYouReceive'
import WorkforceAssessmentsFaq from '@/components/workforce-assessments/WorkforceAssessmentsFaq'
import WorkforceAssessmentsCta from '@/components/workforce-assessments/WorkforceAssessmentsCta'

export default function WorkforceAssessmentsPage() {
    return (
        <>
            <WorkforceAssessmentsHero/>
            <WorkforceAssessmentsClarity/>
            <WorkforceAssessmentsEngagementSurvey/>
            <WorkforceAssessmentsCultureAssessment/>
            <WorkforceAssessmentsTeamEffectiveness/>
            <WorkforceAssessmentsCustomSurvey/>
            <WorkforceAssessmentsAnalytics/>
            <WorkforceAssessmentsComparison/>
            <WorkforceAssessmentsAchieve/>
            <WorkforceAssessmentsApproach/>
            <WorkforceAssessmentsContext/>
            <WorkforceAssessmentsAudiences/>
            <WorkforceAssessmentsMoments/>
            <WorkforceAssessmentsWhatYouReceive/>
            <WorkforceAssessmentsFaq/>
            <WorkforceAssessmentsCta/>
        </>
    )
}
