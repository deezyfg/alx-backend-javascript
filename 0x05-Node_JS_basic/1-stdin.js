/**
 * Interactive CLI program that prompts for user's name and displays it.
 * Uses process.stdin for input and process.stdout for output.
 * Displays a closing message when the program ends.
 * @returns {void}
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
})
