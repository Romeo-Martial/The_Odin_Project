const filterRange = require("./filterRange");

test("basic case", () => {
  expect(filterRange([5, 3, 8, 1], 1, 4)).toEqual([3, 1]);
});
test("filterRange with negative numbers", () => {
  expect(filterRange([-5, -3, -8, -1], -4, -2)).toEqual([-3]);
});
test("filterRange with mixed numbers", () => {
  expect(filterRange([-5, 0, 3, 8, 1], -2, 4)).toEqual([0, 3, 1]);
});
test("filterRange with no numbers in range", () => {
  expect(filterRange([10, 20, 30], 1, 5)).toEqual([]);
});
test("filterRange with all numbers in range", () => {
  expect(filterRange([1, 2, 3, 4, 5], 1, 5)).toEqual([1, 2, 3, 4, 5]);
});
test("filterRange with empty array", () => {
  expect(filterRange([], 1, 5)).toEqual([]);
});
test("filterRange with single element in range", () => {
  expect(filterRange([3], 1, 5)).toEqual([3]);
});
test("filterRange with single element out of range", () => {
  expect(filterRange([10], 1, 5)).toEqual([]);
});
test("filterRange with large numbers", () => {
  expect(filterRange([1000, 2000, 3000], 1500, 2500)).toEqual([2000]);
});
test("filterRange with floating point numbers", () => {
  expect(filterRange([1.5, 2.5, 3.5], 2, 3)).toEqual([2.5]);
});
