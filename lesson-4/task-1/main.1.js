const notStarted = () => console.log('the game did not start');

let guess = notStarted;

function guessNumber(n, tries) {
  const requiredNumber = Math.floor(Math.random() * n) + 1;
  
  console.log(`Please enter a number [0, ${n}]`);
  return function tryGuess(inputNumber) {
    tries--;
    if (tries === 0) {
      console.log(`You lose. Correct answer: ${requiredNumber}`);
      guess = notStarted;
    }

    if (inputNumber === requiredNumber) {
      console.log(`${'❤ '.repeat(tries)}: You won`);
      guess = notStarted;
    } else if (tries > 0) {
      console.log(
        `${'❤ '.repeat(tries)}: NO n ${
          requiredNumber < inputNumber ? '<' : '>'
        } ${inputNumber}`
      );
    }
  };
}

function start(n = 10, tries = 3) {
  guess = guessNumber(n, tries);
}
