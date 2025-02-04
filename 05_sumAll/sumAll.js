const sumAll = function(a, b) {
    let total = 0;
    let lowest = 0;
    let largest = 0;

    if (a < 0 || b < 0) return 'ERROR';
    if (!Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR';

    if (a > b) {
        largest = a;
        lowest = b;
    } else {
        largest = b;
        lowest = a;
    }

    for (let i = lowest; i <= largest; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
