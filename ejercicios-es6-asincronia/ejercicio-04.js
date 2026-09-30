// ej 4.1

/* const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const agesMayor18 = ages.filter((num) => num > 18);

console.log(agesMayor18); */

// ej 4.2

/* const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const agesPar = ages.filter((age) => age % 2 === 0);

console.log(agesPar); */

// ej 4.3

/* const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const streamersLol = streamers.filter(
  (streamer) => streamer.gameMorePlayed === "League of Legends",
);

console.log(streamersLol); */

// ej 4.4

/* const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const streamersWithU = streamers.filter((streamer) =>
  streamer.name.includes("u"),
);

console.log(streamersWithU); */

// ej 4.5

/* const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const streamersLol = streamers
  .filter((streamer) => streamer.gameMorePlayed.includes("Legends"))
  .map((streamer) => {
    if (streamer.age > 35) {
      streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
    }
    return streamer;
  });

console.log(streamersLol); */