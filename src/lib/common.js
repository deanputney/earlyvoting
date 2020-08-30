const slugifyState = (stateName) => {
    return stateName.toLowerCase().replace(' ', '-');
}

const statePageUri = (stateName) => {
    return '/' + slugifyState(stateName);
}

module.exports = {
    slugifyState: slugifyState,
    statePageUri: statePageUri,
}