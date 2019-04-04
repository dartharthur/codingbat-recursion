/* https://codingbat.com/prob/p183649

We have a number of bunnies and each bunny has two big floppy ears.
We want to compute the total number of ears across all the bunnies recursively
(without loops or multiplication).

bunnyEars(0) → 0
bunnyEars(1) → 2
bunnyEars(2) → 4

*/

function bunnyEars(bunnies) {
  if (bunnies === 0) {
    return 0;
  } else {
    return 2 + bunnyEars(bunnies - 1);
  }
}

console.log(bunnyEars(0)); // 0
console.log(bunnyEars(1)); // 2
console.log(bunnyEars(2)); // 4
console.log(bunnyEars(3)); // 8
console.log(bunnyEars(4)); // 16
