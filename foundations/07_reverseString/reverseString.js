const reverseString = function(str) {
    // For loop starting from last character and going to first character
    // add character to a result string

    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return result;
};

// Do not edit below this line
module.exports = reverseString;
