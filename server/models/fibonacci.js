function getFibonacciSequence(n) {
    let fibonacciSequence = [0, 1];
    for (let i = 2; i <= n; i++) {
      fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    }
    return fibonacciSequence.slice(0, n + 1);
  }
  
  module.exports = {
    getFibonacciSequence
  };