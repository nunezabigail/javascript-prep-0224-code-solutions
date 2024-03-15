/* exported reverse */
reverse = (array) => {
  const reverseElement = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reverseElement.push(array[i]);
  }
  return reverseElement;
};
