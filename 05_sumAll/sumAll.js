const sumAll = function (firstInt, secondInt) {
    let sum = 0;
    if ((firstInt < 0) || (secondInt < 0) || (!Number.isInteger(firstInt)) || (!Number.isInteger(secondInt))) {
        return "ERROR";
    }
    if (firstInt < secondInt) {
        for (let i = firstInt; i <= secondInt; i++) {
            sum += i;
        }
    }
    if (firstInt > secondInt) {
        for (let i = secondInt; i <= firstInt; i++) {
            sum += i;
        }
    };
    return sum;
}
// Do not edit below this line
module.exports = sumAll;
