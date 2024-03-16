/* exported reverseWord */
reverseWord = (word) => {
  let revWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    revWord += word[i];
  }
  return revWord;
};
