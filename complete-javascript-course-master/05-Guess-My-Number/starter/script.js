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

let number = Math.trunc(Math.random() * 20) + 1;
// console.log(document.querySelector('.number').textContent);

console.log(number);

document.querySelector('.btn.check').addEventListener(
    'click', function () {
        const guessed = Number(document.querySelector('.guess').value);
        const score = Number(document.querySelector('.score').textContent);
        const highscore = Number(document.querySelector('.highscore').textContent);
        console.log(guessed, ' ', score, ' ', highscore);

        if (guessed === 'NaN' || guessed > 20 || guessed < 1) {
            document.querySelector('.message').textContent = "⛔ Not a valid Number! Guess Again!!"
            return 1;
        }
        
        if (score < 4) {
            document.querySelector('.message').textContent = "You lost!"
            document.querySelector('.number').textContent = number;
            return 1;
        }

        if (guessed === number) {
            document.querySelector('.message').textContent = "🎉 Correct Number!";
            document.querySelector('.number').textContent = number;
            document.querySelector('body').style.backgroundColor = '#60b347';

            if (score > highscore)
                document.querySelector('.highscore').textContent = score;

            return 0;
        }

        else if (guessed > number) {
            if (score >= 4)
                document.querySelector('.message').textContent = "📉 guess lower!"
            else {
                document.querySelector('.message').textContent = "You lost!"
                document.querySelector('.number').textContent = number;
            }
        }

        else {
            if (score >= 4)
                document.querySelector('.message').textContent = "📈 guess higher!";
            else {
                document.querySelector('.message').textContent = "🥱 Meh! You lost!"
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
        document.querySelector('body').style.backgroundColor = '#222';
        number = Math.trunc(Math.random() * 20) + 1;
        console.log(number);
        console.log()
    }
)