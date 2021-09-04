function capitalize(name) {
  if (name.length == 0) return "";
  var newString = name.toLowerCase().split(" ");

  for (let index = 0; index < newString.length; index++) {
    newString[index] =
      newString[index][0].toUpperCase() + newString[index].substr(1);
  }
  return newString.join(" ");
}

// capitalize("apple is a fr");

module.exports = capitalize;
