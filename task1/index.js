const numbers = [];

for(i = 1016; i<=1937; i++) {
  numbers.push(i)
}

const verifiedNumbers = [];

numbers.forEach((value) => {
    if(value % 3 == 0 && value % 7 == 0){
      if(!(value % 5 == 0) && !(value % 2 == 0)){
        return verifiedNumbers.push(value);
      }
    }
})

console.log(`Номер выигрышного билета ${verifiedNumbers[verifiedNumbers.length-1]}`)