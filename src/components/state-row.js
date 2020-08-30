import React from 'react';
import './style.scss';

const StateRow = (data) => {
  data = data.data

  var startDate = new Date(data.earlyVotingStartDate)
  data.shortStartDate = (startDate.getMonth() + 1) + '/' + (startDate.getDate() + 1)

  if (data.daysToVote < 1) {
    return null
  }

  // The first colspan is how far from left to offset the start of the bar.
  // This corresponds to how many days from TODAY is the beginning of the voting period.
  // The second colspan is how long the voting period is.

  if (data.daysToVote < 3) {
    return (
      <tr>
        <th>{data.state}</th>
        <td colspan={data.daysToStart} class="bar-spacer">{data.shortStartDate}</td>
        <td colspan={data.daysToVote} class="bar"></td>
      </tr>
    )
  }

  const minMobileDays = 12

  return (
    <tr>
      <th>{data.state}</th>
      <td colspan={data.daysToStart} class="bar-spacer">
        <span class={(
          () => {
            if (data.daysToVote < minMobileDays) { return 'date is-hidden-tablet' }
            return 'date is-hidden'
          }
        )()} >{data.shortStartDate}</span>
      </td>
      <td colspan={data.daysToVote} class="bar">
        <span class={(
          () => {
            if (data.daysToVote < minMobileDays) { return 'date is-hidden-mobile' }
            return 'date'
          }
        )()}>{data.shortStartDate}</span>
      </td>
    </tr>
  )
};

export default StateRow;
