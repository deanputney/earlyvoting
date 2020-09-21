
const canEarlyVote = (stateData) => {
  if (stateData.year2020EarlyVotingStartsCombined != 'N/A') {
    return true;
  }
  return false;
}

export default canEarlyVote;
