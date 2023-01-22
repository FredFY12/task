console.log(isEqualSymbols('адрес', 'среда')) // true 
console.log(isEqualSymbols('ноутбук', 'программист')) // false 

function isEqualSymbols(str1, str2) { 
 str1Sort = str1.split('').sort().join();
 str2Sort = str2.split('').sort().join();
 return str1Sort === str2Sort;
}





