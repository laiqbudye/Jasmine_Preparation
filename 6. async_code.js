with jasmine we can also test asyc code like promises / async-await.

e.g

describe('get version', function() {
  it('fetches version from some API', function() {
    calculator.version.then(function(version) {
      expect(version).toBe('0.1');
    })
  })
})

the code above will throw an error, 'cannot read property then of undefined'

jasmine provides done callback to each specs internally. so we can use that callback to solve above issue.

describe('get version', function() {
  it('fetches version from some API', function(done) {   // if we are passing done callback then always remember to call that otherwise jasmine will give error 
    calculator.version.then(function(version) {
      expect(version).toBe('0.1');
      
      done();  // by adding this it will wait for promise to resolve & then execute te code above
    })
  })
})
