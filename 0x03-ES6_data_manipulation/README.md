0x03. ES6 data manipulation
===========================

This project focuses on mastering various data manipulation techniques using ES6, including handling arrays and objects efficiently through methods such as filter() for filtering, map() for mapping, and reduce() for reducing data sets. The aim is to enhance the ability to write clean and optimized JavaScript code to manipulate data structures easily for efficient data processing.

![Screenshot](https://i.postimg.cc/FsQRGmGw/meme-image.png)

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

-   [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
-   [Typed Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
-   [Set Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
-   [Map Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
-   [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

Learning Objectives :bulb:
-------------------------

At the end of this project, you are expected to be able to [explain to anyone](https://fs.blog/feynman-learning-technique/), **without the help of Google**:

-   How to use map, filter and reduce on arrays
-   Typed arrays
-   The Set, Map, and Weak link data structures

Requirements
------------

-   All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
-   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
-   All your files should end with a new line
-   A `README.md` file, at the root of the folder of the project, is mandatory
-   Your code should use the `js` extension
-   Your code will be tested using `Jest` and the command `npm run test`
-   Your code will be verified against lint using ESLint
-   Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`
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

Tasks :card_file_box:
=====================

Mandatory:
---------

### 0\. Basic list of objects

Create a function named `getListStudents` that returns an array of objects.

Each object should have three attributes: `id` (Number), `firstName` (String), and `location` (String).

The array contains the following students in order:

-   `Guillaume`, id: `1`, in `San Francisco`
-   `James`, id: `2`, in `Columbia`
-   `Serena`, id: `5`, in `San Francisco`

```js
bob@dylan:~$ cat 0-main.js
import getListStudents from "./0-get_list_students.js";

console.log(getListStudents());

bob@dylan:~$
bob@dylan:~$ npm run dev 0-main.js
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x03-ES6_data_manipulation`
-   File: `0-get_list_students.js`

### 1\. More mapping

Create a function `getListStudentIds` that returns an array of ids from a list of object.

This function is taking one argument which is an array of objects - and this array is the same format as `getListStudents` from the previous task.

If the argument is not an array, the function is returning an empty array.

You must use the `map` function on the array.

```js
bob@dylan:~$ cat 1-main.js
import getListStudentIds from "./1-get_list_student_ids.js";
import getListStudents from "./0-get_list_students.js";

console.log(getListStudentIds("hello"));
console.log(getListStudentIds(getListStudents()));

bob@dylan:~$
bob@dylan:~$ npm run dev 1-main.js
[]
[ 1, 2, 5 ]
bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x03-ES6_data_manipulation`
-   File: `1-get_list_student_ids.js`

### 2\. Filter

Create a function `getStudentsByLocation` that returns an array of objects who are located in a specific city.

It should accept a list of students (from `getListStudents`) and a `city` (string) as parameters.

You must use the `filter` function on the array.

```js
bob@dylan:~$ cat 2-main.js
import getListStudents from "./0-get_list_students.js";
import getStudentsByLocation from "./2-get_students_by_loc.js";

const students = getListStudents();

console.log(getStudentsByLocation(students, 'San Francisco'));

bob@dylan:~$
bob@dylan:~$ npm run dev 2-main.js
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x03-ES6_data_manipulation`
-   File: `2-get_students_by_loc.js`

### 3\. Reduce

Create a function `getStudentIdsSum` that returns the sum of all the student ids.

It should accept a list of students (from `getListStudents`) as a parameter.

You must use the `reduce` function on the array.

```js
bob@dylan:~$ cat 3-main.js
import getListStudents from "./0-get_list_students.js";
import getStudentIdsSum from "./3-get_ids_sum.js";

const students = getListStudents();
const value = getStudentIdsSum(students);

console.log(value);

bob@dylan:~$
bob@dylan:~$ npm run dev 3-main.js
8
bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x03-ES6_data_manipulation`
-   File: `3-get_ids_sum.js`

### 4\. Combine

Create a function `updateStudentGradeByCity` that returns an array of students for a specific city with their new grade

It should accept a list of students (from `getListStudents`), a `city` (String), and `newGrades` (Array of "grade" objects) as parameters.

`newGrades` is an array of objects with this format:

```js
  {
    studentId: 31,
    grade: 78,
  }

```

If a student doesn't have grade in `newGrades`, the final grade should be `N/A`.

You must use `filter` and `map` combined.

```js
bob@dylan:~$ cat 4-main.js
import getListStudents from "./0-get_list_students.js";
import updateStudentGradeByCity from "./4-update_grade_by_city.js";

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }]));

bob@dylan:~$
bob@dylan:~$ npm run dev 4-main.js
[
  {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
    grade: 86
  },
  { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
]
[
  {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
    grade: 'N/A'
  },
  { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
]
bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x03-ES6_data_manipulation`
-   File: `4-update_grade_by_city.js`

### 5\. Typed Arrays

Create a function named `createInt8TypedArray` that returns a new `ArrayBuffer` with an `Int8` value at a specific position.

It should accept three arguments: `length` (Number), `position` (Number), and `value` (Number).

If adding the value is not possible the error `Position outside range` should be thrown.

```js
bob@dylan:~$ cat 5-main.js
import createInt8TypedArray from "./5-typed_arrays.js";

console.log(createInt8TypedArray(10, 2, 89));

bob@dylan:~$
bob@dylan:~$ npm run dev 5-main.js
DataView {
  byteLength: 10,
  byteOffset: 0,
  buffer: ArrayBuffer {
    [Uint8Contents]: <00 00 59 00 00 00 00 00 00 00>,
    byteLength: 10
  }
}
bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x03-ES6_data_manipulation`
-   File: `5-typed_arrays.js`

### 6\. Set data structure

Create a function named `setFromArray` that returns a `Set` from an array.

It accepts an argument (Array, of any kind of element).

```js
bob@dylan:~$ cat 6-main.js
import setFromArray from "./6-set.js";

console.log(setFromArray([12, 32, 15, 78, 98, 15]));

bob@dylan:~$
bob@dylan:~$ npm run dev 6-main.js
Set { 12, 32, 15, 78, 98 }
bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x03-ES6_data_manipulation`
-   File: `6-set.js`

### 7\. More set data structure

Create a function named `hasValuesFromArray` that returns a boolean if all the elements in the array exist within the set.

It accepts two arguments: a `set` (Set) and an `array` (Array).

```js
bob@dylan:~$ cat 7-main.js
import hasValuesFromArray from "./7-has_array_values.js";

console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));

bob@dylan:~$
bob@dylan:~$ npm run dev 7-main.js
true
false
false
bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x03-ES6_data_manipulation`
-   File: `7-has_array_values.js`

### 8\. Clean set

Create a function named `cleanSet` that returns a string of all the set values that start with a specific string (`startString`).

It accepts two arguments: a `set` (Set) and a `startString` (String).

When a value starts with `startString` you only append the rest of the string. The string contains all the values of the set separated by `-`.

```js
bob@dylan:~$ cat 8-main.js
import cleanSet from "./8-clean_set.js";

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));

bob@dylan:~$
bob@dylan:~$ npm run dev 8-main.js
jovi-aparte-appetit

bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x03-ES6_data_manipulation`
-   File: `8-clean_set.js`

### 9\. Map data structure

Create a function named `groceriesList` that returns a map of groceries with the following items (name, quantity):

```js
Apples, 10
Tomatoes, 10
Pasta, 1
Rice, 1
Banana, 5

```

Result:

```
bob@dylan:~$ cat 9-main.js
import groceriesList from "./9-groceries_list.js";

console.log(groceriesList());

bob@dylan:~$
bob@dylan:~$ npm run dev 9-main.js
Map {
  'Apples' => 10,
  'Tomatoes' => 10,
  'Pasta' => 1,
  'Rice' => 1,
  'Banana' => 5
}
bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x03-ES6_data_manipulation`
-   File: `9-groceries_list.js`

### 10\. More map data structure

Create a function named `updateUniqueItems` that returns an updated map for all items with initial quantity at 1.

It should accept a map as an argument. The map it accepts for argument is similar to the map you create in the previous task.

For each entry of the map where the quantity is 1, update the quantity to 100. If updating the quantity is not possible (argument is not a map) the error `Cannot process` should be thrown.

```js
bob@dylan:~$ cat 10-main.js
import updateUniqueItems from "./10-update_uniq_items.js";
import groceriesList from "./9-groceries_list.js";

const map = groceriesList();
console.log(map);

updateUniqueItems(map)
console.log(map);

bob@dylan:~$
bob@dylan:~$ npm run dev 10-main.js
Map {
  'Apples' => 10,
  'Tomatoes' => 10,
  'Pasta' => 1,
  'Rice' => 1,
  'Banana' => 5
}
Map {
  'Apples' => 10,
  'Tomatoes' => 10,
  'Pasta' => 100,
  'Rice' => 100,
  'Banana' => 5
}
bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x03-ES6_data_manipulation`
-   File: `10-update_uniq_items.js`

Advanced:
------------

### 11\. Weak link data structure

Export a `const` instance of `WeakMap` and name it `weakMap`.

Export a new function named `queryAPI`. It should accept an endpoint argument like so:

```js
  {
    protocol: 'http',
    name: 'getUsers',
  }

```

Track within the `weakMap` the number of times `queryAPI` is called for each endpoint.

When the number of queries is >= 5 throw an error with the message `Endpoint load is high`.

```
bob@dylan:~$ cat 100-main.js
import { queryAPI, weakMap } from "./100-weak.js";

const endpoint = { protocol: 'http', name: 'getUsers' };
weakMap.get(endpoint);

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);

bob@dylan:~$
bob@dylan:~$ npm run dev 100-main.js
1
2
.../100-weak.js:16
    throw new Error('Endpoint load is high');
   ...
bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x03-ES6_data_manipulation`
-   File: `100-weak.js`

## Author

- **Peter Opoku-Mensah** ([@deezyfg](https://github.com/deezyfg)) - 
  [<img src="https://img.shields.io/badge/Portfolio-20d6fe.svg?&style=plastic"/>](https://peter-opoku-mensah.netlify.app)
  [<img src="https://img.shields.io/badge/Twitter-1DA1F2.svg?&style=plastic&logo=twitter&logoColor=white"/>](https://twitter.com/coded_issue)
  [<img src="https://img.shields.io/badge/LinkedIn-0A66C2.svg?&style=plastic&logo=linkedin&logoColor=white"/>](https://www.linkedin.com/in/opokumensahpeter/)
  [<img src="https://img.shields.io/badge/GitHub-181717.svg?&style=plastic&logo=github&logoColor=white"/>](https://github.com/deezyfg)