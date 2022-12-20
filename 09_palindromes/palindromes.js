const palindromes = function (string) {
    const reverseString = string.replace(/[^a-zA-Z]|\r?\n|\r/g, "").split("").reverse().join("").toLowerCase();
    if (reverseString === string.replace(/[^a-zA-Z]|\r?\n|\r/g, "").toLowerCase()) {
        return true;
    } else {
        return false;
    }
};
// Do not edit below this line
module.exports = palindromes;
