const app = "I don't do much."
var kittens = ["Milo","Otis","Garfield"]
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return name
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return name
}
function destructivelyRemoveLastKitten() {
  kittens.pop();
  return name
}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return name
}
function appendKitten(name) {
  return [...kittens,name]
}
function prependKitten(name) {
  return [name,...kittens]
}
function removeLastKitten() {
  return kittens.slice(0,kittens.length -1)
}
function removeFirstKitten() {
  return kittens.slice(1)
}