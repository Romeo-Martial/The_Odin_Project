const groupById = require("./groupById");

test("empty array", () => {
  expect(groupById([])).toEqual({});
});

test("array with one user", () => {
  const input = [{ id: 1, name: "Alice", age: 30 }];
  const output = { 1: { id: 1, name: "Alice", age: 30 } };
  expect(groupById(input)).toEqual(output);
});

test("array with multiple users", () => {
  const input = [
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 34 },
  ];
  const output = {
    1: { id: 1, name: "Alice", age: 30 },
    2: { id: 2, name: "Bob", age: 25 },
    3: { id: 3, name: "Charlie", age: 34 },
  };
  expect(groupById(input)).toEqual(output);
});
