/* exported getValues */
getValues = (object) => {
  let valuesArr = [];
  for (let i in object) {
    valuesArr.push(object[i]);
  }
  return valuesArr;
};
