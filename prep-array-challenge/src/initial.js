/* exported initial */
initial = (array) => {
  const initialElement = [];
  let a = 0;
  for (let i = 0; i < array.length - 1; i++) {
    initialElement[a] = array[i];
    a++;
  }
  return initialElement;
};
