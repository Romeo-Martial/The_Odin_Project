const sortByAge = require("./sortByAge");

test("empty array", () => {
  expect(sortByAge([])).toEqual([]);
});
test("array with one element", () => {
  expect(sortByAge([{ name: "Alice", age: 30 }])).toEqual([
    { name: "Alice", age: 30 },
  ]);
});
test("array with multiple elements", () => {
  expect(
    sortByAge([
      { name: "Alice", age: 30 },
      { name: "Bob", age: 25 },
      { name: "Charlie", age: 35 },
    ])
  ).toEqual([
    { name: "Bob", age: 25 },
    { name: "Alice", age: 30 },
    { name: "Charlie", age: 35 },
  ]);
});
test("array with same age", () => {
  expect(
    sortByAge([
      { name: "Alice", age: 30 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 30 },
    ])
  ).toEqual([
    { name: "Alice", age: 30 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 30 },
  ]);
});
