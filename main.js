

console.log("Success");

// Premitive data type

let name = 'John'; // string literals
let age = 24; // Number Literals
let answer = true; //Boolean Literals
let color = null; // Null 
let list; // Undefined

name += ' Smith';

age *= 5;
console.log(age);

//Reference data Type
// Array Literals

const colors = ["red","black", "blue", "orange" ,"green "];

colors[5] = "yellow";
let firstColor = colors.shift();
console.log(firstColor);
console.log(colors);
console.log(colors.indexOf('yellow'));

const myArray = ["red", 15, null, false, [1,2,3]];
console.log(myArray[4][1]);

// Object Literals

let person = [
{
    firstName: 'John',
    lastName:'Smith',
    age: 30,
    pets:['dogs', 'cats'],
    address:{
        street: 'Adityapur',
        building : 7,
        state: "Jharkhand"
    }
},
    {
    firstName: 'Mary',
    lastName:'dawsonm',
    age: 24,
    pets:['parrot', 'monkey'],
    address:{
        street: 'Adityapur',
        building : 7,
        state: "Jharkhand"
    }
}
]

person.email = 'john@email.com';
//Bracet Notation
delete person.age;

console.log(person[1].pets[1]);

let key = person[1].firstName  ;

console.log(person[key]);
//dot notation
console.log(person[1].pets[1]);
console.log(person[1].address['street']);


let {firstName, lastName, address: {state}} = person[0];

console.log(firstName, lastName, state);

const peopleJSON = JSON.stringify(people);

console.log(peopleJSON);

