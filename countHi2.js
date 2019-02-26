/* https://codingbat.com/prob/p143900

Given a string, compute recursively the number of times lowercase "hi" appears in the string, 
however do not count "hi" that have an 'x' immedately before them.

countHi2("ahixhi") → 1
countHi2("ahibhi") → 2
countHi2("xhixhi") → 0

*/

function countHi2(str) {
    if (str === '') return 0;
    
    if (str[0] !== 'x') {
        if (str.substring(0, 2) === 'hi') {
            return 1 + countHi2(str.substring(2));
        } else {
            return countHi2(str.substring(1));
        }
    } else {
        if (str[1] === 'x') {
            return countHi2(str.substring(1));
        } else {
            return countHi2(str.substring(2));
        }
    }

}

console.log(countHi2('xxhi')); // 0
console.log(countHi2('xxihi')); // 1
console.log(countHi2('ahixhi')); // 1
console.log(countHi2('ahibhi')); // 2
console.log(countHi2('xhixhi')); // 0
