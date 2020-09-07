
const canEarlyVote = (stateData) => {
  if (stateData.sdrEarlyVoting == 'True') {
    return true;
  }
  return false;
}

export default canEarlyVote;
