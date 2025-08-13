// User is {name, surname, id}
// Array[User] -> Array[{fullName, id}]
function mapToObjects(arr) {
  return arr.map((user) => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id,
  }));
}
module.exports = mapToObjects;
