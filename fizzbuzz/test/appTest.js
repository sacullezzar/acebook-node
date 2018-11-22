const assert = require('chai').assert
const app = require('../app')

describe('App', function() {
  it('should return fizzbuzz if divisible by 15', function() {
    assert.equal(app.fizzbuzz(15), 'fizzbuzz')
  })
  it('should return fizz if divisible by 3', function() {
    assert.equal(app.fizz(3), 'fizz')
  })
  it('should return buzz if divisible by 5', function() {
    assert.equal(app.buzz(5), 'buzz')
  })
  it('should return the number if neither', function() {
    assert.equal(app.fizzbuzz(2), 2)
  })
  it('should return buzz if divisible by 5', function() {
    assert.equal(app.fizzbuzz(5), 'buzz')
  })
  it('should return fizz if divisible by 3', function() {
    assert.equal(app.fizzbuzz(3), 'fizz')
  })
})
