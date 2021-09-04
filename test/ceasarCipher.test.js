const ceasarCipher = require("../code/ceasarCipher");

test("should shift a single word", () => {
  expect(ceasarCipher("utshuk", 5)).toBe("zyxmzp");
});
