import React from "react"
import '../components/style.scss';
import { graphql, Link } from 'gatsby';

import Helmet from '../components/helmet';
import SiteDescription from '../components/site-description';
import StateHeader from '../components/state/header';
import FormattedBlock from '../components/formatters/formatted-block';
import StateEarlyVotingCountdown from '../components/state-early-voting-countdown';
import canEarlyVote from '../hooks/state-data';
import Footer from '../components/footer';

const hasInPersonEarlyVotingInfo = (stateData) => {
  return (stateData.earlyVotingInPersonInfoCombined !== null)
}

export default function StatePage({ data }) {
    const stateData = data.googleSheetEarlyVotingDataRow
      return (
        <div>
          <Helmet data={stateData} />
          <StateHeader stateData={stateData} />

          <section className="section">
            <div className="container">
              {( (stateData) => {
                if (canEarlyVote(stateData)) {
                  return (
                    <SiteDescription />
                  );
                }
                return (
                  <div class="columns">
                    <div class="column content is-8-desktop is-offset-2-desktop is-fullwidth-mobile">
                      <p>Unfortunately, it is not possible to vote in advance in {stateData.fullStateName}.
                      While this site is focused on helping people get their vote in before the
                      general election, here is some general information on voting that may be
                      helpful.</p>
                    </div>
                  </div>
                );
              })(stateData)}
            </div>
          </section>

          <section className="section">
            <div className="container">
              <div className="columns">
                <div class="message is-primary column content is-8-desktop is-offset-2-desktop is-fullwidth-mobile">
                  {( (stateData) => {
                    if (canEarlyVote(stateData)) {
                      return (
                        <StateEarlyVotingCountdown data={stateData}/>
                      );
                    }
                  })(stateData)}

                  <div className="columns is-centered">
                    <div className="column is-narrow">
                      {(
                        (stateData) => {
                          if (canEarlyVote(stateData)) {
                            return (
                              <React.Fragment>
                                <Link to={stateData.officialInfoEarlyVotingCombined} target="_blank"
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
                  <h3 class="title is-size-3-desktop is-size-4-mobile">Can you early vote in person?</h3>
                  {(
                    (stateData) => {
                      if (canEarlyVote(stateData)) {
                        return (
                          <div class="subtitle is-5">
                            Here's the <Link to={stateData.officialInfoEarlyVotingCombined} target="_blank">
                              official early voting info for {stateData.fullStateName}.
                                           </Link>
                          </div>
                        );
                      }
                      return (
                        <div class="subtitle is-5">
                          No. {stateData.fullStateName} does not have early in-person voting.
                        </div>
                      );
                    }
                  )(stateData)}

                  {(
                    (stateData) => {
                      if (canEarlyVote(stateData) && hasInPersonEarlyVotingInfo(stateData)) {
                        return (
                          <FormattedBlock text={stateData.earlyVotingInPersonInfoCombined} />
                        )
                      }
                      return;
                    }
                  )(stateData)}
                  <p></p>

                  <h3 class="title is-size-3-desktop is-size-4-mobile">Can you early vote by mail?</h3>
                  <div class="subtitle is-5">Here's the&nbsp;
                    <Link to={stateData.officialInfoVbm} target="_blank">
                      official vote by mail info for {stateData.fullStateName}.
                    </Link>
                  </div>

                  <FormattedBlock text={stateData.vbmAbsenteeBallotRules} />

                  <FormattedBlock text={stateData.earlyVotingByMailInfoCombined} />



                  <h3 class="title is-size-3-desktop is-size-4-mobile">What about on election day?</h3>

                  <h5>ID requirements</h5>

                  <FormattedBlock text={stateData.idRequirementsSdr} />



                  <h3 class="title is-size-3-desktop is-size-4-mobile">How do I make sure I'm registered to vote?</h3>
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

          <Footer />
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
      earlyVotingNotesCombined
      officialInfoEarlyVotingCombined
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
      earlyVotingInPersonInfoCombined
      earlyVotingByMailInfoCombined
    }
  }
`
