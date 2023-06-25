// TODO
/*
function hello(name) {
  if (name && name.trim() !== '') {
    Capitalize the first letter and convert the rest to lowercase
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return `Hello, ${formattedName}!`;
  } else {
    return "Hello, World!";
  }
}
*/

function hello(name) {
  if (name && name.trim() !== "") {
    // Capitalize the first letter and convert the rest to lowercase
    const formattedName =
      name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return `Hello, ${formattedName}!`;
  } else {
    return "Hello, World!";
  }
}
