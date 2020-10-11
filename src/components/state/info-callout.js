import React from 'react';

import { Link } from 'gatsby';
import '../style.scss';

import { shortStateName, canEarlyVote } from '../../lib/common';

import StateEarlyVotingCountdown from './early-voting-countdown';

const StateInfoCallout = ({ stateData }) => (
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
                          {shortStateName(stateData.fullStateName)} Early Voting Info
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
                {shortStateName(stateData.fullStateName)} Election Website
              </Link>
            </div>
            <div className="column is-narrow">
              <Link to={stateData.year2020OfficialElectionCalendar} target="_blank"
                class="button">
                {shortStateName(stateData.fullStateName)} Election Calendar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default StateInfoCallout;
