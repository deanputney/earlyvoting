import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
import StateRow from './state-row';
import TimeQuipRow from './time-quip-row';
import './style.scss';

const electionDate = new Date('2020-11-03')
let quips = {
  42: 'You could probably read all the Harry Potters if you saved this much time.',
  30: 'Voting now would save you a whole month.',
  20: 'This is three whole weekends off.',
  14: 'Two weeks of bliss.',
  10: 'Still worth it!'
}
let usedQuips = []

function layoutStateRows(stateData) {
  const startDate = new Date(stateData.earlyVotingStartDate)
  const chartStartDate = new Date('2020-09-17')
  const days = Math.abs(electionDate - startDate) / 1000 / 60 / 60 / 24
  stateData.daysToStart = Math.abs(chartStartDate - startDate) / 1000 / 60 / 60 / 24

  if (quips[days] != null && !usedQuips.includes(days)) {
    usedQuips.push(days)

    return (
      <React.Fragment>
        <TimeQuipRow quip={quips[days]} data={stateData} />
        <StateRow data={stateData} />
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <StateRow data={stateData} />
    </React.Fragment>
  )
}

const StateGantt = () => (
  <StaticQuery
  query={graphql`
    {
      allGoogleSheetSiteDatesRow {
        nodes {
          state
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
                <td colspan="45" align="right">Election Day is November 3rd</td>
              </thead>
              <tr>
                <td class="bars" colspan="46">
                  <table class="table is-fullwidth">
                    {
                      data.allGoogleSheetSiteDatesRow.nodes.map(layoutStateRows)
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
