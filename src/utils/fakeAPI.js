const seededRandom = seed => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;

  return () => (s = s * a % m) / m;
};

const generateRandomValues = (date, count) => {
  const random = seededRandom(date.getDate());
  const values = [];

  for (let i = 0; i < count; i++) {
    values.push(random());
  }

  return values;
};

const fetchAPI = date => {
  const result = [];
  const randomValues = generateRandomValues(date, 14);

  for (let i = 17; i <= 23; i++) {
    if (randomValues[i - 17] < 0.5) result.push(i + ':00');
    if (randomValues[7 + i - 17] < 0.5) result.push(i + ':30');
  }

  return result;
};

const submitAPI = formData => true;

export {
  fetchAPI,
  submitAPI
};
