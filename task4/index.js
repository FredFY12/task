function isPalindrome(str){
  str = str.toLowerCase()
  return str === str.split('').reverse().join('')
}

console.log(isPalindrome('racecar'));
console.log(isPalindrome('programmer'));