// ej 2.1

/* const pointsList = [32, 54, 21, 64, 75, 43];

const copia = [...pointsList];

copia[0] = 10;

console.log(pointsList);
console.log(copia); */

// ej 2.2

/* const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };

const toyCopia = { ...toy };

toyCopia.color = "yellow";

console.log(toy);
console.log(toyCopia); */

// ej 2.3

/* const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54, 87, 99, 65, 32];

const pointslis3 = [...pointsList, ...pointsLis2];

console.log(pointslis3); */

// ej 2.4

/* const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };

const finalToy = { ...toy, ...toyUpdate };

console.log(finalToy); */

// ej 2.5

/* const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];

const [c0, c1, , ...resto] = colors;

const colors2 = [c0, c1, ...resto];

console.log(colors2); */