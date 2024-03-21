/* exported toObject */
toObject = (keyValuePair) => {
  const key = keyValuePair.shift();
  const value = keyValuePair.pop();
  let objPair = {};
  objPair[key] = value;
  return objPair;
};
