/* Using Binet's formula to find the nth term of Fibonacci sequence */
const fibonacci = function (num) {
    if (num > 0) {
        var firstPhi = Math.pow(((1 + Math.sqrt(5)) / 2), num);
        var secondPhi = Math.pow(((1 - Math.sqrt(5)) / 2), num);
        return fibonacciNumber = Math.floor((firstPhi - secondPhi) / Math.sqrt(5));
    } else {
        return "OOPS"
    }
};

// Do not edit below this line
module.exports = fibonacci;
