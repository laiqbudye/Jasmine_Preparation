what are spec file extensions.

1. *.spec.js
2. *.test.js

suppose if our JS filename is calculator.js then the spec file will be,

calculator.spec.js
calculator.test.js


There are 3 important parts in Jasmine
1. Suites
2. Specs
3. Expectations

1. Suites
Suite can be referred as group of specs or group of tests.

syntax to create suite

describe("this is description of suite which will be shown in the reporter", function() {
    // whatever we write inside function is going to get execute
});

description should always the name of file to which we are testing.
for calculator.js
e.g

describe("calculator.js", function() {   //calculator.js is the name of suite
  ...
})




2. Specs (specification)
it is test case.

syntax:-
describe("calculator.js", function() {   
  it("title of spec", function() {
    //...we need to write expectations here
  })
})


e.g
describe("calculator.js", function() {   
  it("should add numbers to the total", function() {
    ...
  })
  
  it("should subtract number from total", function() {
    ...
  })
})


3. Expectations
It is nothing but a statement that returns true or false.

e.g expect 5 + 5 to be 10

      expect(5+5).toBe(10); // way to write expectations
      
      expect takes input values from code side,
      toBe contains expected output.
      
      
      
Spec with all true expectations => passing spec
Spec with one or more false expectations => failing spec

expect(10).toBe(10)  // true
expect(10).toBe(9)   // false


