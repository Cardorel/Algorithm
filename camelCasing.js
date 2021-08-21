function solution(string) {
    return string.replace(/([A-Z])+/gm , ' $1');
  }

  console.log(solution('camelCasing')) // 'camel Casing'
  console.log(solution('camelCasingTest')) //'camel Casing Test'