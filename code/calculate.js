const calculate = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  divide: (a, b) => {
    return a > b ? a / b : b / a;
  },
  multiply: (a, b) => {
    return a * b;
  },
};

module.exports = calculate;
