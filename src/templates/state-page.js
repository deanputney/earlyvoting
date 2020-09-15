import React from "react"
import '../components/style.scss';
import { graphql, Link } from 'gatsby';

import Helmet from '../components/helmet';
import SiteDescription from '../components/site-description';
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
              <SiteDescription />
            </div>
          </section>

          <section className="section">
            <div className="container">
              <div className="columns">
                <div class="message is-primary column content is-8-desktop is-offset-2-desktop is-fullwidth-mobile">
                  <StateEarlyVotingCountdown data={stateData}/>

                  <div className="columns is-centered">
                    <div className="column is-narrow">
                      {(
                        (stateData) => {
                          if (canEarlyVote(stateData)) {
                            return (
                              <React.Fragment>
                                <Link to={stateData.officialInfoEarlyVoting} target="_blank"
                                  class="button is-link">
                                  {stateData.fullStateName} Early Voting Info
                                </Link>
                              </React.Fragment>
                            );
                          }
                        }
                      )(stateData)}
                    </div>
                    <div className="column is-narrow">
                      <Link to={stateData.sosElectionWebsite} target="_blank"
                        class="button">
                        {stateData.fullStateName} Election Website
                      </Link>
                    </div>
                    <div className="column is-narrow">
                      <Link to={stateData.year2020OfficialElectionCalendar} target="_blank"
                        class="button">
                        {stateData.fullStateName} Election Calendar
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className="section">
            <div className="container">
              <div className="columns">
                <div class="column content is-8-desktop is-offset-2-desktop is-fullwidth-mobile">
                  <h3 class="title is-3">Can you early vote in person?</h3>
                  {(
                    (stateData) => {
                      if (hasInPersonEarlyVotingInfo(stateData)) {
                        return stateData.earlyVotingInPersonInfoManual
                      }
                      else {
                        return (
                          <div class="subtitle is-5">
                            Here's the <Link to={stateData.officialInfoVbm} target="_blank">
                              official early voting info for {stateData.fullStateName}.
                                           </Link>
                          </div>
                        )
                      }
                    }
                  )(stateData)}
                  <p></p>

                  <h3 class="title is-3">Can you early vote by mail?</h3>
                  <div class="subtitle is-5">Here's the&nbsp;
                    <Link to={stateData.officialInfoVbm} target="_blank">
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
