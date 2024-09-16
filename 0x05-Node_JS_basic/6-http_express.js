/**
 * Simple Express server that responds with a greeting on the root route.
 * Listens on port 1245 and logs server start.
 */

const express = require('express');

const app = express();
const PORT = 1245;

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
