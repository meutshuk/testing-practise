const reverseString = (string) => {

    if (string.length === 0 ) return ""
  return string.split("").reverse().join("");
};


module.exports = reverseString;
