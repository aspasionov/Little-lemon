import { fetchAPI, submitAPI } from './fakeAPI';

describe('fetchAPI function', () => {
  test('returns an array of time slots based on date', () => {
    const date = new Date('2024-03-27'); // Example date
    const result = fetchAPI(date);
    // Make sure the result is an array
    expect(Array.isArray(result)).toBe(true);
    // Make sure each time slot is either 'hh:00' or 'hh:30'
    result.forEach(slot => {
      expect(/(1[7-9]|2[0-3]):(00|30)/.test(slot)).toBe(true);
    });
  });
});

describe('submitAPI function', () => {
  test('returns true when formData is valid', () => {
    const formData = { /* Example form data */ };
    const result = submitAPI(formData);
    expect(result).toBe(true);
  });
});
