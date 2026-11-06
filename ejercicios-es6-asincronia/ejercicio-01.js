// ej 1.1
const game = {
  title: "The Last of Us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};

const {
  title,
  gender: [gender1, gender2, gender3],
  year,
} = game;

console.log(title);
console.log(gender1);
console.log(gender2);
console.log(gender3);
console.log(year);

// ej 1.2
const fruits = ["Banana", "Strawberry", "Orange"];

const [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

// ej 1.3
const animalFunction = () => {
  return { name: "Bengal Tiger", race: "Tiger" };
};

const { name: animalName, race: animalRace } = animalFunction();

console.log(animalName);
console.log(animalRace);

// ej 1.4
const car = { name: "Mazda 6", itv: [2015, 2011, 2020] };

const { name: carName, itv } = car;

console.log(carName);
console.log(itv);

const [itv1, itv2, itv3] = itv;

console.log(itv1);
console.log(itv2);
console.log(itv3);
