process.stdin.setEncoding('utf8');

console.log('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', function (input) {
  const name = input.trim();

  console.log(`Your name is: ${name}`);

  console.log('This important software is now closing\n');
  process.exit();
});
