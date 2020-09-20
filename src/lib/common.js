const slugifyState = (stateName) => {
    return stateName.toLowerCase().replaceAll(' ', '-');
}

const statePageUri = (stateName) => {
    return '/' + slugifyState(stateName);
}

const shortStateName = (fullStateName) => {
  switch (fullStateName) {
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
