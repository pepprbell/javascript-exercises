const reverseString = function(str) {
    let res = ''
    const arr = str.split('')
    for (let i = 1; i < arr.length+1; i++) {
        res += arr[arr.length-i]
    }
    return res
};

// Do not edit below this line
module.exports = reverseString;
