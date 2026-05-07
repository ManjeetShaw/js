// const randomBool = Math.random() < 0.5;
// console.log(randomBool);




// coin flip
// function coinFlip() {
//   return Math.random() < 0.5 ? "Heads" : "Tails";
// }
// console.log(coinFlip());





// // Custom probability (e.g. 70% chance of true)
// function randomChance(percent) {
//   return Math.random() < percent / 100;
// }
// console.log(randomChance(70)); // true ~70% of the time
// console.log(randomChance(10)); // true ~10% of the time




// Random boolean array
const boolArray = Array.from({ length: 5 }, () => Math.random() < 0.5);
console.log(boolArray); // e.g. [true, false, true, true, false]

