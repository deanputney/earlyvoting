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

module.exports = {
    slugifyState: slugifyState,
    statePageUri: statePageUri,
    shortStateName: shortStateName,
}
