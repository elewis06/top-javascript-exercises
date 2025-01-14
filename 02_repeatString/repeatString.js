const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    
    let stringBuilder = "";

    for (let i = 0; i < num; i++) {
        stringBuilder += string;
    }

    return stringBuilder;
};

// Do not edit below this line
module.exports = repeatString;
