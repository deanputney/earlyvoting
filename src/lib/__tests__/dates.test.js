const {parseDate, dateDiffInDays} = require('../dates');

test('should parse simple strings', () => {
    d = parseDate('2020-05-05');
    expect(d.day()).toBe(2);
});

test('there are two days between may 1 and may 3', () => {
    may1 = parseDate('2020-05-01');
    may3 = parseDate('2020-05-03');
    expect(dateDiffInDays(may1, may3)).toBe(2);
})