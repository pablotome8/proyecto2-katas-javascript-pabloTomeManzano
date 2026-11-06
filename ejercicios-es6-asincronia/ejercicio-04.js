// ej 4.1
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const agesMayor18 = ages.filter((num) => num > 18);

console.log(agesMayor18);

// ej 4.2
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const agesPar = ages2.filter((age) => age % 2 === 0);

console.log(agesPar);

// ej 4.3
const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const streamersLol = streamers.filter(
  (streamer) => streamer.gameMorePlayed === "League of Legends",
);

console.log(streamersLol);

// ej 4.4
const streamers2 = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const streamersWithU = streamers2.filter((streamer) =>
  streamer.name.includes("u"),
);

console.log(streamersWithU);

// ej 4.5
const streamers3 = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const streamersLegends = streamers3
  .filter((streamer) => streamer.gameMorePlayed.includes("Legends"))
  .map((streamer) => {
    const updated = { ...streamer };
    if (updated.age > 35) {
      updated.gameMorePlayed = updated.gameMorePlayed.toUpperCase();
    }
    return updated;
  });

console.log(streamersLegends);
