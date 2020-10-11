const slugifyState = (stateName) => {
  return stateName.toLowerCase().replace(/ /g, '-');
}

const statePageUri = (stateName) => {
  return '/' + slugifyState(stateName);
}

const shortStateName = (fullStateName) => {
  switch (fullStateName.trim()) {
    case 'District of Columbia':
      return 'Washington DC';
    default:
      return fullStateName;
  }
}

const canEarlyVote = (stateData) => {
  if (stateData.year2020EarlyVotingStartsCombined != 'N/A') {
    return true;
  }
  return false;
}

const hasInPersonEarlyVotingInfo = (stateData) => {
  return (stateData.earlyVotingInPersonInfoCombined !== null)
}

module.exports = {
    slugifyState: slugifyState,
    statePageUri: statePageUri,
    shortStateName: shortStateName,
    canEarlyVote: canEarlyVote,
    hasInPersonEarlyVotingInfo: hasInPersonEarlyVotingInfo,
}
