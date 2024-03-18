/* exported setValue */
setValue = (object, key, value) => {
  key = key.split('.');
  let i = 0,
    l = key.length;
  for (; i < l - 1; ++i) {
    object = object[key[i]];
  }
  return (object[key[i]] = value);
};
