const removeFromArray = function(inArray, ...filterArgs) {
    let outArray = inArray.filter(element => !filterArgs.includes(element));

    return outArray;
};

// Do not edit below this line
module.exports = removeFromArray;
