function isPalindrome(str) {
  str = str.toLocaleLowerCase();
  let newStr = str.split("");
  let arr = newStr.reverse();
  let newArr = arr.join("");
  if (str === newArr) {
    return true;
  } else {
    return false;
  }
}
