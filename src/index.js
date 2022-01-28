module.exports = function check(str, bracketsConfig) {
  let arrRepeal = Object.fromEntries(bracketsConfig);
  let arr = [];
  for (let i of str.split('')) {
    if (arr && arrRepeal[arr[arr.length-1]] == i) {
      arr.pop(); 
      } else { 
        arr.push(...i); 
      }
  }
    return arr.length == 0;
}
