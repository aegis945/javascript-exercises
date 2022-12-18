const reverseString = function (input) {
    let string = [];
    string += input;
    return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
