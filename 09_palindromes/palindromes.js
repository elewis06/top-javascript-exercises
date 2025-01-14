const palindromes = function (string) {
    string = string.replace(/[^\w]/g, '').toLowerCase();
    for (let i = 0; i < (string.length - 1) / 2; i++) {
        if (string[i] !== string[string.length - i - 1]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
