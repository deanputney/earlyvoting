import React from 'react';
import { Link } from 'gatsby';

import '../style.scss';

import { canEarlyVote, hasInPersonEarlyVotingInfo } from '../../lib/common';
import FormattedBlock from '../../components/formatters/formatted-block';

const Subtitle = ({stateData}) => {
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

const Details = ({stateData}) => {
  if (canEarlyVote(stateData) && hasInPersonEarlyVotingInfo(stateData)) {
    return (
      <FormattedBlock text={stateData.earlyVotingInPersonInfoCombined} />
    )
  }
  return (null);
}

const EarlyInPerson = ({stateData}) => (
  <React.Fragment>
    <h3 class="title is-size-3-desktop is-size-4-mobile">Can you early vote in person?</h3>
    <Subtitle stateData={stateData} />

    <Details stateData={stateData} />
    <p></p>
  </React.Fragment>
);

export default EarlyInPerson;
