var moment = require('moment');

const todaysDate = () => {
    return moment.now()
}

const parseDate = (simpleDateString) => {
    return moment(simpleDateString)
}

const dateDiffInDays = (date1, date2) => {
    // return the difference in days date2 - date1.
    return date2.diff(date1, 'days')
}

module.exports = {
    parseDate: parseDate,
    dateDiffInDays: dateDiffInDays,
    todaysDate: todaysDate,
}