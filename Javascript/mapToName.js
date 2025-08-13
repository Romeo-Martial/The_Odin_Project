// User is {name, age}
// Array[User] -> Array[name]
// Converts the input array into an array of names
function mapToName(arr) {
  if (arr.length === 0) {
    return [];
  }
  return arr.map((user) => user.name);
}

module.exports = mapToName;
