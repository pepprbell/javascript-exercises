const fibonacci = function(n) {
    if (n<0) {
        return 'OOPS'
    }
    let res = [0,1,1]
    for (let i = 2; i < n; i++) {
        res.push(res[i-1]+res[i])        
    }
    return res[n]
};

// Do not edit below this line
module.exports = fibonacci;