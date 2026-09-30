// ej 6.1

const exams = [
  { name: "Yuyu Cabeza Crack", score: 5 },
  { name: "Maria Aranda Jimenez", score: 1 },
  { name: "Cristóbal Martínez Lorenzo", score: 6 },
  { name: "Mercedez Regrera Brito", score: 7 },
  { name: "Pamela Anderson", score: 3 },
  { name: "Enrique Perez Lijó", score: 6 },
  { name: "Pedro Benitez Pacheco", score: 8 },
  { name: "Ayumi Hamasaki", score: 4 },
  { name: "Robert Kiyosaki", score: 2 },
  { name: "Keanu Reeves", score: 10 },
];

/* 

const sumNotas = exams.reduce((acc, item) => (acc + item.score), 0);

console.log(sumNotas);
 */

// ej 6.2

/* 
const sumAprobados = exams.reduce(
  (acc, item) => (item.score >= 5 ? (acc + item.score) : acc),
  0,
);

console.log(sumAprobados); */

// ej 6.3

/* const mediaNotas = exams.reduce(
  (acc, item) => acc + item.score / exams.length,
  0,
);

console.log(mediaNotas.toFixed(1)); */