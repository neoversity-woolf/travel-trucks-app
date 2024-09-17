export const filterFalseValues = obj => {
  const filteredEntries = Object.entries(obj).filter(
    ([key, value]) => value !== false && value !== null
  );

  return Object.fromEntries(filteredEntries);
};
