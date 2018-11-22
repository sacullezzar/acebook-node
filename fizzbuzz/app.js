// use 'strict';

function fizz(number) {
  if (number % 3 === 0) {
    return 'fizz'
  }
}

function buzz(number) {
  if (number % 5 === 0) {
    return 'buzz'
  } else {
    return number
  }
}

function fizzbuzz(number) {
  if (number % 15 === 0) {
    return 'fizzbuzz'
  } else {
    r = fizz(number)
    if (r != 'fizz') {
      r = buzz(number)
    }
    return r
  }
}

module.exports = {
  fizzbuzz: fizzbuzz,
  fizz: fizz,
  buzz: buzz
}
