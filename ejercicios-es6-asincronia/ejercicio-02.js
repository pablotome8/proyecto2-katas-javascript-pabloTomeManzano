// ej 2.1
const pointsList = [32, 54, 21, 64, 75, 43];

const copia = [...pointsList];

copia[0] = 10;

console.log(pointsList);
console.log(copia);

// ej 2.2
const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };

const toyCopia = { ...toy };

toyCopia.color = "yellow";

console.log(toy);
console.log(toyCopia);

// ej 2.3
const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54, 87, 99, 65, 32];

const pointsListCombined = [...pointsList1, ...pointsList2];

console.log(pointsListCombined);

// ej 2.4
const toyBase = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };

const finalToy = { ...toyBase, ...toyUpdate };

console.log(finalToy);

// ej 2.5
const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];

const [c0, c1, , ...resto] = colors;

const colors2 = [c0, c1, ...resto];

console.log(colors2);
