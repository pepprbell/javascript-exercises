const removeFromArray = function() {
    let arr = arguments[0]
    for (let i = 1; i < arguments.length; i++) {
        let idx = arr.indexOf(arguments[i])
        if (idx !== -1) {
            arr.splice(idx,1)
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
