const sumAll = function(bound1, bound2) {
    if (bound1 < 0 || bound2 < 0) {
        return "ERROR";
    }

    if (!Number.isInteger(bound1) || !Number.isInteger(bound2)) {
        return "ERROR";
    }

    

    const left = bound1 < bound2 ? bound1 : bound2;
    const right = bound1 > bound2 ? bound1 : bound2;

    let sum = 0;
    for (let i = left ; i <= right; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
