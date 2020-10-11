import React from 'react';
import { Link } from 'gatsby';

import '../style.scss';

import { canEarlyVote } from '../../lib/common';

const StateHeader = ({ stateData }) => (
  <section className="hero gradientBg is-halfheight">
    <div className="hero-body">
      <div className="container center">
        <article className="media">
          <div className="media-content">
            <div className="content">
              {(
                (stateData) => {
                  if (canEarlyVote(stateData)) {
                    return (<StateCanEarlyVote stateData={stateData} />);
                  }
                  return (<StateCannotEarlyVote stateData={stateData} />);
                }
              )(stateData)}
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
);

const StateCanEarlyVote = ({ stateData }) => (
  <div className="content">
    <h1 className="is-uppercase is-size-1 has-text-white">
      You can vote early in {stateData.fullStateName}.
    </h1>
    <p className="subtitle has-text-white is-size-3-desktop is-size-4-mobile">
      Get the official info here:&nbsp;
      <Link to={stateData.officialInfoEarlyVotingCombined} target="_blank" class="hilight">
        {stateData.fullStateName} Early Voting Info
      </Link>
    </p>
  </div>
);

const StateCannotEarlyVote = ({ stateData }) => (
  <div className="content">
    <h1 className="is-uppercase is-size-1 has-text-white">
      Voter Information for <span class="hilight">{stateData.fullStateName}</span>.
    </h1>
    <p className="subtitle has-text-white is-size-3">
      Early voting is not available. Here's how else you can vote.
    </p>
  </div>
);

export default StateHeader;
