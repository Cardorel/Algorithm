function anagrams(word, words) {
  return words.filter(
    (fWord) =>
      fWord.split("").sort().join("") === word.split("").sort().join("")
  );
}

const log = (val) => console.log(val);

//log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada', 'adfryg']));
//log(a);

//count number of letter
const countLetter = (letters = "dhgdhkd;owedwdefefef") =>
  letters.split("").reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

//log(countLetter());
