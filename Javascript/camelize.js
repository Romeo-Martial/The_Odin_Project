// String -> String
// Change dash-separated words to camelCase
function camelize(str) {
  // split the dash-separated word
  const words = str.split("-");

  // Capitalize the first letter of each word except the first one
  function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
  capitalizedWords = words.slice(1).map(capitalize);

  // Join the words back together, removing the dashes
  camelCasedWord = words[0] + capitalizedWords.join("");
  return camelCasedWord;
}

module.exports = camelize;
