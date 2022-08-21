const removeFromArray = function(arr, num) {
    let i = arr.indexOf(num)
    arr.splice(i,1)
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
