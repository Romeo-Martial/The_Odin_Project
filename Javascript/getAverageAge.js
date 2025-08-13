// User is {name, age}
// Array[User] -> Number
// Given an array of user objects, this function calculates the average age of the users.
function getAverageAge(arr) {
  return arr.length === 0
    ? 0
    : arr.reduce((sum, user) => sum + user.age, 0) / arr.length;
}

module.exports = getAverageAge;
