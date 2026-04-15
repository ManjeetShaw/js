const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3252524374682643583727n


const heros = ["Spideman", "ironman", "Thor", "Loki"];
let myObj = {
    name: "Manjeet",
    age: 23,
}

// storing function in a variables

const myFunction = function() {
    conlose.log ("Hello World");
}
console.log(typeof myFunction);



// Primitive data type uses Stack Memory

// Non Primitive data type uses Heap Memory

let myYouTubename = "Termi07"

let anothername = myYouTubename

console.log(anothername)

//declaring two diff user using obj but getting same  output

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
