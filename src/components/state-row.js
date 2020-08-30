import React from 'react';
import './style.scss';

const StateRow = (data) => {
  data = data.data

  var startDate = new Date(data.earlyVotingStartDate)
  data.shortStartDate = (startDate.getMonth() + 1) + '/' + startDate.getDate()

  if (data.daysToVote < 1) {
   return null
  }

  // The first colspan is how far from left to offset the start of the bar.
  // This corresponds to how many days from TODAY is the beginning of the voting period.
  // The second colspan is how long the voting period is.
  return (
    <tr>
      <th>{data.state}</th>
      <td colspan={data.daysToStart}></td>
      <td colspan={data.daysToVote} class="bar">{data.shortStartDate}</td>
    </tr>
  )
};

export default StateRow;
