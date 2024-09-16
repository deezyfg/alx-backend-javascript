# Test Directory

This directory contains test files for the Node.js project. Currently, the directory includes the `students.test.js` file, which tests the API endpoints of the student server.

## Running the Tests

To run the tests, use the following command:

```bash
npm test
```

This command will execute all test files in the test directory.

## Example Output
When you run the command, you should see an output similar to the one below:

```
bob@dylan:/alx-backend-javascript/0x05-Node_JS_basic/test# npm test

> node_js_basics@1.0.0 test /alx-backend-javascript/0x05-Node_JS_basic
> ./node_modules/mocha/bin/mocha --require babel-register --exit



Server listening on PORT 1245
  Student API Endpoints
    ✓ returns correct list of CS students (201ms)
    ✓ returns correct list of SWE students
    ✓ returns all students with correct details
    ✓ returns 500 for invalid major (93ms)


  4 passing (397ms)
```

## Test Cases in `students.test.js`
The `students.test.js` file includes the following test cases:

* **returns correct list of CS students:** Verifies the correct list of Computer Science students is returned.
* **returns correct list of SWE students:** Verifies the correct list of Software Engineering students is returned.
* **returns all students with correct details:** Verifies that all students are returned with the correct details for each major.
* **returns 500 for invalid major:** Ensures the server responds with a 500 error when an invalid major is provided.

## Adding More Tests
To add more test files to this directory, simply create new `.js` files with your tests. These will be automatically picked up and run when you execute `npm test`.