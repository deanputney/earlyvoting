import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
import './style.scss';
import {todaysDate, parseDate, dateDiffInDays} from '../lib/dates';

function tableRowForState(stateData) {
  // The first colspan is how far from left to offset the start of the bar.
  // This corresponds to how many days from TODAY is the beginning of the voting
  // period.
  // The second colspan is how long the voting period is.
  var today = todaysDate();
  var earlyVotingStart = parseDate(stateData.earlyVotingStartDate);
  var earlyVotingEnd = parseDate(stateData.earlyVotingEndDate);
  var diff = dateDiffInDays(today, earlyVotingStart);
  var daysToVote = dateDiffInDays(earlyVotingStart, earlyVotingEnd);
  return (
    <tr>
      <th>{stateData.state}</th>
      <td colspan={diff}></td>
      <td colspan={daysToVote} class="bar">{stateData.earlyVotingStartDate}</td>
    </tr>
  )
}

const StateGantt = () => (
  <StaticQuery
  query={graphql`
    {
      allGoogleSheetSiteDatesRow {
        nodes {
          state
          daysToStart
          daysToVote
          earlyVotingStartDate
          earlyVotingEndDate
        }
      }
    }
  `}
  render={data => (
  <div>
    <section className="section">
      <div className="container">
        <div class="columns">
          <div class="column is-10-desktop is-offset-1-desktop">
            <table class="gantt table is-fullwidth">
              <thead>
                <th></th>
                <td colspan="45" align="right">Election Day</td>
              </thead>
              <tr>
                <td class="bars" colspan="46">
                  <table class="table is-fullwidth">
                    {
                      data.allGoogleSheetSiteDatesRow.nodes.map(tableRowForState)
                    } 
                    <tr>
                      <th></th>
                      <td colspan="4"></td>
                      <td colspan="41">
                        You could probably read all the Harry Potters if you saved this much time.
                      </td>
                    </tr>
                    <tr>
                      <th></th>
                      <td colspan="16"></td>
                      <td colspan="25">Voting now would save you a whole month.</td>
                    </tr>

                  </table>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
  )}
  />
);

export default StateGantt;
