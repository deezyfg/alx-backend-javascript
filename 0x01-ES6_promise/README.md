0x01. ES6 Promises
==================

This project focuses on understanding and implementing **ES6 Promises** in JavaScript. **Promises**, introduced in **ECMAScript 2015 (ES6)**, are a powerful feature designed to handle asynchronous operations more efficiently and in a more manageable and readable manner. In this project, you will learn how to create and manipulate Promises, utilize methods such as then, `catch`, and `finally`, and integrate `async/await` for cleaner and more concise code. This comprehensive exploration will equip you with the skills to handle asynchronous workflows effectively, ensuring your JavaScript code is efficient and maintainable.

![Screenshot](https://i.postimg.cc/rwXYxG89/Screenshot.png)

Technologies & Tools :computer:
-------------------------------

[![Jest](https://img.shields.io/badge/≡-Jest-C21325?logo=Jest&style=flat-square&labelColor=282828&logoColor=C21325)](https://jestjs.io/)
[![Git](https://img.shields.io/badge/≡-Git-F05032?logo=git&style=flat-square&labelColor=282828)](https://git-scm.com/)
[![Ubuntu](https://img.shields.io/badge/≡-Ubuntu-E95420?&style=flat-square&logo=Ubuntu&labelColor=282828)](https://ubuntu.com/)
[![Babel](https://img.shields.io/badge/≡-Babel-F9DC3E?logo=Babel&style=flat-square&labelColor=282828)](https://babeljs.io/)
[![JavaScript](https://img.shields.io/badge/≡-JavaScript-F7DF1E?logo=javascript&style=flat-square&labelColor=282828)](https://developer.mozilla.org/en-US/docs/Web/javascript)
[![GNU_Bash](https://img.shields.io/badge/≡-GNU_Bash-4EAA25?logo=GNU-Bash&style=flat-square&labelColor=282828)](https://www.gnu.org/software/bash/)
[![Node.js](https://img.shields.io/badge/≡-Nodejs-339933?logo=Node.js&style=flat-square&labelColor=282828)](https://nodejs.org/en/)
[![Vim](https://img.shields.io/badge/≡-Vim-019733?logo=Vim&style=flat-square&logoColor=019733&labelColor=282828)](https://www.vim.org/)
[![Vagrant](https://img.shields.io/badge/≡-Vagrant-1563FF?logo=vagrant&style=flat-square&logoColor=1563FF&labelColor=282828)](https://www.vagrantup.com/)
[![Emacs](https://img.shields.io/badge/≡-Emacs-7F5AB6?logo=GNU-Emacs&style=flat-square&labelColor=282828)](https://www.gnu.org/software/emacs/)
[![VS_Code](https://img.shields.io/badge/≡-VS_Code-007ACC?logo=visual-studio-code&style=flat-square&logoColor=007ACC&labelColor=282828)](https://code.visualstudio.com/)
[![ESLint](https://img.shields.io/badge/≡-ESLint-4B32C3?logo=ESLint&style=flat-square&labelColor=282828&logoColor=4B32C3)](https://eslint.org/)
[![GitHub](https://img.shields.io/badge/≡-GitHub-181717?logo=GitHub&style=flat-square&labelColor=282828)](https://github.com/)

Resources :books:
-----------------

**Read or watch**:

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
-   [JavaScript Promise: An introduction](https://web.dev/articles/promises)
-   [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
-   [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
-   [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

Learning Objectives :bulb:
-------------------------

At the end of this project, you are expected to be able to [explain to anyone](https://fs.blog/feynman-learning-technique/), **without the help of Google**:

-   Promises (how, why, and what)
-   How to use the `then`, `resolve`, `catch` methods
-   How to use every method of the Promise object
-   Throw / Try
-   The await operator
-   How to use an `async` function

Requirements
------------

-   All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
-   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
-   All your files should end with a new line
-   A `README.md` file, at the root of the folder of the project, is mandatory
-   Your code should use the `js` extension
-   Your code will be tested using `Jest` and the command `npm run test`
-   Your code will be verified against lint using `ESLint`
-   All of your functions must be exported

Setup 
-----

#### Prerequisites
Ensure you have `Node.js` (version `12.11.x` or higher) and `npm` installed on your system.

### Install NodeJS 12.11.x

- Open your terminal and run the following commands in your home directory:
```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

- Verify the installation by checking the versions:
```
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```

### Install and Run ESLint, Babel, and Jest
##### Installation
**1. In your project directory, install Jest, Babel, and ESLint by using the supplied** `package.json` **and run:**
```bash
npm install
```

**2. Install ESLint** (if not already included in `package.json`):
```bash
npm install --save-dev eslint
```

**3. Install Babel and related packages** (if not already included in `package.json`):
```bash
npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/cli
```

**4. Install Jest** (if not already included in `package.json`):
```bash
npm install --save-dev jest
```

#####  Running the Tools
###### ESLint:
**1. Run ESLint to check your code for lint errors:**
```bash
npm run lint
```
This command will run **ESLint** using the local installation in **`./node_modules/.bin/eslint`.

**2. Check specific files with ESLint:**
```bash
npm run lint <filename>
```
Replace `<filename>` with the actual filename you want to check.

**3. Check files matching a specific pattern:**
```bash
npm run check-lint
```

This command will run **ESLint** on files matching the pattern `[0-9]*.js` This pattern means:
- `[0-9]`: Any single digit from 0 to 9
- `*`: Zero or more occurrences of the preceding element
- `.js`: Literal characters for the file extension

So, put together, [0-9]*.js means:
"Match any file that starts with zero or more digits, followed by '.js'"

For example, this pattern would match filenames like `0.js`, `42.js`, `123.js`, but not `a.js`, `test.js` since it doesn't start with a digit or `1.txt` since it doesn't ent with `.js`.

###### Jest:
**1. Run Jest to test your code:**
```bash
npm run test
```
This command will execute all your Jest test cases.

**2. Run Jest on a specific file:**
```bash
npm run test <filename>
```
Replace `<filename>` with the actual filename you want to test.

###### Running Both ESLint and Jest:
**1. Run both ESLint and Jest for all files:**
```bash
npm run full-test
```

**2. Run both ESLint and Jest for a specific file:**
```bash
npm run full-test <filename>
```

These commands use the scripts defined in your `package.json` to perform linting and testing tasks efficiently. Make sure your `package.json` includes the necessary script definitions for these commands to work correctly.

Configuration Files
-------------------
Add the following configuration files in your project root directory:

### `package.json`: Project configuration and dependencies

> Click to show/hide file contents
```
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
```

### `babel.config.js`: Babel configuration

> Click to show/hide file contents
```
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

### `utils.js`: Utility functions

Use when you get to tasks requiring `uploadPhoto` and `createUser`.

> Click to show/hide file contents
```
export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}


export function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}
```

### `.eslintrc.js`: ESLint configuration

> Click to show/hide file contents
```
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
```

### and...

Don't forget to run `$ npm install` when you have the `package.json`

Response Data Format
--------------------

`uploadPhoto` returns a response with the format

```
{
  status: 200,
  body: 'photo-profile-1',
}

```

`createUser` returns a response with the format

```
{
  firstName: 'Guillaume',
  lastName: 'Salva',
}

```

Tasks :card_file_box:
---------------------

### 0\. Keep every promise you make and only make promises you can keep

Return a Promise using this prototype `function getResponseFromAPI()`

```js
bob@dylan:~$ cat 0-main.js
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);

bob@dylan:~$
bob@dylan:~$ npm run dev 0-main.js
true
bob@dylan:~$
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x01-ES6_promise`
-   File: `0-promise.js`

### 1\. Don't make a promise...if you know you can't keep it

Using the prototype below, return a `promise`. The parameter is a `boolean`.

```js
getFullResponseFromAPI(success)
```

When the argument is:

-   `true`
    -   resolve the promise by passing an object with 2 attributes:
        -   `status`: `200`
        -   `body`: `'Success'`
-   `false`
    -   reject the promise with an error object with the message `The fake API is not working currently`

Try testing it out for yourself

```js
bob@dylan:~$ cat 1-main.js
import getFullResponseFromAPI from './1-promise';

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));

bob@dylan:~$
bob@dylan:~$ npm run dev 1-main.js
Promise { { status: 200, body: 'Success' } }
Promise {
  <rejected> Error: The fake API is not working currently
    ...
    ...
bob@dylan:~$
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x01-ES6_promise`
-   File: `1-promise.js`

### 2\. Catch me if you can!

Using the function prototype below

```js
function handleResponseFromAPI(promise)
```

Append three handlers to the function:
-   When the Promise resolves, return an object with the following attributes
    -   `status`: `200`
    -   `body`: `success`
-   When the Promise rejects, return an empty `Error` object
-   For every resolution, log `Got a response from the API` to the console

```js
bob@dylan:~$ cat 2-main.js
import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
handleResponseFromAPI(promise);

bob@dylan:~$
bob@dylan:~$ npm run dev 2-main.js
Got a response from the API
bob@dylan:~$
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x01-ES6_promise`
-   File: `2-then.js`

### 3\. Handle multiple successful promises

In this file, import `uploadPhoto` and `createUser` from `utils.js`

Knowing that the functions in `utils.js` return promises, use the prototype below to collectively resolve all promises and log `body firstName lastName` to the console.

```js
function handleProfileSignup()
```

In the event of an error, log `Signup system offline` to the console

```js
bob@dylan:~$ cat 3-main.js
import handleProfileSignup from "./3-all";

handleProfileSignup();

bob@dylan:~$
bob@dylan:~$ npm run dev 3-main.js
photo-profile-1 Guillaume Salva
bob@dylan:~$
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x01-ES6_promise`
-   File: `3-all.js`

### 4\. Simple promise

Using the following prototype

```js
function signUpUser(firstName, lastName) {
}
```

That returns a resolved promise with this object:

```js
{
  firstName: value,
  lastName: value,
}
```

```js
bob@dylan:~$ cat 4-main.js
import signUpUser from "./4-user-promise";

console.log(signUpUser("Bob", "Dylan"));

bob@dylan:~$
bob@dylan:~$ npm run dev 4-main.js
Promise { { firstName: 'Bob', lastName: 'Dylan' } }
bob@dylan:~$
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x01-ES6_promise`
-   File: `4-user-promise.js`

### 5\. Reject the promises

Write and export a function named `uploadPhoto`. It should accept one argument `fileName` (string).

The function should return a Promise rejecting with an Error and the string `$fileName cannot be processed`

```js
export default function uploadPhoto(filename) {

}
```

```js
bob@dylan:~$ cat 5-main.js
import uploadPhoto from './5-photo-reject';

console.log(uploadPhoto('guillaume.jpg'));

bob@dylan:~$
bob@dylan:~$ npm run dev 5-main.js
Promise {
  <rejected> Error: guillaume.jpg cannot be processed
  ..
    ..
bob@dylan:~$
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x01-ES6_promise`
-   File: `5-photo-reject.js`

### 6\. Handle multiple promises

Import `signUpUser` from `4-user-promise.js` and `uploadPhoto` from `5-photo-reject.js`.

Write and export a function named `handleProfileSignup`. It should accept three arguments `firstName` (string), `lastName` (string), and `fileName` (string). The function should call the two other functions. When the promises are all settled it should return an array with the following structure:

```js
[
    {
      status: status_of_the_promise,
      value: value or error returned by the Promise
    },
    ...
  ]
```

```js
bob@dylan:~$ cat 6-main.js
import handleProfileSignup from './6-final-user';

console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));

bob@dylan:~$
bob@dylan:~$ npm run dev 6-main.js
Promise { <pending> }
bob@dylan:~$
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x01-ES6_promise`
-   File: `6-final-user.js`

### 7\. Load balancer

Write and export a function named `loadBalancer`. It should accept two arguments `chinaDownload` (Promise) and `USDownload` (Promise).

The function should return the value returned by the promise that resolved the first.

```js
export default function loadBalancer(chinaDownload, USDownload) {

}
```

```js
bob@dylan:~$ cat 7-main.js
import loadBalancer from "./7-load_balancer";

const ukSuccess = 'Downloading from UK is faster';
const frSuccess = 'Downloading from FR is faster';

const promiseUK = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, ukSuccess);
});

const promiseUKSlow = new Promise(function(resolve, reject) {
    setTimeout(resolve, 400, ukSuccess);
});

const promiseFR = new Promise(function(resolve, reject) {
    setTimeout(resolve, 200, frSuccess);
});

const test = async () => {
    console.log(await loadBalancer(promiseUK, promiseFR));
    console.log(await loadBalancer(promiseUKSlow, promiseFR));
}

test();

bob@dylan:~$
bob@dylan:~$ npm run dev 7-main.js
Downloading from UK is faster
Downloading from FR is faster
bob@dylan:~$
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x01-ES6_promise`
-   File: `7-load_balancer.js`

### 8\. Throw error / try catch

Write a function named `divideFunction` that will accept two arguments: `numerator` (Number) and `denominator` (Number).

When the `denominator` argument is equal to 0, the function should throw a new error with the message `cannot divide by 0`. Otherwise it should return the numerator divided by the denominator.

```js
export default function divideFunction(numerator, denominator) {

}
```

```js
bob@dylan:~$ cat 8-main.js
import divideFunction from './8-try';

console.log(divideFunction(10, 2));
console.log(divideFunction(10, 0));

bob@dylan:~$
bob@dylan:~$ npm run dev 8-main.js
5
..../8-try.js:15
  throw Error('cannot divide by 0');
  ^
.....

bob@dylan:~$
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x01-ES6_promise`
-   File: `8-try.js`

### 9\. Throw an error

Write a function named `guardrail` that will accept one argument `mathFunction` (Function).

This function should create and return an array named `queue`.

When the `mathFunction` function is executed, the value returned by the function should be appended to the queue. If this function throws an error, the error message should be appended to the queue. In every case, the message `Guardrail was processed` should be added to the queue.

Example:

```js
[
  1000,
  'Guardrail was processed',
]
```

```js
bob@dylan:~$ cat 9-main.js
import guardrail from './9-try';
import divideFunction from './8-try';

console.log(guardrail(() => { return divideFunction(10, 2)}));
console.log(guardrail(() => { return divideFunction(10, 0)}));

bob@dylan:~$
bob@dylan:~$ npm run dev 9-main.js
[ 5, 'Guardrail was processed' ]
[ 'Error: cannot divide by 0', 'Guardrail was processed' ]
bob@dylan:~$
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x01-ES6_promise`
-   File: `9-try.js`

### 10\. Await / Async

Import `uploadPhoto` and `createUser` from `utils.js`

Write an async function named `asyncUploadUser` that will call these two functions and return an object with the following format:

```js
{
  photo: response_from_uploadPhoto_function,
  user: response_from_createUser_function,
}
```

If one of the async function fails, return an empty object. Example:

```js
{
  photo: null,
  user: null,
}
```

```js
bob@dylan:~$ cat 100-main.js
import asyncUploadUser from "./100-await";

const test = async () => {
    const value = await asyncUploadUser();
    console.log(value);
};

test();

bob@dylan:~$
bob@dylan:~$ npm run dev 100-main.js
{
  photo: { status: 200, body: 'photo-profile-1' },
  user: { firstName: 'Guillaume', lastName: 'Salva' }
}
bob@dylan:~$
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x01-ES6_promise`
-   File: `100-await.js`

## Author

- **Peter Opoku-Mensah** ([@deezyfg](https://github.com/deezyfg)) - 
  [<img src="https://img.shields.io/badge/Portfolio-20d6fe.svg?&style=plastic"/>](https://peter-opoku-mensah.netlify.app)
  [<img src="https://img.shields.io/badge/Twitter-1DA1F2.svg?&style=plastic&logo=twitter&logoColor=white"/>](https://twitter.com/coded_issue)
  [<img src="https://img.shields.io/badge/LinkedIn-0A66C2.svg?&style=plastic&logo=linkedin&logoColor=white"/>](https://www.linkedin.com/in/opokumensahpeter/)
  [<img src="https://img.shields.io/badge/GitHub-181717.svg?&style=plastic&logo=github&logoColor=white"/>](https://github.com/deezyfg)