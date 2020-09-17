import React from 'react';
import { Link } from 'gatsby';
import './style.scss';
import { statePageUri } from '../lib/common';
import { dateDiffInDays, parseDate } from '../lib/dates';


const cantDisplayStateRow = (row) => {
  return (row.earlyVotingStartDate === null) || (row.earlyVotingEndDate === null)
}


const StateRow = (data) => {
  data = data.data
  if (cantDisplayStateRow(data)) {
    return null
  }

  var statePage = statePageUri(data.state);

  var endDate = parseDate(data.earlyVotingEndDate)
  var startDate = parseDate(data.earlyVotingStartDate)

  data.shortStartDate = (startDate.month() + 1) + '/' + startDate.date()

  const daysToVote = dateDiffInDays(startDate, endDate)

  if ((data.daysToVote < 1) || (endDate === null)) {
    return null
  }

  // The first colspan is how far from left to offset the start of the bar.
  // This corresponds to how many days from TODAY is the beginning of the voting period.
  // The second colspan is how long the voting period is.

  if (data.daysToVote < 3) {
    return (
      <tr>
        <th><Link to={statePage}>{data.state}</Link></th>
        <td colspan={data.daysToStart} class="bar-spacer">{data.shortStartDate}</td>
        <td colspan={daysToVote} class="bar">
          <Link to={statePage}>
            <div class="bar-content"></div>
          </Link>
        </td>
      </tr>
    )
  }

  const minMobileDays = 12

  return (
    <tr>
      <th><Link to={statePage}>{data.state}</Link></th>
      <td colspan={data.daysToStart} class="bar-spacer">
        <span class={(
          () => {
            if (data.daysToVote < minMobileDays) { return 'date is-hidden-tablet' }
            return 'date is-hidden'
          }
        )()} >{data.shortStartDate}</span>
      </td>
      <td colspan={daysToVote} class="bar">
        <Link to={statePage}>
          <div class="bar-content">
            <span class={(
              () => {
                if (data.daysToVote < minMobileDays) { return 'date is-hidden-mobile' }
                return 'date'
              }
            )()}>{data.shortStartDate}</span>
          </div>
        </Link>
      </td>
    </tr>
  )
};

export default StateRow;
