const pokemonImage = document.querySelector(".random-image");

const getRandomId = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + 1;
};

const getRandomPokemon = async () => {
  try {
    const randomId = getRandomId(1, 151);

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomId}`,
    );
    const pokemonData = await response.json();

    const imageUrl =
      pokemonData.sprites.other["official-artwork"].front_default;

    pokemonImage.src = imageUrl;
    pokemonImage.alt = pokemonData.name;
  } catch (error) {
    console.error("Error al obtener el Pokémon aleatorio: " + error);
  }
};

getRandomPokemon();