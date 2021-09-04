const calculate = require("../code/calculate");

test("should add two number", () => {
  expect(calculate.add(1, 2)).toBe(3);
});

test("should subtract two number", () => {
  expect(calculate.subtract(1, 2)).toBe(-1);
});

test("should divide two number", () => {
  expect(calculate.divide(6, 2)).toBe(3);
});

test("should divide two number when changing place of number ie, bigger number first or second", () => {
  expect(calculate.divide(2, 6)).toBe(3);
});

test("should multiply two number", () => {
  expect(calculate.multiply(1, 2)).toBe(2);
});
