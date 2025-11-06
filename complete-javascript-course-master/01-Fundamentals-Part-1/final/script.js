console.log("---------------------------------------------------------")
console.log("Practice & Learning - 1!")

let js = 'amazing';
//if (js === 'amazing') alert('Javascript is FUN!')

console.log(40 + 8 + 23 - 10);

let firstName = "Shreyas";
console.log(firstName);


/*
Variable name rules -  
- for naming convention, its standard practice to use Camel Case. E.g. firstName
- variable name cannot start with numbers
- variables names should contain only numbers, letters, _, $.
- variable names should not be same as some reserved keyword in JS. E.g. new
- practice to give meaningful variable names
- you can define multiple varirables in a single line using comma seperation, E.g - let x = 10, y = 5;
*/

let shreyas_kumar = "SK";
let $num = 27;


console.log(firstName);
console.log(shreyas_kumar);
console.log($num);

console.log("---------------------------------------------------------")

// Assignment 1
console.log("ASSIGNMENT 1")

// Task 1 - Declare variables called country, continent and population and assign their values according to your own country (population in millions).
console.log("Task 1 - Declare variables called country, continent and population and assign their values according to your own country (population in millions).")

let country = "India";
let continent = "Asia";
let population = "1465 Million";

console.log("Task 2 - log their values to the console")
console.log(country)
console.log(continent)
console.log(population)



console.log("---------------------------------------------------------")
console.log("Practice & Learning - 2!")

/*
7 Primitive Data Types -
1. Number
2. String
3. Boolean
4. Undefined
5. NULL
6. Symbol (ES2015) - no longer reqd.
7. BigInt

In Javascript the value has the type, not the variable.
typeof command can be used to find the type of the value stored in the variable
Javacript uses dynamic typing - meaning a variable can be updated with any data type.
*/

let $flag = true;
console.log(typeof true);
console.log(typeof $flag);
console.log(typeof 23);
console.log(typeof population);

// Dynamic writing below -
$flag = 0;
console.log(typeof $flag)

// undefined -
let yr;
console.log(typeof yr);

// null - 
console.log(typeof null)

//Note that typeof null is shown as object on console, which is an age old bug and is not changed for legacy reasons.

console.log("---------------------------------------------------------")

// Assignment 2
console.log("ASSIGNMENT 2")

// Task 1 - Declare a variable called isIsland and set its value acc to your country. The variable should hold a Boolean value. Also declare a value language, but don't assign it any value yet.
console.log("Task 1 - Declare a variable called isIsland and set its value acc to your country. The variable should hold a Boolean value. Also declare a value language, but don't assign it any value yet.")

let isIsland = false;
let language;

// Task 2 - log the type of isIsland, population, country and language to the console.
console.log("Task 2 - log the type of isIsland, population, country and language to the console")
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);



console.log("---------------------------------------------------------");
console.log("Practice & Learning - 3!");

console.log("We use 'let' keyword to declare variables that should be mutable");
let age = 22;
console.log("age : ", age);
age = 23;
console.log("age : ", age);
console.log("Notice how the value of age mutates from 22 to 23. Thats why we used let keyword\n");

console.log("We must use 'const' keyword for variables whose value must be immutable");
const birthYear = 2002;
console.log("birth year : ", birthYear);
console.log("Now if we try changing the value of birthYear variable, we will get a Type Error");
// birthYear = 2003;
// console.log("birth year : ", birthYear);

console.log("Kindly note that there is a third way of declaring variables and that is using 'var' keyword. This keyword is mostly used in older JS versions and is found in legacy codes.");

console.log("Here's a secret, you dont even need 'let', 'const' or 'var' for declaring variables. You can directly write the variable name");
variable = "this is a variable of type string without using let, const, var";
console.log(variable);

console.log("---------------------------------------------------------");

//ASSIGNMENT 3
console.log("ASSIGNMENT 3");

console.log("TASK 1 - Set the value of language to the language spoken where you live");
language = "Hindi";
console.log(language);

console.log("Task 2 - Think about which variable should be const variable. Then, change these variables to const");
const gender = "Male";
console.log("Gender : ", gender);

console.log("Task 3 - Try to change one of the changed variables now and see what happends");
// gender = "male";
// console.log("Gender : ", gender);



console.log("---------------------------------------------------------");
console.log("Practice & Learning - 4!");
console.log("Operators in JS")

const cur_yr = 2025;
const my_age = cur_yr - 2002;
const bro_age = cur_yr - 1999;

console.log("calculated age using '-' operator - my age :", my_age, ", bro's age : ", bro_age);
console.log("Operations on the ages - product : ", my_age * bro_age, " divide : ", bro_age / my_age);
console.log("Power representation : for 2 power 3, in JS its represented as 2 ** 3 : ", 2 ** 3);

// String concatenation using + operator
const firstname = "Shreyaskumar";
const lastname = "Sharma";
console.log("String concatenation using '+' : ", firstname + " " + lastname);

// Assignment operators, '=', '+=', '-=', '*='. '/=', '++', '--' etc
console.log("Assignment operators - '=', '+=', '-=', '*='. '/=', '++', '--' etc")
let x = 10 + 5;
console.log(x);
x += 10;
console.log(x);
x *= 2;
console.log(x);
x %= 3;
console.log(x);
x++;
console.log(x);

// Comparison operators - >, <, ===, <=, >=, etc
console.log("Comparison opertors - >, <, ==, <=, >=, etc");
console.log(my_age < bro_age);
console.log(my_age >= 25);

// order precedence
console.log("There is a well defined operator precedence in JS. Refer to mdn docs on browser")
let y;
x = y = 25 - 10 + 500;
console.log("Right to left assignment - ", x, ' ', y)


console.log("---------------------------------------------------------");

//ASSIGNMENT 4
console.log("ASSIGNMENT 4");

population = 1.465

console.log("TASK 1 - If your country split in half, and each half would contain half the population, then how many people would live in each half?");
console.log(population / 2);

console.log("TASK 2 - Increase the population of your country by 1 and log the result to the console.");
population1 = population * 1000000000 + 1;
console.log(population1);

console.log("TASK 3 - Finland has a population of 6 million. Does your country have more people than Finland?");
console.log(population*1000 > 6);

console.log("TASK 4 - The average population of a country is 33 million people. Does you country have less people than the average country?");
console.log(population*1000 > 33);

console.log("TASK 5 - Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.");
let description = country + " is in " + continent + ", and its " + population*1000 + " million people speak " + language;
console.log(description);



console.log("---------------------------------------------------------");
console.log("Practice & Learning - 5!");
console.log("Strings and Template literals");

const name = 'Shreyaskumar';
const job = 'Software Engineer';
const birthyear = 2002;
// const now = 2025; 

//String Template format-
const myDesc = `I'm ${name}, a ${cur_yr - birthyear} year old ${job}.`;
console.log(myDesc);

// Multiline string (old method, before ES6)
console.log('This is a \n\
multiline string using backslash n, mostly used before ES6.');

// Same but with string template
console.log(`This is a
multiline string, using string template, used now post ES6 updates.`);


console.log("---------------------------------------------------------");

//ASSIGNMENT 5
console.log("ASSIGNMENT 5");

console.log(`Recreate the description variable from the last assignment, this time using string template literal syntax`)

// let description = country + " is in " + continent + ", and its " + population*1000 + " million people speak " + language;

description = `${country} is in ${continent}, and its ${population*1000} million people speak ${language}`;
console.log(description);


console.log("---------------------------------------------------------");
console.log("Practice & Learning - 6!");
console.log("Taking Decisions : if / else statements");

const age_limit = 18;
const bro_name = 'Noob'
const his_age = 17;

if (my_age >= age_limit) {
    console.log(`${firstName} is old enough to drive 👍`);
}

else {
    console.log(`${firstName} is not old enough to drive 👎`);
}

if (his_age >= age_limit) {
    console.log(`${firstName} is old enough to drive 👍`);
}

else {
    console.log(`${bro_name} is not old enough to drive 👎`);
}

//Scope
console.log("The scope of a variables declared inside an if or else block, is limited to that block and cannot be accessed outside that block. So unless you dont require that variable, declare the variable outside these blocks.")

let gen;
if (birthYear <= 2003) {
    gen = "not gen-z";
} else {
    gen = "gen-z";
}
console.log(gen);


console.log("---------------------------------------------------------");

//ASSIGNMENT 6
console.log("ASSIGNMENT 6");
console.log(`TASK 1 - If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).`)

if (population*1000 > 33) {
    console.log(`${country}'s population is ${population*1000 - 33} million above average.`)
} else {
    console.log(`${country}'s population is ${33 - population*1000} million below average.`)
}



console.log("---------------------------------------------------------");
console.log("Practice & Learning - 7!");
console.log("Type conversion and coersion");


// 1. Type Conversion -
const inputYr = "1991";
console.log(typeof inputYr);
console.log(typeof Number(inputYr));
let iyr = Number(inputYr);
console.log(iyr)

//Try converting a sting containing a non number to number
console.log(Number('Shreyas'));

//One thing to note here is that if you do typeof Number('Shreyas') you will get output as Number, even though its NaN. The thing is if you do typeof NaN, then also it shows number. Weird right!

// Convert number to string
console.log(String(my_age));


// 2. Type Coercion -
// JS internally applies type coercion on strings when you use + operator (application - use string and numbers as combination) - E.g. given below
let out = 'I am ' + 23 + " yrs old";
console.log(out);

// in the above example the typeof 23 is number, but when you use the + operator for a string and a number, then by default the type will be coerced internally by JS to convert the number to string.

// But what will happen if you use - operator now 
out = '23' - '10' - '3';
console.log(out);

// lol, now JS will convert the string '23' and '10' to numbers because of - operator

// Let's complicate things a little more -
out = '23' + '10' * '10' - 5 / '5';

//what happens under the hood, based on operator precedence-
// 1. 10 * 10 = 100
// 2. 5 / 5 = 1
// 3. string concatenation on '23' and '100' because of + operator - '23' + '100' = 23100
// 4. 23100 - 1 = 23099
// so out should be 23099 

console.log(out)


console.log("---------------------------------------------------------");

//ASSIGNMENT 7
console.log("ASSIGNMENT 7");

console.log('Predict the result of these 5 operations without executing them:')
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> 617
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143



console.log("---------------------------------------------------------");
console.log("Practice & Learning - 8!");
console.log("Truthy and Falsy values");

console.log(`When converting 0, '', undefined. null, NaN to boolean - they will convert to False
All the rest will be converted to True`)

console.log(Boolean(Number('Shreyas')));
//Number('Shreyas') -> NaN, hence Boolean(NaN) -> false

console.log(Boolean(23));

// While using logical operators or in condional statements, JS implicitly uses type coercion to convert any value into Boolean. So we dont need to call the Boolean() function explicitly.

out = 23 && Number('Shreyas')
console.log(out)

// in case of && -> output will be the first falsy operand or the last operand in case all truthy.
// in case of || -> output will be the first truthy operand or the last operand in case all falsy.



console.log("---------------------------------------------------------");
console.log("Practice & Learning - 9!");
console.log("Equality operators");

console.log("=== will do strict checking, meaning no type coercion. e.g. '18' === 18 will result in a false")
console.log("on the other hand == will allow loose checking, meaning it will compare values with type coercion allowed, e.g '18' == 18 will result in a true")

console.log("'18' === 18 : ", '18' === 18)
console.log("'18' == 18 : ", '18' == 18)

const fav = prompt("What's your favourite number?")
console.log(fav);
console.log(typeof fav);

console.log(fav === 23);
console.log(fav == 23);


console.log("---------------------------------------------------------");
//ASSIGNMENT 9
console.log("ASSIGNMENT 9");

//console.log("Task 1 : Declare a variable numNeighbours based on a prompt input")

const numNeighbours = prompt("How many neighbouts countries does your country have?");
if (numNeighbours == 1) console.log("Only 1 border!")
else if (numNeighbours > 1) console.log("More than 1 border!")
else console.log("No border")



console.log("---------------------------------------------------------");
console.log("Practice & Learning - 10!");
console.log("Boolean Logic");

// The AND, OR & NOT
console.log("For this part, let's define a problem statement - Based on these factors - is tired, has driver's license, has good vision - determine if a person names Sarah can drive")

const hasDriverLicense = prompt("Does Sarah has a Driver's license? (Yes / No)") == 'Yes'
const hasGoodVision = prompt("Does Sarah has good vision? (Yes / No)") == 'Yes'
const isTired = prompt("Is Sarah tired? (Yes / No)") == 'Yes'


if (hasDriverLicense && hasGoodVision && !(isTired))
    alert("Sarah can drive!!!")

else if (hasDriverLicense && hasGoodVision)
    alert("Sarah can drive, but is tired now!!!")

else
    alert("Sarah cannot drive!!!")


console.log("---------------------------------------------------------");
//ASSIGNMENT 9
console.log("ASSIGNMENT 10")

// console.log("Task 1 : Comment out previous code, so it doesn't get in the way")
console.log("Task 1 : Let's say Sarah is looking for a new country to live in. She want to live in a country that speaks English, has less than 50 million people and is not an island")

country = prompt("Which country does Sarah need to move into?")
isEnglishSpoken = prompt(`Is English spoken in ${country}? (Yes / No)`)
population = Number(prompt(`What is ${country}'s population? (in millions)`))
isIsland = prompt(`Is ${country} an island? (Yes / No)`)

if (isEnglishSpoken == 'Yes' && population < 50 && isIsland == 'No')
    alert(`Sarah can live in ${country}!`)
else
    alert(`Sarah cannot live in ${country}!`)


console.log("---------------------------------------------------------");
console.log("Practice & Learning - 11!");
console.log("Switch Statements")

day = prompt("What day is it today?")

switch (day) {
    case 'Monday':
        alert('Work and learn JS!')
        break
    case 'Tuesday':
        alert("Attend Ben's weekly ASRM meeting!")
        break
    case 'Wednesday':
        alert("Attend Transformers Weekly Huddle!")
        break
    case 'Thursday':
        alert("Work on finishing sprint tasks")
        break
    case 'Friday':
        alert("Continue progress with JS")
        break
    case 'Saturday':
    case 'Sunday':
        alert("Enjoy your weekend!!!")
        break
    default:
        alert(`${day} day doesn't exist on this Earth! Go back to yours, imposter!`)
        break
}


console.log("---------------------------------------------------------");
//ASSIGNMENT 11
console.log("ASSIGNMENT 11")

console.log("Use the switch statement to log the following string for the given language")

language = prompt("What language do you speak?")

switch (language) {
    case 'Chinese':
    case 'Mandarin':
        alert("MOST number of native speakers!")
        break
    case 'Spanish':
        alert("2nd place in number of native speakers")
        break
    case 'English':
        alert("3rd place")
        break
    case 'Hindi':
        alert("Number 4")
        break
    case 'Arabic':
        alert("5th most spoken language")
        break
    default:
        alert("Great language too :D")
        break
}



console.log("---------------------------------------------------------");
console.log("Practice & Learning - 12!");
console.log("Conditional ternary operator")

age = prompt("What's your age?")
work = age >= 18 ? alert("Old enough to earn via labor!") : ("Child labor is prohibited")
console.log(work)

console.log("---------------------------------------------------------");
//ASSIGNMENT 12
console.log("ASSIGNMENT 12")

console.log(`Task 1 : If your country's population is greater than 33 million, use the ternary operator to log a string like this to the console: "Portugal's population is above average". Otherwise, simply log "Portugal's population is below average". Notice how only one word change between these two sentences!`)

population > 33 ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`)