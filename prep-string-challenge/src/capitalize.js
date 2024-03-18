/* exported capitalize */
capitalize = (word) => {
  const capWord = word[0].toUpperCase() + word.substr(1).toLowerCase();
  return capWord;
};
