const http = require('http');

/**
 * Simple HTTP server that responds with "Hello Holberton School!"
 *
 * @constant {number} PORT - The port number the server listens on (1245).
 * @constant {string} HOST - The host address the server binds to ('localhost').
 *
 * The server:
 * - Responds to all requests with a 200 status code
 * - Sets Content-Type to 'text/plain'
 * - Sends "Hello Holberton School!" as the response body
 * - Logs a message to stdout when it starts listening
 *
 * @exports {http.Server} The created HTTP server instance
 */

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();

app.on('request', (_, res) => {
  const responseText = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);
  res.statusCode = 200;
  res.write(Buffer.from(responseText));
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
