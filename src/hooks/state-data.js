
const canEarlyVote = (stateData) => {
  if (stateData.earlyVotingStarts != 'N/A') {
    return true;
  }
  return false;
}

export default canEarlyVote;
