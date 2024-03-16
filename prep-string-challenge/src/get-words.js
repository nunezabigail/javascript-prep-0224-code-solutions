/* exported getWords */
getWords = (string) => {
  if (string === '') {
    return [];
  } else {
    return string.split(' ');
  }
};
