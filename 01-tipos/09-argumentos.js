function suma(a) {
  console.log(arguments);
  return a + 2;
}

let result = suma(1, 2, 3, 4, 5, 6);
console.log(result);
console.log(typeof suma);
