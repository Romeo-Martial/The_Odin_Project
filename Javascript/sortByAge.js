// User is {name, age}
// Array[User] -> Array[User]
// Given an array of objects with the age property and sorts them by age
function sortByAge(arr) {
  return arr.sort((a, b) => a.age - b.age);
}
module.exports = sortByAge;
