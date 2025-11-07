// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// trying out prettier
const x = 23;

// trying out code snippets
console.log("typed cl to check console.log");

// Debugging techniques -
// 1. console.log()
// 2. debugger keyword
// 3. breakpoints in browser dev tools


// Coding challenge #1
/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.
Test data:
Data 1: [17, 21, 23]
Data 2: [12, 5, -5, 0, 4]
GOOD LUCK 😀
*/


const printForecast = arr => {
    let str = '... ';

    for (let i = 0; i < arr.length; i++)
        str += `${arr[i]}ºC in ${i + 1} days ...`;

    return str;
}

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(printForecast(data1));
console.log(printForecast(data2));

