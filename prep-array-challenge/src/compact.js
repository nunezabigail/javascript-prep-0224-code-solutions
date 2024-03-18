/* exported compact */
compact = (array) => {
  const compactElement = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      compactElement.push(array[i]);
    }
  }
  return compactElement;
};
