const characterList = document.querySelector("#character-list");
const characterImage = document.querySelector(".character-image");

let characters = [];

const getCharacters = async () => {
  try {
    const response = await fetch("https://thronesapi.com/api/v2/Characters");
    characters = await response.json();

    populateSelect(characters);
  } catch (error) {
    console.error("Error al obtener personajes: " + error);
  }
};

const populateSelect = (characterArray) => {
  const defaultOption = document.createElement("option");
  defaultOption.textContent = "Selecciona un personaje";
  defaultOption.value = "";
  characterList.appendChild(defaultOption);

  characterArray.forEach((char) => {
    const option = document.createElement("option");
    option.value = char.fullName;
    option.textContent = char.fullName;
    characterList.appendChild(option);
  });
};

characterList.addEventListener("change", (event) => {
  const selectedName = event.target.value;
  const foundCharacter = characters.find(
    (char) => char.fullName === selectedName,
  );

  if (foundCharacter) {
    characterImage.src = foundCharacter.imageUrl;
    characterImage.alt = foundCharacter.fullName;
  } else {
    characterImage.src = "";
    characterImage.alt = "";
  }
});

getCharacters();