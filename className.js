let arr = ["link", "link", "link", "menu-item", "footer", "menu-item", "link"];

const classNames = (arr = []) => {
  const classNameObj = arr.reduce((acc, elem) => {
    acc[elem] = (acc[elem] || 0) + 1;
    return acc;
  }, {});

  let result = [];
  for (const [key, value] of Object.entries(classNameObj)) {
    result.push(key);
  }

  // let res = Object.keys(classNameObj).sort((a , b) => )

  return result;
};

console.log(classNames(arr));
