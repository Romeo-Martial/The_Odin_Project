// User is { id, name, age }
// Array[User] -> Object
// Given a User, return an object from it, with id as the key, and array items as values.
function groupById(arr) {
  return arr.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {});
}
module.exports = groupById;
