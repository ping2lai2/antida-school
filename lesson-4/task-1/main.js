/* eslint-disable no-undef */
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function guessNumber(n = 10, tries = 3) {
  const requiredNumber = Math.floor(Math.random() * n) + 1;

  console.log(`Please enter a number [0, ${n}]`);
  return function tryGuess() {
    if (tries === 0) {
      console.log(`You lose. Correct answer: ${requiredNumber}`);
      readline.close();
      return false;
    }
    readline.question(`${'❤ '.repeat(tries)}: `, input => {
      const inputNumber = parseInt(input);

      tries--;
      if (inputNumber === requiredNumber) {
        console.log('You won');
        readline.close();
        return false;
      } else if (tries > 0) {
        console.log(
          `NO n ${requiredNumber < inputNumber ? '<' : '>'} ${inputNumber}`
        );
      }
      tryGuess();
    });
  };
}

const checkLine = (line) => line.length ? parseInt(line) : undefined;

readline.question('choose n: ', n => {
  readline.question('choose tries: ', tries => {
    guessNumber(checkLine(n), checkLine(tries))();
  });
});
