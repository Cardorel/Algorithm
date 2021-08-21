//count each characters
//loup of obj (key + val)

const stringCompression = ((str)=>{
  //create obj
  let tmp = "";
  const obj = str.split('').reduce((acc , val)=>{
      acc[val] = (acc[val] || 0) + 1;
   return acc;
  }, {})

  for (const val in obj) {
    tmp += val + obj[val];
  }

  return tmp;
})("aabbbbnnnccccyuuo")


console.log(stringCompression);