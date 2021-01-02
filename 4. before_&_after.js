1. beforeAll()
2. beforeEach()
3. afterAll()
4. afterEach()

1. beforeAll()
the code inside this block get executed before all specs in the suite are run.
run some shared setup only once before all specs in the describe are run.

e.g
if we are building calculator app then in beforeAll() we can add one DOM element to show the result.

describe('calculator.js', function() {
let element;
  beforeAll(function() {
      // gets executed once before all specs starts runnning
     element = document.createElement('div');
     
     element.setAttribute('id', 'result');
     document.body.appendChild(element);
  });
  
  
  afterAll(function() {
    //gets executed once after all specs starts running
     element = document.createElement('div');
     
     document.body.removeChild(element);
  })
})


2. beforeEach()
the code inside this block get executed before each spec runs in the suite.
run some shared setup before each spec inside if that suite.


3. afterAll()
the code inside this block get executed after all specs in the suite are run.
run some shared setup only once after all specs in the describe are run.


4. afterEach()
the code inside this block get executed after each spec runs in the suite.
run some shared setup after each spec inside if that suite.


