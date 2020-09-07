import React from "react"
import './style.scss';
import { graphql, Link } from 'gatsby';

import Helmet from '../components/helmet';
import StateHeader from '../components/state/header';

import canEarlyVote from '../hooks/state-data';

export default function StatePage({ data }) {
    const stateData = data.googleSheetVaApiDataRow
      return (
        <div>
          <Helmet />
          <StateHeader stateData={stateData} />

          <section className="section">
            <div className="container">
              <div className="columns">
                <div class="column is-8-desktop is-offset-2-desktop is-fullwidth-mobile">
                  <p>
                    <Link to={stateData.sosElectionWebsite} class="button">
                      <span role="img">🏛</span> {stateData.fullStateName} Election Website
                    </Link>&nbsp;
                    <Link to={stateData.year2020OfficialElectionCalendar} class="button">
                      <span role="img">🗓</span> {stateData.fullStateName} Election Calendar
                    </Link>&nbsp;
                    {(
                      (stateData) => {
                        if (canEarlyVote(stateData)) {
                          return (
                            <Link to={stateData.officialInfoEarlyVoting} class="button">
                              <span role="img">ℹ️</span> {stateData.fullStateName} Early Voting Info
                            </Link>
                          );
                        }
                      }
                    )(stateData)}
                  </p>

                  early voting in {stateData.state}<br/>

                  Early voting is [Open | Starts in X days (date) | Not available in your state]<br/>

                  You have until {stateData.year2020EarlyVotingEnds} to vote before election day.<br/>

                  <h2 class="title is-2">Can you early vote in person?</h2>
                  ID requirements: {stateData.idRequirementsSdr}

                  <h2 class="title is-2">Can you early vote by mail?</h2>
                  <h4 class="subtitle is-4">{stateData.vbmAbsenteeBallotRules}</h4>

                  <p>{stateData.earlyVotingNotes}</p>

                  <h2 class="title is-2">What about on election day?</h2>

                  <h2 class="title is-2">What about voter registration?</h2>
                  <h4 class="subtitle is-4">Check that <Link to={stateData.externalToolVerifyStatus}>
                      you're registered to vote.
                    </Link>
                  </h4>

                  <p>{stateData.registrationRules}</p>
                  <br/>


                  <h5 class="subtitle is-5">Can I register online?</h5>
                  <p>{stateData.idRequirementsOvr}</p>

                  <p>
                    <Link to={stateData.externalToolOvr} class="button">Register to vote online here</Link>
                  </p>

                </div>
              </div>
            </div>
          </section>
        </div>
      )
}

export const query = graphql`
  query($slug: String!) {
    googleSheetVaApiDataRow(fields: { slug: { eq: $slug } }) {
      earlyVotingStarts
      vbmDeadlineMail
      externalToolVbmApplication
      vbmUniversal
      vbmFirstDayToApply
      leoOverseasVoters
      registrationDirections
      sosContactEmail
      earlyVotingNotes
      year2020BallotReturnDeadlineInPerson
      vbmNotes
      registrationSubmissionPhone
      year2020EarlyVotingEnds
      vbmVotedBallotDeadlineInPerson
      year2020VbmRequestDeadlineOnline
      registrationSubmissionFax
      alertRegistration
      alertVbm
      pollsClose
      year2020RegistrationDeadlineByMail
      idRequirementsSdr
      registrationNvrfBox6
      registrationDeadlineInPerson
      vbmAppSubmissionEmail
      registrationDeadlineOnline
      vbmOvbmDirections
      vbmAbsenteeBallotRules
      year2020OfficialElectionCalendar
      officialInfoEarlyVoting
      officialInfoVoterId
      year2020EarlyVotingStarts
      sdrNotes
      registrationNvrfSubmissionAddress
      pollsOpen
      vbmNoExcuse
      idRequirementsInPersonVoting
      vbmPermanentDisabled
      vbmStateProvidesDropboxes
      sdrEarlyVoting
      vbmAppSubmissionPhone
      vbmAppSubmissionFax
      vbmWarnings
      registrationSubmissionInPerson
      year2020VbmRequestDeadlineByMail
      vbmStateProvidesBallotPostage
      vbmPermanentAnyone
      sdrElectionDay
      year2020LegalChanges
      vbmDeadlineOnline
      year2020BallotReturnDeadlineByMail
      sosElectionWebsite
      vbmApplicationDirections
      registrationSubmissionMail
      officialInfoFelon
      overseasFvapDirections
      registrationSubmissionEmail
      registrationNvrfBox7
      idRequirementsOvr
      externalToolPollingPlace
      overseasFvapTool
      externalToolOvr
      officialInfoVbm
      pdfAbsenteeForm
      officialInfoStudents
      sosPhoneNumber
      year2020RegistrationDeadlineInPerson
      leoAbsenteeBallots
      externalToolAbsenteeBallotTracker
      vbmDeadlineInPerson
      year2020VbmRequestDeadlineByInPerson
      registrationAutomaticExists
      vbmAppSubmissionMail
      vbmVotedBallotDeadlineMail
      year2020RegistrationDeadlineOnline
      externalToolVerifyStatus
      registrationNvrfBox8
      warningsRegistration
      officialInfoRegistration
      idRequirementsVbm
      registrationRules
      leoVoterRegistration
      year2020GeneralElectionDate
      registrationDeadlineMail
      vbmAppSubmissionInPerson
      earlyVotingEnds
      state
      stateSlug
      fullStateName
    }
  }
`
