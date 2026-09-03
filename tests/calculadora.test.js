const { somar, subtrair } = require("../src/calculadora");

test("deve somar dois números", () => {
  expect(somar(2, 3)).toBe(6);
});

test("deve subtrair dois números", () => {
  expect(subtrair(5, 3)).toBe(2);
});
