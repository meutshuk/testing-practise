const reverseString = require("../code/reverseString");

test("should reverse the String", () => {
  expect(reverseString("utshuk")).toBe("kuhstu");
});

test("should reverse string in sentence", () => {
  expect(reverseString("Utshuk is a good Boy")).toBe("yoB doog a si kuhstU");
});

test("Should return empty when input is empty", () => {
  expect(reverseString("")).toBe("");
});
