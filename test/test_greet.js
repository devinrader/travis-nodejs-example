const greet = require ('../index.js')
const assert = require('assert');

describe('greet', function() {
  describe('when given the name "Brodan"', function() {
    it('should return "Hello, Brodan!"', function() {
      assert.equal("Hello, Brodan!", greet.greet("Brodan"));
    });
  });

  describe('when given no name', function() {
    it('should return "Hello, World!"', function() {
      assert.equal("Hello, World!", greet.greet());
    });
  });

  describe('when designed to fail', function() {
    it('should fail', function() {
      assert.fail(null, null, 'this should fail');
    });
  });
});
