import { checkUserInput } from '../src/client/js/urlChecker.js';

test('correct URL', () => {
    expect(checkUserInput('www.google.com')).toBe(2)
});

test('invalid input', () => {
    expect(checkUserInput('the answer is 42!')).toBe(1)
});

test('empty input', () => {
    expect(checkUserInput('')).toBe(0)
});
