# 0x00. ES6 Basics
This project focuses on understanding and utilizing the new features introduced in **ECMAScript 6 (ES6)**, also known as **ECMAScript 2015** to write cleaner and more efficient JavaScript code. It covers various concepts and provides hands-on tasks to reinforce learning.

## Concepts
For this project, we expect you to look at these concepts:

<details>
<summary><b>JavaScript programming</summary></b><br>

**Reading:**

* [Modern JS](https://github.com/mbeaudru/modern-js-cheatsheet)
* [JavaScript Fundamentals](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
* [Module patterns](https://darrenderidder.github.io/talks/ModulePatterns/#/)
* [var, let and const](https://www.youtube.com/watch?v=sjyJBL5fkp8)
* [Javascript Tutorial](https://www.youtube.com/watch?v=vZBCTc9zHtI)
* [JavaScript object basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
* [Object-oriented JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript) **read all examples!**
* [Object prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
* [Inheritance in JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript)
* [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
* [this/self](https://alistapart.com/article/getoutbindingsituations/)

</details>


<details>
<summary>Software Linter</summary><br>

### Definition
A software linter also known as a “linter” is a tool used to identify and report potential issues (syntax errors, undeclared variables, etc.) in a program. It can even report convention or style inconsistencies. It does so by highlighting them so that the programmer is aware, so changes can be made. There are a wide variety of linters as well as lint rules for specific programming languages and even for software frameworks.

There are typically two ways to lint code:
* Actively
* Passively

### Active
Active checking is typically achieved by running a monitor tool that is constantly checking the file that your working on in order to spot inconsistencies and possible errors (e.g., having a specific linter along with some lint rules installed as a plug-in in your Code Editor).

### Passive
Passive checking is done by taking a piece of code, and manually running it through a tool to identify potential issues. For example, copying and pasting your code into a specific linter tool, or running the linter against a specific file using the command line. This tool can be installed locally or be available as a service (e.g., website on the Internet).

#### Examples
Screenshot of an active linter `pycodestyle` (Python) integrated into [Visual Studio Code](https://code.visualstudio.com/)

![Screenshot1](https://i.postimg.cc/L4rQGwZS/sc1.png)

Screenshot of an active linter `ESLint` (JavaScript) integrated into VVisual Studio Code](https://code.visualstudio.com/)

![Screenshot2](https://i.postimg.cc/pXzcvCDF/sc2.png)

Screenshot of a passive online linter service `JSON Formatter` to validate a JSON data structure

![Screenshot3](https://i.postimg.cc/GmjM8pg3/sc3.png)

**Fun fact:** The term “lint” was derived from the name of the tiny bits of fiber and fluff shed by clothing.

**References:**
* [lint (software) - Wikipedia](https://en.wikipedia.org/wiki/Lint_(software))
* [ESLint - Pluggable JavaScript linter](https://eslint.org/)
* [pycodestyle - documentation](https://pycodestyle.pycqa.org/en/latest/)

</details>

![Screenshot.png](https://i.postimg.cc/1tCFL8Rt/Screenshot.png)

## Technologies & Tools :computer:

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

---

## Resources
**Read or watch:**

* [ECMAScript 6 - ECMAScript 2015](https://www.w3schools.com/js/js_es6.asp)
* [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
* [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
* [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
* [Javascript ES6 — Iterables and Iterators](https://towardsdatascience.com/javascript-es6-iterables-and-iterators-de18b54f4d4)

## Learning Objectives
At the end of this project, you are expected to be able to [explain to anyone](https://fs.blog/feynman-learning-technique/), **without the help of Google:**

* What ES6 is
* New features introduced in ES6
* The difference between a constant and a variable
* Block-scoped variables
* Arrow functions and function parameters default to them
* Rest and spread function parameters
* String templating in ES6
* Object creation and their properties in ES6
* Iterators and for-of loops

## Requirements
### General
* All your files will be executed on **`Ubuntu 18.04 LTS using NodeJS 12.11.x`**
* Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
* All your files should end with a new line
* A `README.md` file, at the root of the folder of the project, is mandatory
* Your code should use the `js` extension
* Your code will be tested using the [Jest Testing Framework](https://jestjs.io/)
* Your code will be analyzed using the linter [ESLint](https://eslint.org/) along with specific rules that we’ll provide
* All of your functions must be exported

## Setup
### Install NodeJS 12.11.x
(in your home directory):
```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

```
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```

### Install Jest, Babel, and ESLint
in your project directory, install Jest, Babel and ESList by using the supplied `package.json` and run `npm install`.

## Configuration files
Add the files below to your project directory

#### `package.json`
Click here to show/hide file contents

#### `babel.config.js`
Click here to show/hide file contents

#### `.eslintrc.js`
Click here to show/hide file contents

### Finally…
Don’t forget to run `npm install` from the terminal of your project folder to install all necessary project dependencies.

## Tasks

### Mandatory Tasks:

#### [0. Const or let?](0-constants.js)
  + For the code below, make the following modifications:
     + function `taskFirst` to instantiate variables using `const`
     + function `taskNext` to instantiate variables using `let`
```js
export function taskFirst() {
  var task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  var combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
```

Execution example:
```js
bob@dylan:~$ cat 0-main.js
import { taskFirst, taskNext } from './0-constants.js';

console.log(`${taskFirst()} ${taskNext()}`);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
I prefer const when I can. But sometimes let is okay
bob@dylan:~$ 
```
  
#### [1. Block Scope](1-block-scoped.js)

Given what you’ve read about `var` and hoisting, modify the variables inside the function `taskBlock` so that the variables aren’t overwritten inside the conditional block.
```js
export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var task = true;
    var task2 = false;
  }

  return [task, task2];
}
```

Execution:
```js
bob@dylan:~$ cat 1-main.js
import taskBlock from './1-block-scoped.js';

console.log(taskBlock(true));
console.log(taskBlock(false));
bob@dylan:~$
bob@dylan:~$ npm run dev 1-main.js 
[ false, true ]
[ false, true ]
bob@dylan:~$
```
  
#### [2. Arrow functions](2-arrow.js)
Rewrite the following standard function to use ES6’s arrow syntax of the function `add` (it will be an anonymous function after)
```js
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = function add(newNeighborhood) {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
```

Execution:
```js
bob@dylan:~$ cat 2-main.js
import getNeighborhoodsList from './2-arrow.js';

const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood('Noe Valley');
console.log(res);
bob@dylan:~$
bob@dylan:~$ npm run dev 2-main.js 
[ 'SOMA', 'Union Square', 'Noe Valley' ]
bob@dylan:~$
```
  
#### [3. Parameter defaults](3-default-parameter.js)
Condense the internals of the following function to 1 line - without changing the name of each function/variable.

*Hint:* The key here to define default parameter values for the function parameters.
```js
export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  if (expansion1989 === undefined) {
    expansion1989 = 89;
  }

  if (expansion2019 === undefined) {
    expansion2019 = 19;
  }
  return initialNumber + expansion1989 + expansion2019;
}
```

Execution:
```js
bob@dylan:~$ cat 3-main.js
import getSumOfHoods from './3-default-parameter.js';

console.log(getSumOfHoods(34));
console.log(getSumOfHoods(34, 3));
console.log(getSumOfHoods(34, 3, 4));
bob@dylan:~$
bob@dylan:~$ npm run dev 3-main.js 
142
56
41
bob@dylan:~$
```

#### [4. Rest parameter syntax for functions](4-rest-parameter.js)
Modify the following function to return the number of arguments passed to it using the rest parameter syntax
```js
export default function returnHowManyArguments() {

}
```

Example:
```js
> returnHowManyArguments("Hello", "Holberton", 2020);
3
>
```

Execution:
```js
bob@dylan:~$ cat 4-main.js
import returnHowManyArguments from './4-rest-parameter.js';

console.log(returnHowManyArguments("one"));
console.log(returnHowManyArguments("one", "two", 3, "4th"));
bob@dylan:~$
bob@dylan:~$ npm run dev 4-main.js 
1
4
bob@dylan:~$
```
  
#### [5. The wonders of spread syntax](5-spread-operator.js)
Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.
```js
export default function concatArrays(array1, array2, string) {
}
```

Execution:
```js
bob@dylan:~$ cat 5-main.js
import concatArrays from './5-spread-operator.js';

console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));

bob@dylan:~$
bob@dylan:~$ npm run dev 5-main.js 
[
  'a', 'b', 'c',
  'd', 'H', 'e',
  'l', 'l', 'o'
]
bob@dylan:~$
```
  
#### [6. Take advantage of template literals](6-string-interpolation.js)
Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.
```js
export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return 'As of ' + year + ', it was the seventh-highest income county in the United States'
        / ', with a per capita personal income of ' + budget.income + '. As of 2015, San Francisco'
        / ' proper had a GDP of ' + budget.gdp + ', and a GDP per capita of ' + budget.capita + '.';
}
```

Execution:
```js
bob@dylan:~$ cat 6-main.js
import getSanFranciscoDescription from './6-string-interpolation.js';

console.log(getSanFranciscoDescription());

bob@dylan:~$
bob@dylan:~$ npm run dev 6-main.js 
As of 2017, it was the seventh-highest income county in the United States, with a per capita personal income of $119,868. As of 2015, San Francisco proper had a GDP of $154.2 billion, and a GDP per capita of $178,479.
bob@dylan:~$
```

#### [7. Object property value shorthand syntax](7-getBudgetObject.js)
Notice how the keys and the variable names are the same?

Modify the following function’s `budget` object to simply use the keyname instead.
```js
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income: income,
    gdp: gdp,
    capita: capita,
  };

  return budget;
}
```

Execution:
```js
bob@dylan:~$ cat 7-main.js
import getBudgetObject from './7-getBudgetObject.js';

console.log(getBudgetObject(400, 700, 900));

bob@dylan:~$
bob@dylan:~$ npm run dev 7-main.js 
{ income: 400, gdp: 700, capita: 900 }
bob@dylan:~$
```
  
#### [8. No need to create empty objects before adding in properties](8-getBudgetCurrentYear.js)
Rewrite the `getBudgetForCurrentYear` function to use ES6 computed property names on the `budget` object
```js
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  budget[`income-${getCurrentYear()}`] = income;
  budget[`gdp-${getCurrentYear()}`] = gdp;
  budget[`capita-${getCurrentYear()}`] = capita;

  return budget;
}
```

Execution:
```js
bob@dylan:~$ cat 8-main.js
import getBudgetForCurrentYear from './8-getBudgetCurrentYear.js';

console.log(getBudgetForCurrentYear(2100, 5200, 1090));

bob@dylan:~$
bob@dylan:~$ npm run dev 8-main.js 
{ 'income-2021': 2100, 'gdp-2021': 5200, 'capita-2021': 1090 }
bob@dylan:~$
```
  
#### [9. ES6 method properties](9-getFullBudget.js)
Rewrite `getFullBudgetObject` to use ES6 method properties in the `fullBudget` object

```js
import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: function (income) {
      return `$${income}`;
    },
    getIncomeInEuros: function (income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
```

Execution:
```js
bob@dylan:~$ cat 9-main.js
import getFullBudgetObject from './9-getFullBudget.js';

const fullBudget = getFullBudgetObject(20, 50, 10);

console.log(fullBudget.getIncomeInDollars(fullBudget.income));
console.log(fullBudget.getIncomeInEuros(fullBudget.income));

bob@dylan:~$
bob@dylan:~$ npm run dev 9-main.js 
$20
20 euros
bob@dylan:~$
```

#### [10. For...of Loops](10-loops.js)
Rewrite the function `appendToEachArrayValue` to use ES6’s `for...of` operator. And don’t forget that `var` is not ES6-friendly.

```js
export default function appendToEachArrayValue(array, appendString) {
  for (var idx in array) {
    var value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
```

Execution:
```js
bob@dylan:~$ cat 10-main.js
import appendToEachArrayValue from './10-loops.js';

console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));

bob@dylan:~$
bob@dylan:~$ npm run dev 10-main.js 
[ 'correctly-appended', 'correctly-fixed', 'correctly-displayed' ]
bob@dylan:~$
```
  
#### [11. Iterator](11-createEmployeesObject.js)
  + Write a function named `createEmployeesObject` that will receive two arguments:
     + `departmentName` (String)
     +`employees` (Array of Strings)
```js
export default function createEmployeesObject(departmentName, employees) {

}
```

The function should return an object with the following format:
```js
{
     $departmentName: [
          $employees,
     ],
}
```

Execution:
```js
bob@dylan:~$ cat 11-main.js
import createEmployeesObject from './11-createEmployeesObject.js';

console.log(createEmployeesObject("Software", [ "Bob", "Sylvie" ]));

bob@dylan:~$
bob@dylan:~$ npm run dev 11-main.js 
{ Software: [ 'Bob', 'Sylvie' ] }
bob@dylan:~$
```
  
#### [12. Let's create a report object](12-createReportObject.js)
Write a function named `createReportObject` whose parameter, `employeesList`, is the return value of the previous function `createEmployeesObject`.
```js
export default function createReportObject(employeesList) {

}
```

`createReportObject` should return an object containing the key `allEmployees` and a method property called `getNumberOfDepartments`.

`allEmployees` is a key that maps to an object containing the department name and a list of all the employees in that department. If you’re having trouble, use the spread syntax.

The method property receives `employeesList` and returns the number of departments. I would suggest suggest thinking back to the ES6 method property syntax.
```js
{
  allEmployees: {
     engineering: [
          'John Doe',
          'Guillaume Salva',
     ],
  },
};
```

Execution:
```js
bob@dylan:~$ cat 12-main.js
import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';

const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};      

const report = createReportObject(employees);
console.log(report.allEmployees);
console.log(report.getNumberOfDepartments(report.allEmployees));

bob@dylan:~$
bob@dylan:~$ npm run dev 12-main.js 
{ engineering: [ 'Bob', 'Jane' ], marketing: [ 'Sylvie' ] }
2
bob@dylan:~$
```

### Advanced Tasks:  

#### [13. Iterating through report objects](100-createIteratorObject.js)
Write a function named `createIteratorObject`, that will take into argument a report Object created with the previous function `createReportObject`.

This function will return an iterator to go through every employee in every department.
```js
export default function createIteratorObject(report) {

}
```

Execution:
```js
bob@dylan:~$ cat 100-main.js
import createIteratorObject from "./100-createIteratorObject.js";

import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';

const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);

const reportWithIterator = createIteratorObject(report);

for (const item of reportWithIterator) {
    console.log(item);
}

bob@dylan:~$
bob@dylan:~$ npm run dev 100-main.js 
Bob
Jane
Sylvie
bob@dylan:~$
```
  
#### [14. Iterate through object](101-iterateThroughObject.js)
Finally, write a function named `iterateThroughObject`. The function’s parameter `reportWithIterator` is the return value from `createIteratorObject`.
```js
 export default function iterateThroughObject(reportWithIterator) {

 }
```

It should return every employee name in a string, separated by `|`
```js
{
  allEmployees: {
     engineering: [
          'John Doe',
          'Guillaume Salva',
     ],
  },
  ...
};
```

Should return `John Doe | Guillaume Salva`

Reminder - the functions will be imported by the test suite.

Full example:
```js
> employees = {
      ...createEmployeesObject('engineering', engineering),
      ...createEmployeesObject('design', design),
    };
>
> const report = createReportObject(employees);
> const reportWithIterator = createIteratorObject(report);
> iterateThroughObject(reportWithIterator)
'John Doe | Guillaume Salva | Kanye East | Jay Li'
> 
```

Execution:
```js
bob@dylan:~$ cat 101-main.js
import createEmployeesObject from "./11-createEmployeesObject.js";
import createReportObject from './12-createReportObject.js';
import createIteratorObject from './100-createIteratorObject.js';
import iterateThroughObject from './101-iterateThroughObject.js';


const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);
const reportWithIterator = createIteratorObject(report);

console.log(iterateThroughObject(reportWithIterator));

bob@dylan:~$
bob@dylan:~$ npm run dev 101-main.js 
Bob | Jane | Sylvie
bob@dylan:~$
```

---

# Very Useful Information
## ES6 : Setup Project Environement 
### 0x00-ES6_basic directory:

#### Step 1: Create Configuration Files

Create the configuration files [.eslintrc.js](.eslintrc.js), [babel.config.js](babel.config.js), [package.json](package.json) in your project root.

#### Step 2: Install Node.js
If Node.js is not installed, follow these steps to install it using nvm:

1. In the terminal, install NVM (Node Version Manager) by running:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

2. Close the terminal and open a new one, then run the following commands to install Node.js version `12.11`:
```
nvm install 12.11
nvm alias default 12.11
```

3.  Verify the installation:
```
node -v
npm -v
```

For more details, refer to the [Node.js installation guide using nvm](https://pastecode.io/s/hbs3xkyx).

#### Step 3: Install Dependencies
Use the following command to install all dependencies specified in the configuration files [.eslintrc.js](.eslintrc.js), [babel.config.js](babel.config.js), [package.json](package.json) in your project root:
```
npm install
```

Step 4: Create .gitignore
After running `ls`, you will see a folder called `node_modules`. To avoid committing this folder to your repository, follow these steps:

1. Navigate out of the [0x00-ES6_basic](https://github.com/deezyfg/alx-backend-javascript/tree/master/0x00-ES6_basic) directory to the [alx-backend-javascript](https://github.com/deezyfg/alx-backend-javascript/tree/master) repository:
```
cd ..
```

2. Create a `.gitignore` file:
```
sudo vi .gitignore
```

3. Add the following line to your `.gitignore` file to exclude the `node_modules` directory from being tracked by Git:
```
node_modules/
```

4. Save and close the file.

#### Step 5: Working on Tasks
Now that your environment is set up, you can start working on the tasks for [0x00-ES6_basic](https://github.com/deezyfg/alx-backend-javascript/tree/master/0x00-ES6_basic). For example:

1. Create your JavaScript files (e.g., [0-constants.js](0-constants.js) and [0-main.js](0-main.js))

2. Run the following command to check for lint errors:
```
npm run lint 0-constants.js
```
This checks your code for style and potential errors.

3. Run the following command to execute your code:
```
npm run dev 0-main.js
```
This executes your JavaScript file using Babel, allowing you to use ES6 features.

Remember to run these commands from within the [0x00-ES6_basic](https://github.com/deezyfg/alx-backend-javascript/tree/master/0x00-ES6_basic) directory.

---

## Author

* **Peter Opoku-Mensah** ([@deezyfg](https://github.com/deezyfg))

[![Portfolio](https://img.shields.io/badge/Portfolio-20d6fe.svg?&style=plastic)](https://peter-opoku-mensah.netlify.app)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2.svg?&style=plastic&logo=twitter&logoColor=white)](https://twitter.com/coded_issue)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2.svg?&style=plastic&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/opokumensahpeter/)
[![GitHub](https://img.shields.io/badge/GitHub-181717.svg?&style=plastic&logo=github&logoColor=white)](https://github.com/deezyfg)