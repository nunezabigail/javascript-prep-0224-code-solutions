/* exported getKeys */
getKeys = (object) => {
  let keysArr = [];
  for (let i in object) {
    keysArr.push(i);
  }
  return keysArr;
};
