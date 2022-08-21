const ftoc = function(fer) {
  return Math.round((fer - 32) * 50/9)/10
};

const ctof = function(cel) {
  return Math.round(cel * 90/5 + 320)/10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
