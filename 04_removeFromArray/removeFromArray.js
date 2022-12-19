const removeFromArray = function (...args) {
    const array = args[0];
    return array.filter(element => !args.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;