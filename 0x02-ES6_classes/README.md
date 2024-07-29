0x02. ES6 classes
=================

This project focuses on exploring the use of **classes in ES6**. It covers class creation, inheritance, and other advanced class features, including static methods and metaprogramming with symbols. Through hands-on tasks, you will learn how to define classes, add methods, and extend existing classes, providing a solid foundation for utilizing ES6 classes in real-world applications.

![Meme](https://i.postimg.cc/BvkHCt2J/meme.png)

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

-   [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
-   [Metaprogramming](https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/#symbolspecies)

Learning Objectives :bulb:
--------------------------

At the end of this project, you are expected to be able to [explain to anyone](https://fs.blog/feynman-learning-technique/), **without the help of Google**:

-   How to define a Class
-   How to add methods to a class
-   Why and how to add a static method to a class
-   How to extend a class from another
-   Metaprogramming and symbols

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

## Mandatory:

### 0\. You used to attend a place like this at some point

Implement a class named `ClassRoom`:
-   Prototype: `export default class ClassRoom`
-   It should accept one attribute named `maxStudentsSize` (Number) and assigned to `_maxStudentsSize`

```js
bob@dylan:~$ cat 0-main.js
import ClassRoom from "./0-classroom.js";

const room = new ClassRoom(10);
console.log(room._maxStudentsSize)

bob@dylan:~$
bob@dylan:~$ npm run dev 0-main.js
10
bob@dylan:~$
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x02-ES6_classes`
-   File: `0-classroom.js`

### 1\. Let's make some classrooms

Import the `ClassRoom` class from `0-classroom.js`.

Implement a function named `initializeRooms`. It should return an array of 3 `ClassRoom` objects with the sizes 19, 20, and 34 (in this order).

```js
bob@dylan:~$ cat 1-main.js
import initializeRooms from './1-make_classrooms.js';

console.log(initializeRooms());

bob@dylan:~$
bob@dylan:~$ npm run dev 1-main.js
[
  ClassRoom { _maxStudentsSize: 19 },
  ClassRoom { _maxStudentsSize: 20 },
  ClassRoom { _maxStudentsSize: 34 }
]
bob@dylan:~$
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x02-ES6_classes`
-   File: `1-make_classrooms.js`

### 2\. A Course, Getters, and Setters

Implement a class named `HolbertonCourse`:

-   Constructor attributes:
    -   `name` (String)
    -   `length` (Number)
    -   `students` (array of Strings)
-   Make sure to verify the type of attributes during object creation
-   Each attribute must be stored in an "underscore" attribute version (ex: `name` is stored in `_name`)
-   Implement a getter and setter for each attribute.

```js
bob@dylan:~$ cat 2-main.js
import HolbertonCourse from "./2-hbtn_course.js";

const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"])
console.log(c1.name);
c1.name = "Python 101";
console.log(c1);

try {
    c1.name = 12;
}
catch(err) {
    console.log(err);
}

try {
    const c2 = new HolbertonCourse("ES6", "1", ["Bob", "Jane"]);
}
catch(err) {
    console.log(err);
}

bob@dylan:~$
bob@dylan:~$ npm run dev 2-main.js
ES6
HolbertonCourse {
  _name: 'Python 101',
  _length: 1,
  _students: [ 'Bob', 'Jane' ]
}
TypeError: Name must be a string
    ...
TypeError: Length must be a number
    ...
bob@dylan:~$
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x02-ES6_classes`
-   File: `2-hbtn_course.js`

### 3\. Methods, static methods, computed methods names..... MONEY

Implement a class named `Currency`:

-   - Constructor attributes:
    -   `code` (String)
    -   `name` (String)
-   Each attribute must be stored in an "underscore" attribute version (ex: `name` is stored in `_name`)
-   Implement a getter and setter for each attribute.
-   Implement a method named `displayFullCurrency` that will return the attributes in the following format `name (code)`.

```js
bob@dylan:~$ cat 3-main.js
import Currency from "./3-currency.js";

const dollar = new Currency('$', 'Dollars');
console.log(dollar.displayFullCurrency());

bob@dylan:~$
bob@dylan:~$ npm run dev 3-main.js
Dollars ($)
bob@dylan:~$
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x02-ES6_classes`
-   File: `3-currency.js`

### 4\. Pricing


Import the class `Currency` from `3-currency.js`

Implement a class named `Pricing`:

-   Constructor attributes:
    -   `amount` (Number)
    -   `currency` (Currency)
-   Each attribute must be stored in an "underscore" attribute version (ex: `name` is stored in `_name`)
-   Implement a getter and setter for each attribute.
-   Implement a method named `displayFullPrice` that returns the attributes in the following format `amount currency_name (currency_code)`.
-   Implement a static method named `convertPrice`. It should accept two arguments: `amount` (Number), `conversionRate` (Number). The function should return the amount multiplied by the conversion rate.

```js
bob@dylan:~$ cat 4-main.js
import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

const p = new Pricing(100, new Currency("EUR", "Euro"))
console.log(p);
console.log(p.displayFullPrice());

bob@dylan:~$
bob@dylan:~$ npm run dev 4-main.js
Pricing {
  _amount: 100,
  _currency: Currency { _code: 'EUR', _name: 'Euro' }
}
100 Euro (EUR)
bob@dylan:~$
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x02-ES6_classes`
-   File: `4-pricing.js`

### 5\. A Building

Implement a class named `Building`:

-   Constructor attributes:
    -   `sqft` (Number)
-   Each attribute must be stored in an "underscore" attribute version (ex: `name` is stored in `_name`)
-   Implement a getter for each attribute.
-   Consider this class as an abstract class. And make sure that any class that extends from it should implement a method named `evacuationWarningMessage`.
    -   If a class that extends from it does not have a `evacuationWarningMessage` method, throw an error with the message `Class extending Building must override evacuationWarningMessage`

```js
bob@dylan:~$ cat 5-main.js
import Building from './5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
    new TestBuilding(200)
}
catch(err) {
    console.log(err);
}

bob@dylan:~$
bob@dylan:~$ npm run dev 5-main.js
Building { _sqft: 100 }
Error: Class extending Building must override evacuationWarningMessage
    ...
bob@dylan:~$
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x02-ES6_classes`
-   File: `5-building.js`

### 6\. Inheritance

Import `Building` from `5-building.js`.

Implement a class named `SkyHighBuilding` that extends from `Building`:

-   Constructor attributes:
    -   `sqft` (Number) (must be assigned to the parent class `Building`)
    -   `floors` (Number)
-   Each attribute must be stored in an "underscore" attribute version (ex: `name` is stored in `_name`)
-   Implement a getter for each attribute.
-   Override the method named `evacuationWarningMessage` and return the following string `Evacuate slowly the NUMBER_OF_FLOORS floors`.

```js
bob@dylan:~$ cat 6-main.js
import SkyHighBuilding from './6-sky_high.js';

const building = new SkyHighBuilding(140, 60);
console.log(building.sqft);
console.log(building.floors);
console.log(building.evacuationWarningMessage());

bob@dylan:~$
bob@dylan:~$ npm run dev 6-main.js
140
60
Evacuate slowly the 60 floors
bob@dylan:~$
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x02-ES6_classes`
-   File: `6-sky_high.js`

### 7\. Airport

Implement a class named `Airport`:

-   Constructor attributes:
    -   `name` (String)
    -   `code` (String)
-   Each attribute must be stored in an "underscore" attribute version (ex: `name` is stored in `_name`)
-   The default string description of the class should return the airport `code` (example below).

```js
bob@dylan:~$ cat 7-main.js
import Airport from "./7-airport.js";

const airportSF = new Airport('San Francisco Airport', 'SFO');
console.log(airportSF);
console.log(airportSF.toString());

bob@dylan:~$
bob@dylan:~$ npm run dev 7-main.js
Airport [SFO] { _name: 'San Francisco Airport', _code: 'SFO' }
[object SFO]
bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x02-ES6_classes`
-   File: `7-airport.js`

### 8\. Primitive - Holberton Class

Implement a class named `HolbertonClass`:

-   Constructor attributes:
    -   `size` (Number)
    -   `location` (String)
-   Each attribute must be stored in an "underscore" attribute version (ex: `name` is stored in `_name`)
-   When the class is cast into a `Number`, it should return the size.
-   When the class is cast into a `String`, it should return the location.

```
bob@dylan:~$ cat 8-main.js
import HolbertonClass from "./8-hbtn_class.js";

const hc = new HolbertonClass(12, "Mezzanine")
console.log(Number(hc));
console.log(String(hc));

bob@dylan:~$
bob@dylan:~$ npm run dev 8-main.js
12
Mezzanine
bob@dylan:~$
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x02-ES6_classes`
-   File: `8-hbtn_class.js`

### 9\. Hoisting

Fix this code and make it work.

```js
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

export class StudentHolberton {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this.holbertonClass;
  }

  get fullStudentDescription() {
    return `${self._firstName} ${self._lastName} - ${self._holbertonClass.year} - ${self._holbertonClass.location}`;
  }
}

export const listOfStudents = [student1, student2, student3, student4, student5];
```

Result:

```js
bob@dylan:~$ cat 9-main.js
import listOfStudents from "./9-hoisting.js";

console.log(listOfStudents);

const listPrinted = listOfStudents.map(
    student => student.fullStudentDescription
);

console.log(listPrinted)

bob@dylan:~$
bob@dylan:~$ npm run dev 9-main.js
[
  StudentHolberton {
    _firstName: 'Guillaume',
    _lastName: 'Salva',
    _holbertonClass: HolbertonClass { _year: 2020, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'John',
    _lastName: 'Doe',
    _holbertonClass: HolbertonClass { _year: 2020, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'Albert',
    _lastName: 'Clinton',
    _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'Donald',
    _lastName: 'Bush',
    _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'Jason',
    _lastName: 'Sandler',
    _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
  }
]
[
  'Guillaume Salva - 2020 - San Francisco',
  'John Doe - 2020 - San Francisco',
  'Albert Clinton - 2019 - San Francisco',
  'Donald Bush - 2019 - San Francisco',
  'Jason Sandler - 2019 - San Francisco'
]
bob@dylan:~$
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x02-ES6_classes`
-   File: `9-hoisting.js`

### 10\. Vroom

Implement a class named `Car`:

-   Constructor attributes:
    -   `brand` (String)
    -   `motor` (String)
    -   `color` (String)
-   Each attribute must be stored in an "underscore" attribute version (ex: `name` is stored in `_name`)
-   Add a method named `cloneCar`. This method should return a new object of the class.

Hint: Symbols in ES6

```js
bob@dylan:~$ cat 10-main.js
import Car from "./10-car.js";

class TestCar extends Car {}

const tc1 = new TestCar("Nissan", "Turbo", "Pink");
const tc2 = tc1.cloneCar();

console.log(tc1);
console.log(tc1 instanceof TestCar);

console.log(tc2);
console.log(tc2 instanceof TestCar);

console.log(tc1 == tc2);

bob@dylan:~$
bob@dylan:~$ npm run dev 10-main.js
TestCar { _brand: 'Nissan', _motor: 'Turbo', _color: 'Pink' }
true
TestCar { _brand: undefined, _motor: undefined, _color: undefined }
true
false
bob@dylan:~$
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x02-ES6_classes`
-   File: `10-car.js`

## Advanced:

### 11\. EVCar

Import `Car` from `10-car.js`.

Implement a class named `EVCar` that extends the `Car` class:

-   Constructor attributes:
    -   `brand` (String)
    -   `motor` (String)
    -   `color` (String)
    -   `range` (String)
-   Each attribute must be stored in an "underscore" attribute version (ex: `name` is stored in `_name`)
-   For privacy reasons, when `cloneCar` is called on a EVCar object, the object returned should be an instance of `Car` instead of `EVCar`.

```js
bob@dylan:~$ cat 100-main.js
import EVCar from './100-evcar.js';

const ec1 = new EVCar("Tesla", "Turbo", "Red", "250");
console.log(ec1);

const ec2 = ec1.cloneCar();
console.log(ec2);

bob@dylan:~$
bob@dylan:~$ npm run dev 100-main.js
EVCar {
  _brand: 'Tesla',
  _motor: 'Turbo',
  _color: 'Red',
  _range: '250'
}
Car { _brand: undefined, _motor: undefined, _color: undefined }
bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x02-ES6_classes`
-   File: `100-evcar.js`

## Author

- **Peter Opoku-Mensah** ([@deezyfg](https://github.com/deezyfg)) - 
  [<img src="https://img.shields.io/badge/Portfolio-20d6fe.svg?&style=plastic"/>](https://peter-opoku-mensah.netlify.app)
  [<img src="https://img.shields.io/badge/Twitter-1DA1F2.svg?&style=plastic&logo=twitter&logoColor=white"/>](https://twitter.com/coded_issue)
  [<img src="https://img.shields.io/badge/LinkedIn-0A66C2.svg?&style=plastic&logo=linkedin&logoColor=white"/>](https://www.linkedin.com/in/opokumensahpeter/)
  [<img src="https://img.shields.io/badge/GitHub-181717.svg?&style=plastic&logo=github&logoColor=white"/>](https://github.com/deezyfg)