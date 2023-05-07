const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const timer = (time)=> {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time * 1000);
};

rl.on('SIGINT', () => {
  console.log('Thanks for using me, ciao!');
  process.exit();
});

rl.on('line', (input) => {
  if (input === 'b') {
    process.stdout.write('\x07');
  } else if (Number(input) >= 1 && Number(input) <= 9) {
    console.log(`Setting timer for ${input} seconds...`);
    timer(input);
  } else {
    console.log('Invalid input. Please try again.');
  }
});

console.log('Press b to beep, or enter a number from 1 to 9 to set a timer.');
