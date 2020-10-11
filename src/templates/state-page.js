import React from "react"
import '../components/style.scss';
import { graphql, Link } from 'gatsby';

import { shortStateName, canEarlyVote, hasInPersonEarlyVotingInfo } from '../lib/common';

import FormattedBlock from '../components/formatters/formatted-block';

import Helmet from '../components/helmet';
import SiteDescription from '../components/site-description';
import StateHeader from '../components/state/header';
import StateInfoCallout from '../components/state/info-callout';
import EarlyInPerson from '../components/state/early-in-person';
import Footer from '../components/footer';


const PollingPlaceLookup = ({stateData}) => {
  if (stateData.pollingPlaceLookupUrl) { return (null); }

  return (
    <React.Fragment>
      <h5>Polling place lookup</h5>
      <p><Link to={stateData.pollingPlaceLookupUrl} target="_blank">
          Find your polling place on this website.
        </Link>
      </p>
    </React.Fragment>
  )
}

const canRegisterOnline = (stateData) => {
  return (stateData.idRequirementsOvr !== "N/A")
}

const OnlineRegistration = ({stateData}) => {
  if (canRegisterOnline(stateData)) {
    return (
      <React.Fragment>
        <FormattedBlock text={stateData.idRequirementsOvr}/>
        <Link to={stateData.externalToolOvr} class="button">Register to vote online here</Link>
      </React.Fragment>
    )
  }
  else {
    return (
      <p>Unfortunately online registration is not possible in {stateData.fullStateName}.</p>
    )
  }
  return (null);
}

const BallotTracking = ({stateData}) => {
  if (!stateData.ballotTrackingUrl) { return (null); }

  return (
    <React.Fragment>
      <h3 class="title is-size-3-desktop is-size-4-mobile">Can I track my ballot?</h3>
      <div class="subtitle is-5"><Link to={stateData.ballotTrackingUrl}>
          Track your ballot online.
        </Link>
      </div>
      <p/>
    </React.Fragment>
  )
}

const NewsItems = ({stateData}) => {
  if (!stateData.newsItemsMd) { return (null); }

  return (
    <React.Fragment>
      <h3 class="title is-size-3-desktop is-size-4-mobile">Voting News and Resources</h3>

      <FormattedBlock text={stateData.newsItemsMd} />
    </React.Fragment>
  )
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

          <StateInfoCallout stateData={stateData}/>

          <section className="section">
            <div className="container">
              <div className="columns">
                <div class="column content is-8-desktop is-offset-2-desktop is-fullwidth-mobile">
                  <EarlyInPerson stateData={stateData} />

                  <h3 class="title is-size-3-desktop is-size-4-mobile">Can you early vote by mail?</h3>
                  <div class="subtitle is-5">Here's the&nbsp;
                    <Link to={stateData.officialInfoVbm} target="_blank">
                      official vote by mail info for {stateData.fullStateName}.
                    </Link>
                  </div>

                  <FormattedBlock text={[stateData.vbmAbsenteeBallotRulesCombined, stateData.earlyVotingByMailInfoCombined]} />


                  <h3 class="title is-size-3-desktop is-size-4-mobile">What about on election day?</h3>

                  <PollingPlaceLookup stateData={stateData} />

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
                  <OnlineRegistration stateData={stateData} />

                  <BallotTracking stateData={stateData} />

                  <NewsItems stateData={stateData} />
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
      year2020EarlyVotingStartsCombined
      year2020EarlyVotingEndsCombined
      earlyVotingNotesCombined
      officialInfoEarlyVotingCombined
      year2020OfficialElectionCalendar
      officialInfoVoterId
      year2020VbmRequestDeadlineByMail
      officialInfoVbm
      vbmAbsenteeBallotRulesCombined
      officialInfoStudents
      externalToolOvr
      idRequirementsOvr
      idRequirementsSdr
      registrationRules
      externalToolVerifyStatus
      earlyVotingInPersonInfoCombined
      earlyVotingByMailInfoCombined
      sosElectionWebsite
      ballotTrackingUrl
      pollingPlaceLookupUrl
      newsItemsMd
    }
  }
`
