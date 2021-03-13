const { TestScheduler } = require("jest")
const {format_date, format_plural, format_url} = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2021-03-12 14:54:05');

    expect(format_date(date)).toBe('3/12/2021')
});

test('format_plural() returns a pluralized word', () => {
    const word = 'tiger';
    const amount = 2;

    expect(format_plural(word, amount)).toBe('tigers')
});

test('format_url() returns a simplified url string', () => {
    const url1 = format_url('http://test.com/page/1');
    const url2 = format_url('https://www.coolstuff.com/abcdefg/');
    const url3 = format_url('https://www.google.com?1=hello');
});