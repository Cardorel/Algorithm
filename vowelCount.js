function getCount(str) {
    var vowelsCount = 0;
    const vowels = "aeiou";
    // enter your majic here
    str.split('').reduce((acc , val) => {
      if(vowels.indexOf(val) != -1) vowelsCount++;
      return acc;
    } , vowelsCount)
    return vowelsCount;
  }

  getCount("abracadabra");