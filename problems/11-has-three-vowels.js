/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

// let hasThreeVowels = function(string) {
//     let vowels = "aeiou";
//     let count = 0;
//     let usedVowels = { a: false, e: false, i: false, o: false, u: false }
//     let splitStr = string.split(' ');
//     let filteredStr = splitStr.map(function(value){
//         for (let char of value) {
//             if(vowels.includes(char) && !usedVowels[char]) {
//                 count++
//                 usedVowels[char] = true;
//             }
//         }
//         if(count >= 3){
//             return true;
//         }
//         return false;
//     })
//     return filteredStr.join(' ');
// };
function hasThreeVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const uniqueVowels = [];
    
    str.toLowerCase().split('').forEach(char => {
      if (vowels.includes(char) && !uniqueVowels.includes(char)) {
        uniqueVowels.push(char);
      }
    });
    
    return uniqueVowels.length >= 3;
  }


console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
