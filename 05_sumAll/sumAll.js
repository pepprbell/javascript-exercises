const sumAll = function(start, end) {
    if (end < start) {
        [start, end] = [end, start]
    }
    if (!Number.isInteger(start) || !Number.isInteger(end) || start*end < 0) {
        return 'ERROR'
    }
    let res = 0
    for (let i = start; i < end+1; i++) {
        res += i
    }
    return res
};

// Do not edit below this line
module.exports = sumAll;
