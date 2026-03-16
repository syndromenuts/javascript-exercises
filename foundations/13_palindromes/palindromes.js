const palindromes = function (str) {
    const ALPHANUMERICAL_REGEX = /[^\w]/g;
    str = str
            .replace(ALPHANUMERICAL_REGEX, "")
            .toLowerCase();

    const reversed = str.split("").reverse().join("");

    return str === reversed;
};

// Do not edit below this line
module.exports = palindromes;
