var capitalize = require("../code/capitalize");
// import capitalize from "../code/capitalizes";

test("First Letter of the word should be Capitalize", () => {
  expect(capitalize("apple")).toBe("Apple");
});

test("All the First letter in the sentence should be capitalized", () => {
  expect(capitalize("apple is a fruit")).toBe("Apple Is A Fruit");
});

test("return empty string when usrt inputs empty string", () => {
  expect(capitalize("")).toBe("");
});

test("should return jAvAsCrIpT as Javascript", () => {
  expect(capitalize("apple is")).toBe("Apple Is");
});
