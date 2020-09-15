import React from 'react';
import { Link } from 'gatsby';
import './style.scss';
import { statePageUri } from '../lib/common';
import { dateDiffInDays, parseDate } from '../lib/dates';
import moment from 'moment';


const dateFromString = (startDateString) => {
    return moment(startDateString, "MMMM DD, YYYY");
}


const numDaysToStart = (startDate) => {
    return startDate.diff(moment(), 'days');
}


const messageForCountdown = (fullStateName, numDaysToStart, startDateString) => {
    if (numDaysToStart <= 0) {
        return `Early voting has started in ${fullStateName}!`;
    }
    return (
      <React.Fragment>
        Early voting in {fullStateName} begins in {numDaysToStart} days on <span class="is-nowrap">{startDateString}</span>.
      </React.Fragment>
    );
}


const StateEarlyVotingCountdown = (data) => {
  data = data.data

  var endDateString = data.year2020EarlyVotingEnds;
  var startDateString = data.year2020EarlyVotingStarts;
  var startDate = dateFromString(startDateString);
  var daysLeft = numDaysToStart(startDate);

  return (
    <React.Fragment>
    <p className="title is-4 has-text-centered">{messageForCountdown(data.fullStateName, daysLeft, startDateString)}</p>
    <p className="subtitle is-5 has-text-centered">You have until {endDateString} to vote before election day.</p>
    </React.Fragment>
  )
};

export default StateEarlyVotingCountdown;
