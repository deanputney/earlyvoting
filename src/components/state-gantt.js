import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
import './style.scss';

function tableRowForState(stateData) {
  // The first colspan is how far from left to offset the start of the bar.
  // This corresponds to how many days from TODAY is the beginning of the voting
  // period.
  // The second colspan is how long the voting period is.
  return (
    <tr>
      <th>{stateData.state}</th>
      <td colspan={stateData.daysToStart}></td>
      <td colspan={stateData.daysToVote} class="bar">{stateData.earlyVotingStartDate}</td>
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
                <td colspan="3">9/19</td>
                <td colspan="35"></td>
                <td colspan="7" align="right">Election Day</td>
              </thead>
              <tr>
                <td class="bars" colspan="46">
                  <table class="table is-fullwidth">
                    {
                      data.allGoogleSheetSiteDatesRow.nodes.map(tableRowForState)
                    } 
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
