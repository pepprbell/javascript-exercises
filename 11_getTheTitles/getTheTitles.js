const getTheTitles = function(data) {
    let res = []
    data.reduce((prev, curr) => res.push(curr.title) , [])
    return res
};

// Do not edit below this line
module.exports = getTheTitles;
