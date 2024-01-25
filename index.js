// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  // new array new cat appended
  return [...cats, name];
}

function prependCat(name) {
  //new array with new cat prepended
  return [name, ...cats];
}

function removeLastCat() {
  // new array w/t the last cat
  return cats.slice(0, -1);
}

function removeFirstCat() {
  //new array without the first cat
  return cats.slice(1);
}

// Export the functions 
module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat,
};