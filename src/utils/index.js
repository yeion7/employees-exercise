export const compareBy = (key) => (a, b) => {
  if (a[key] < b[key]) return -1
  if (a[key] > b[key]) return 1
  return 0
}

export const normalizeString = string =>
  string
    .normalize('NFD')
    .replace(/[^\w]/g, '')
    .toUpperCase();
