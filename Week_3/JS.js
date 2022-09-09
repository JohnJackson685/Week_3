let string = "String_Methods";
let length = string.length;

console.log(string)
console.log(length)
console.log(string, length)

let fruit = "Apple, Banana, Kiwi";
let slice1 = fruit.slice(3,7)
let slice2 = fruit.slice(-11, -7)
let substring = fruit.substring(3, 7)
let substr = fruit.substr(3, 7)

console.log(fruit)
console.log(slice1)
console.log(slice2)
console.log(substring)
console.log(substr)

let NewFruit = fruit.replace("Banana", "Mango");

console.log(NewFruit)
console.log(fruit)

let UpperFruit = fruit.toUpperCase();

console.log(UpperFruit)

let LowerFruit = fruit.toLowerCase();

console.log(LowerFruit)

let mango = "Mango";
let apple = "Apple";
let blue = "Blueberry";

let join = mango.concat(" , ", apple, ", ", blue);

console.log(join)

let char = string.charAt(3);
console.log(char)

const sports = ["Tennis", "Football", "Rugby"];
const number = [1, 60, 32, 12];

console.log(sports)
console.log(number)

let sportsjoin = sports.join(" and ");
console.log(sportsjoin)

sports.push("Golf");
console.log(sports)

number.sort();
console.log(number)

number.unshift(100, 48);
console.log(number)

number.reverse();
console.log(number)

let numtostring = number.toString();
console.log(numtostring)
