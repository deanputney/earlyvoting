import React from "react"
import './style.scss';
import { graphql, Link } from 'gatsby';

import Helmet from '../components/helmet';
import StateHeader from '../components/state/header';
import FormattedBlock from '../components/formatters/formatted-block';
import StateEarlyVotingCountdown from '../components/state-early-voting-countdown';
import canEarlyVote from '../hooks/state-data';

const hasInPersonEarlyVotingInfo = (stateData) => {
  return (stateData.earlyVotingInPersonInfoManual !== null)
}

export default function StatePage({ data }) {
    const stateData = data.googleSheetEarlyVotingDataRow
      return (
        <div>
          <Helmet />
          <StateHeader stateData={stateData} />

          <section className="section">
            <div className="container">
              <div className="columns">
                <div class="column content is-8-desktop is-offset-2-desktop is-fullwidth-mobile">
                  <p>
                    {(
                      (stateData) => {
                        if (canEarlyVote(stateData)) {
                          return (
                            <React.Fragment>
                              <Link to={stateData.officialInfoEarlyVoting} class="button is-link">
                                {stateData.fullStateName} Early Voting Info
                              </Link>&nbsp;
                            </React.Fragment>
                          );
                        }
                      }
                    )(stateData)}
                    <Link to={stateData.sosElectionWebsite} class="button">
                      {stateData.fullStateName} Election Website
                    </Link>&nbsp;
                    <Link to={stateData.year2020OfficialElectionCalendar} class="button">
                      {stateData.fullStateName} Election Calendar
                    </Link>&nbsp;
                  </p>

                  <StateEarlyVotingCountdown data={stateData}/>
            

                  <h3 class="title is-3">Can you early vote in person?</h3>
                  <div>
                    {(
                      (stateData) => {
                        if (hasInPersonEarlyVotingInfo(stateData)) {
                          return stateData.earlyVotingInPersonInfoManual
                        }
                        else {
                          return (
                            <React.Fragment>
                              Check the <Link to={stateData.officialInfoVbm}>
                                official early voting info for {stateData.fullStateName}.
                                             </Link>
                            </React.Fragment>
                          )
                        }
                      }
                    )(stateData)}
                  </div>
                  <h3 class="title is-3">Can you early vote by mail?</h3>
                  <div class="subtitle is-5">Check the&nbsp;
                    <Link to={stateData.officialInfoVbm}>
                      official vote by mail info for {stateData.fullStateName}.
                    </Link>
                  </div>

                  <FormattedBlock text={stateData.vbmAbsenteeBallotRules} />

                  <FormattedBlock text={stateData.earlyVotingNotesCombined} />



                  <h3 class="title is-3">What about on election day?</h3>

                  <h5>ID requirements</h5>

                  <FormattedBlock text={stateData.idRequirementsSdr} />



                  <h3 class="title is-3">How do I make sure I'm registered to vote?</h3>
                  <div class="subtitle is-5">Check that <Link to={stateData.externalToolVerifyStatus}>
                      you're registered to vote.
                    </Link>
                  </div>

                  <FormattedBlock text={stateData.registrationRules}/>
                  <br/>


                  <h4 class="subtitle is-4">Can I register online?</h4>

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
    googleSheetEarlyVotingDataRow(fields: { slug: { eq: $slug } }) {
      state
      stateSlug
      fullStateName
      earlyVotingStarts
      earlyVotingEnds
      year2020EarlyVotingStarts
      year2020EarlyVotingEnds
      earlyVotingNotes
      earlyVotingNotesCombined
      officialInfoEarlyVoting
      year2020OfficialElectionCalendar
      officialInfoVoterId
      year2020VbmRequestDeadlineByMail
      officialInfoVbm
      vbmAbsenteeBallotRules
      officialInfoStudents
      externalToolOvr
      idRequirementsOvr
      idRequirementsSdr
      registrationRules
      externalToolVerifyStatus
      earlyVotingInPersonInfoManual
    }
  }
`
