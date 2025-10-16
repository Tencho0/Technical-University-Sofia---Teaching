const i = 5;
const _NAMEOFOWNER = "ivan";
const NAME_OF_OWNER = "georgi";

let name = "ivan";
let number = 4
let secondNumber = "4";
let isActive = false

console.log(name); // Referrence in Java - System.OutPrint();
console.log(number); // Referrence in C# - Console.WriteLine();
console.log(isActive);
console.log(i);

if (isActive) {
    console.log("Hello from if! - is active is true");
} else if (number != 4) {
    console.log("Hello from else! - number is not 4");
} else if (secondNumber === 4) {
    console.log("Hello from second If");
} else {
    console.log("Nothing from above is true!");
}

let fruit = "Papayas";
switch (fruit) {
    case "Oranges":
        console.log("Oranges are $0.59 a pound.");
        break;
    case "Mangoes":
    case "Papayas":
        console.log("Mangoes and papayas are $2.79 a pound.");
        break;
    default:
        console.log(`Sorry, we are out of ${fruit}.`);
}

let string = "some string"; // For referrence In C#$""
let secString = 'sssss';
let thirdString = `sss`;

try {
    console.log(fourthString); // Throws runtime error    
}
catch (error) {
    console.log("Error was thrown.");
}

let object = { a: 5, b: 4, c: 3 };
for (let property in object) {
    console.log(`${property}: ${object[property]}`);
}

let fruits = ["Ivan", "Georgi", 4, false, "Mario"]; // For referrence in c# 0 new [4];
for (let i = 0; i < fruits.length; i++) {
    let element = fruits[i];
    console.log(element);
}

function ShowName(name) {
    console.log("This is from function");
    console.log(name);
}
ShowName("Georgi");

function ReturnFullName(name) {
    return `${name} ${name}ov`;
}
console.log(ReturnFullName("ivan"));