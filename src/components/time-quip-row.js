import React from 'react';
import './style.scss';

const TimeQuipRow = (data) => {
  const quip = data.quip
  data = data.data

  // The first colspan is how far from left to offset the start of the bar.
  // This corresponds to how many days from TODAY is the beginning of the voting period.
  // The second colspan is how long the voting period is.
  return (
    <React.Fragment>
      <tr class="is-hidden-touch">
        <th></th>
        <td colspan={data.daysToStart}></td>
        <td colspan={data.daysToVote} class="quip">{quip}</td>
      </tr>
      <tr class="is-hidden-desktop">
        <th></th>
        <td colspan="46" class="quip" align="right">{quip}</td>
      </tr>
    </React.Fragment>
  )
};

export default TimeQuipRow;
