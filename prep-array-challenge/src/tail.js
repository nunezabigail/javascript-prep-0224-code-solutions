/* exported tail */
tail = (array) => {
  const tailElement = [];
  let a = 0;
  for (let i = 1; i < array.length; i++) {
    tailElement[a] = array[i];
    a++;
  }
  return tailElement;
};
