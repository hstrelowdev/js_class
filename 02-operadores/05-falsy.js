// falso

// false,0,'',null,undefined,nan

let nombre = "peppa pig";

let username = nombre || "Anonimo";
console.log(username);

function fn1() {
  console.log("soy funcion1");
  return true;
}

function fn2() {
  console.log("soy funcion2");
  return false;
}
