/* exported isVowel */
isVowel = (char) => {
  const vowelChar = 'aeiouAEIOU'.indexOf(char) != -1;
  return vowelChar;
};
