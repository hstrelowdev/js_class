let user = {
  id: 1,
  name: "goku",
  age: 25,
};

for (let prop in user) {
  console.log(prop, user[prop]);
}

let animales = ["Chanchito feliz", "Dragon", "canguro"];

for (let indice in animales) {
  console.log(indice, animales[indice]);
}
