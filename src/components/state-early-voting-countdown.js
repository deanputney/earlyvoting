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


const messageForCountdown = (numDaysToStart, startDateString) => {
    if (numDaysToStart <= 0) {
        return "Early voting has started in your state!";
    }
    return "Early voting in your state begins in " + numDaysToStart + " days on " + startDateString + ".";
}


const StateEarlyVotingCountdown = (data) => {
  data = data.data

  var endDateString = data.year2020EarlyVotingEnds;
  var startDateString = data.year2020EarlyVotingStarts;
  var startDate = dateFromString(startDateString);
  var daysLeft = numDaysToStart(startDate);

  return (
    <React.Fragment>
    <p>{messageForCountdown(daysLeft, startDateString)}</p>
    <p>You have until {endDateString} to vote before election day.</p>
    </React.Fragment>
  )
};

export default StateEarlyVotingCountdown;
