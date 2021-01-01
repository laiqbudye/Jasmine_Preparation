Matcher is nothing but a function that implements boolean comparison between actual result & expected result.

e.g

describe("calculator.js", function() {   
  it("title of spec", function() {
  expect(10).toBe(10)  // true
  })
})

expect(/*actual result */).toBe(/* expected result */)  

in the above example matcher compares actual result & expected result and returns true or false. It returns boolean only.

IMP:- Matcher is responsible for reporting to jasmine if the expectation is true or false. i.e passing spec or failing spec.


Matchers are as follows:-
  
1. toBe()
  toBe() does boolean comparison between expected & actual result. it does strict (===) comparison.
  e.g
  5 === "5"  // false
  5 == "5"  // true
  
 describe("calculator.js", function() {   
  it("title of spec", function() {
  expect('10').toBe(10)  // false
  })
})                                                                                  
                                                                                  
               

2. toEqual()
toEqual() is same as toBe() matcher, toEqual is use to compare objects. it does deep cheking.

{} == {}  // it returns false as it compares memory references.

 describe("calculator.js", function() {   
  it("title of spec", function() {
  expect({}).toBe({})  // false, as it is comparing memory references
  })
}) 
  
 
toEqual() compares object keys & values with strict cheking.

  describe("calculator.js", function() {   
  it("title of spec", function() {
  expect({}).toEqual({})  // true
  })
})
  

  describe("calculator.js", function() {   
  it("title of spec", function() {
  expect({value:10}).toEqual({value:10})  // true
  })
})
  

  describe("calculator.js", function() {   
  it("title of spec", function() {
  expect({value:'10'}).toEqual({value:10})  // false, as it is expecting 10 as number... (toEqual does strict (===) comparison)
  })
})
  
  
  


