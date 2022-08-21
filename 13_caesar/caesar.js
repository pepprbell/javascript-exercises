function btwn(i,x) {
    let I = i.toUpperCase()
    if (i === I) {
        return (65 <= x && x <= 90)
    }
    return (97 <= x && x <= 122)
}

const caesar = function(word, offset) {
    let res = ''
    offset = offset%26
    for (let i = 0; i < word.length; i++) {
        let x = word.charCodeAt(i)
        if (btwn(word[i],x)) {
            x += btwn(word[i],x+offset) ? offset : Math.sign(offset)*(-26)+offset
        }
        res += String.fromCharCode(x)
    }
    return res
};

// Do not edit below this line
module.exports = caesar;