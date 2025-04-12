let result = ''

for (let i = 1; i < 101; i++) {
  if (i > 1) {
    result += ' '
  }

  if (i % 3 == 0 && i % 5 == 0) {
    // console.log('FizzBuzz')
    result += 'FizzBuzz'
  } else if (i % 3 == 0) {
    // console.log('Fizz')
    result += 'Fizz'
  } else if (i % 5 == 0) {
    // console.log('Buzz')
    result += 'Buzz'
  } else {
    // console.log(i)
    result += `${i}`
  }
}
console.log(result)