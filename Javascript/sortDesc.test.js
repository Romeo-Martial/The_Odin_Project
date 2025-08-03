const sortDesc = require("./sortDesc");

test("empty array", () => {
  expect(sortDesc([])).toEqual([]);
});
test("single element", () => {
  expect(sortDesc([5])).toEqual([5]);
});
test("already sorted", () => {
  expect(sortDesc([5, 4, 3, 2, 1])).toEqual([5, 4, 3, 2, 1]);
});
test("unsorted array", () => {
  expect(sortDesc([3, 1, 4, 2, 5])).toEqual([5, 4, 3, 2, 1]);
});
test("negative numbers", () => {
  expect(sortDesc([-1, -3, -2, -5, -4])).toEqual([-1, -2, -3, -4, -5]);
});
test("mixed numbers", () => {
  expect(sortDesc([3, -1, 4, 2, -5])).toEqual([4, 3, 2, -1, -5]);
});
test("floating point numbers", () => {
  expect(sortDesc([1.1, 2.2, 3.3, 0.5])).toEqual([3.3, 2.2, 1.1, 0.5]);
});
test("large numbers", () => {
  expect(sortDesc([1000, 500, 2000, 1500])).toEqual([2000, 1500, 1000, 500]);
});
