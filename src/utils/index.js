export const compareBy = key => (a, b) => {
  if (a[key] < b[key]) return -1;
  if (a[key] > b[key]) return 1;
  return 0;
};

export const normalizeString = string =>
  string
    .normalize('NFD')
    .replace(/[^\w]/g, '')
    .toUpperCase();

export const createID = () => {
  return (
    '_' +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
};

export const createEmploy = ({
  name = '',
  company = '',
  salary = 0,
  age = 0,
  phone = '',
  email = ''
} = {}) => ({
  id: createID(),
  name,
  company,
  salary,
  age,
  phone,
  email,
  added: true
});
