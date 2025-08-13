const getAverageAge = require("./getAverageAge");

test("empty array", () => {
  expect(getAverageAge([])).toBe(0);
});

test("array with one element", () => {
  expect(getAverageAge([{ name: "Alice", age: 30 }])).toBe(30);
});

test("array with multiple elements", () => {
  expect(
    getAverageAge([
      { name: "Alice", age: 30 },
      { name: "Bob", age: 25 },
      { name: "Charlie", age: 35 },
    ])
  ).toBe(30);
});

test("array with same age", () => {
  expect(
    getAverageAge([
      { name: "Alice", age: 30 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 30 },
    ])
  ).toBe(30);
});
test("array with more than three elements", () => {
  expect(
    getAverageAge([
      { name: "Alice", age: 30 },
      { name: "Bob", age: 25 },
      { name: "Charlie", age: 35 },
      { name: "David", age: 40 },
    ])
  ).toBe(32.5);
});
