// Ejercicio 41: Función rollDice
// Crea una función llamada rollDice() que reciba como parámetro el número de caras que queremos que tenga el dado.
// Debe generar un número pseudoaleatorio entre 1 y el número de caras recibido.

function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

console.log('Tirada de dado de 6 caras:', rollDice(6));
console.log('Tirada de dado de 20 caras:', rollDice(20));
