function makeCounter() {
    let count = 0;
    return {
        incremenet: () => ++count,
        decrement: () => --count,
        value: () => count
    };
}
const counter = makeCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.value());     // 1