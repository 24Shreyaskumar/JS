'use strict';

/*
Classes :
1. between
2. btn again
3. number
4. left
5. guess
6. btn check
7. message
8. label-score
9. label-highscore
10. highscore
*/

console.log(document.querySelector('.message').textContent);

// // Changing the text content of the element with class 'message'
// document.querySelector('.message').textContent = '🎉 Correct Number!'

// // changing the text content of the element with class 'number'
// document.querySelector('.number').textContent = 13;

// //changing the text content of the element with class 'score'
// document.querySelector('.score').textContent = 10;

// // log the value of the input field with class name as 'guess' - should be empty initially
// console.log(document.querySelector('.guess').value);

// // Now change the value of the input field with class as guess to 23
// document.querySelector('.guess').value = 23;

// // Log the value again to confirm the change
// console.log(document.querySelector('.guess').value);

// Note: The above code only demonstrates how to manipulate DOM elements using JavaScript.
// It does not include any game logic or event handling.

let number = Math.trunc(Math.random() * 20) + 1;
// console.log(document.querySelector('.number').textContent);

console.log(number);

document.querySelector('.btn.check').addEventListener(
    'click', function () {
        const guessed = Number(document.querySelector('.guess').value);
        const score = Number(document.querySelector('.score').textContent);
        const highscore = Number(document.querySelector('.highscore').textContent);
        console.log(guessed, ' ', score, ' ', highscore);
        
        if (score < 4) {
            document.querySelector('.message').textContent = "You lost!"
            document.querySelector('.number').textContent = number;
            return 1;
        }

        if (guessed === number) {
            document.querySelector('.message').textContent = "🎉 Correct Number!";
            document.querySelector('.number').textContent = number;

            if (score > highscore)
                document.querySelector('.highscore').textContent = score;

            return 0;
        }

        else if (guessed > number) {
            if (score >= 4)
                document.querySelector('.message').textContent = "guess lower!"
            else {
                document.querySelector('.message').textContent = "You lost!"
                document.querySelector('.number').textContent = number;
            }
        }

        else {
            if (score >= 4)
                document.querySelector('.message').textContent = "guess higher!";
            else {
                document.querySelector('.message').textContent = "You lost!"
                document.querySelector('.number').textContent = number;
            }
        }

        document.querySelector('.score').textContent = score - 4;
        return 1;
    }
)

document.querySelector('.btn.again').addEventListener(
    'click', function () {
        document.querySelector('.guess').value = '';
        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('.score').textContent = 20;
        document.querySelector('.number').textContent = '?';
        number = Math.trunc(Math.random() * 20) + 1;
        console.log(number);
    }
)