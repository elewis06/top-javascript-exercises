const reverseString = function(inString) {
    let stringBuilder = "";

    for (let i = inString.length - 1; i >= 0 ; i--) {
        stringBuilder += inString.charAt(i);
    }

    return stringBuilder;
};

// Do not edit below this line
module.exports = reverseString;
