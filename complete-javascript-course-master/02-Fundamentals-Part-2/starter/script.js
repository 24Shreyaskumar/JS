'use strict';

/*
In strict mode, its necessary to declare a variable using let, const or var.
with strict mode, we can get a lot of hints for which lines have potential issue.

E.g.

let num = 10;
const flag = true

if (flag) nums = 12
console.log(num);

Now in the above snippet, if strict mode is not enabled, then a new nums will be declared and initialized without having to define it using let, const or var. 

And if we look carefully, this is a major issue, as even typos will be treated as new variables.

So instead of nums, if we really meant num, and nums was just a typo, then my friend it will be hours or even days to figure out what's exactly wrong in complex developer codebase, if strict isn't enabled.

But if we use strict mode, it immediately will raise an error on nums=12 line, as nums was never declared using let, const or var.

That's how strict mode makes life easier for developers and reduce the scope of typo bugs.
*/

console.log("----------------------------------------");
console.log("Chapter 1 - Functions");

// Declare the function
function logger(log_type, log_message) {
    //log_type can be INFO, ERROR, WARNING
    console.log(`${log_type} : ${log_message}`);
    return;
}

// Invoke / call the function
logger("INFO", "First INFO Log Message!");

function fruitProcessor(apples, oranges) {
    logger("INFO", `no. of apples : ${apples}, no. of oranges : ${oranges}`);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const juice = fruitProcessor(5, 1);
console.log(juice);

console.log("----------------------------------------");
console.log("Exercise 1 - Functions");

console.log("Task 1 : Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'");

function describeCountry(country, population, capitalCity) {
    console.log(`${country} has ${population} people and its capital city is ${capitalCity}`);
}

console.log("TASK 2 : Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console.");

describeCountry("India", "1465 million", "New Delhi");
describeCountry("Finland", "6 million", "Helsinki");
describeCountry("Portugal", "11 million", "Lisbon");

// Alternative way of declaring functions -

const func = function (name) {
    return `My name is ${name}`;
}

console.log(func('Shreyas'))

// functions can be called before even defining first, so the order of function calls and function definitions doesn't really matter in JS


console.log("----------------------------------------");
console.log("Chapter 2 - Arrow Functions");

const curYr = 2025; //Number(prompt("What year is this?"));

// Arrow function declaration :
const age = birthYear => curYr - birthYear;

const birthYear = 2002; //Number(prompt("What is your birth year?"));
const myAge = age(birthYear);
console.log(`You are ${myAge} years old!`);

// If you have more loc for the function block, then you will need the curly braces
const retirementAge = 60;
const yearsUntilRetirement = birthYear => {
    const yrsLeft = retirementAge - age(birthYear);
    return yrsLeft;
}

console.log(`${yearsUntilRetirement(birthYear)} years left until your retirement!!`);


console.log("----------------------------------------");
console.log("Exercise 2 : Functions");

console.log("TASK : The world population is 7900 million people. Create a function called percentageOfWorld1 which receives a population value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.")

const worldPopulation = 7900;

// function declaration -
// function percentageOfWorld1(population) {
//     return population / 79;
// }

// function expression -
// const percentageOfWorld1 = function (population) {
//     return population / 79;
// }

// arrow function -
const percentageOfWorld1 = population => population / 79;

// console.log(`Population percentage of ${prompt("Enter a country name : ")} is ${percentageOfWorld1(1441)}`);
// console.log(`Population percentage of ${prompt("Enter a country name : ")} is ${percentageOfWorld1(1465)}`);
// console.log(`Population percentage of ${prompt("Enter a country name : ")} is ${percentageOfWorld1(11)}`);


console.log("----------------------------------------");
console.log("Exercise 3 : Function calling other functions");

console.log("TASK : Create a function called describePopulation. Use the function type you like the most. This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.")

const describePopulation = (country, population) => {
    const populationPercentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${populationPercentage} of the world`;
}

console.log(describePopulation('China', '1441'));
console.log(describePopulation('India', '1465'));
console.log(describePopulation('Portugal', '11'));



console.log("----------------------------------------");
console.log("Chapter 3 - Introduction to arrays");

// 1st way
const friends = ['Ekpreet', 'Sahil', 'Sagar'];
console.log(friends);

// 2nd way
const byrs = new Array(2002, 2001, 1997);
console.log(byrs);

console.log(friends[0]);
console.log(byrs.length);
console.log(friends[friends.length - 1]);

friends[0] = 'Ekpreet NN';
console.log(friends);


console.log("----------------------------------------");
console.log("Chapter 4 - Basic Array Operations (Methods)");

// Adding and removing elements
// 1. push() - add elements to the end, return new length of array
// 2. unshift() - add elements to the beginning, return new length of array
// 3. pop() - remove last element, return removed element
// 4. shift() - remove first element, return removed element

const cur_len = friends.push('Anmol');
console.log(friends, cur_len);

friends.unshift('Shreyas')
console.log(friends);

const popped = friends.pop();
console.log(friends, popped);

const shifted = friends.shift();
console.log(friends, shifted);

// indexOf() - returns the index of the element, -1 if not found
console.log(friends.indexOf('Sahil'));
console.log(friends.indexOf('Bob'));

// a new way of checking if an element is present in the array or not (ES6 feature)
// includes() - returns true if present, false otherwise
console.log(friends.includes('Sagar'));
console.log(friends.includes('Bob'));

// includes() uses strict equality (===) for comparison
friends.push(23);
console.log(friends.includes('23')); // false
console.log(friends.includes(23));   // true

friends.includes('Sagar') ? console.log('You have a friend called Sagar') : console.log('You dont have a friend called Sagar');


console.log("----------------------------------------");
console.log("Chapter 5 - Objects");

// Objects kind of looks like dictionaries in python
// Key-Value pairs
const shreyas = {
    firstName: 'Shreyas',
    lastName : 'Sharma',
    age      : 2025 - 2002,
    job      : 'Software Engineer',
    friends  : ['Ekpreet', 'Sahil', 'Sagar']
};

console.log(shreyas);

// These keys are also called properties of the object
console.log(shreyas.firstName); //accessing using dot notation
console.log(shreyas['lastName']); // accessing using bracket notation

// The advantage of bracket notation is that we can use expressions inside the brackets, e.g.
console.log(shreyas['first' + 'Name']);

// Prompting user to enter the property they want to access
// const info = prompt('What do you want to know about Shreyas? (firstName, lastName, age, job, friends)');
// alert(shreyas[info] ? shreyas[info] : 'Uh ooh! Shreyas doesnt want you to know that!');

// in the above line, we cannot use dot notation like shreyas.info, because info is a variable here, not the actual property name

// Adding new properties to the object
shreyas.location = 'Pune';
shreyas['qualification'] = 'B.Tech CSE';
console.log(shreyas);

// Exercise
// "Shreyas has 3 friends, and his best friend is called Ekpreet"
console.log(`${shreyas.firstName} has ${shreyas.friends.length} friends, and hist best friend is called ${shreyas.friends[0]}`);

// Refer https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence for operator precedence in JS and associativity.


console.log("----------------------------------------");
console.log("5.2 - Object Methods")


// we can also add functions definations as values inside objects and such functions are called methods -

const shreyas2 = {
    firstName: 'Shreyas',
    lastName : 'Sharma',
    birthYear : 2002,
    job      : 'Software Engineer',
    age      : curYr => curYr - this.birthYear, //arrow function as method,
    age2    : function(curYr) { // regular function as method
        console.log(this); // 'this' keyword refers to the calling object
        this.age3 = curYr - this.birthYear; // adding new property to the object using 'this' keyword
        return this.age3;
    }
}

console.log(shreyas2.age()); // undefined, because birthYear is not defined in the scope of the arrow function
console.log(shreyas2['age2'](2025));
console.log(shreyas2.age3);

//Exercise
// "Shreyas is a 23-year old Software Engineer, and he has a/no driver's license"

shreyas2.hasDriverLicense = shreyas2.age3 >= 18;

console.log(`${shreyas2.firstName} is a ${shreyas2.age3} year old ${shreyas2.job}, and he has ${shreyas2.hasDriverLicense ? 'a' : 'no'} driver's license`);

//Note: Arrays are also objects in JS, so they can also have methods.
