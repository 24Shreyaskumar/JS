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