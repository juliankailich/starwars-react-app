import axios from "axios";

/* I made this function because maybe a search like Yoda finds results by name and by species (Yoda specie).. This rendered 2 cards.. so it's okay to check for duplicates */
export const checkDuplicates = (charactersArray: any[]) => {
  const seen = new Set();
  return charactersArray.filter((character) => {
    const duplicate = seen.has(character.name);
    seen.add(character.name);
    return !duplicate;
  });
};

export const handleError = (error: any) => {
  /* in larger applications we could have more advanced error handling, such as giving feedback to the user with an alert or trying to make the call to a backup endpoint */
  console.error(error);
};

export const getCharacterByWorldAndSpecie = ({
  planets,
  species,
  character,
}: any) => {
  const planet: any = planets.find(
    (planet: any) => planet.url === character.homeworld
  );
  const homeworld = planet ? planet.name : "unknown";

  const specie: any = species.find(
    (specie: any) => specie.url === character.species[0]
  );
  const characterSpecie = specie ? specie.name : "unknown";

  return { homeworld, characterSpecie };
};

export const getCharacterByURL = async (
  characterURL: string,
  planets: any,
  species: any
) => {
  try {
    const response = await axios.get(characterURL);
    const character = response.data;
    const { homeworld, characterSpecie } = getCharacterByWorldAndSpecie({
      planets,
      species,
      character,
    });
    return { ...character, homeworld, species: characterSpecie };
  } catch (error) {
    handleError(error);
  }
};

/* function that is executed when starting the app. It obtains all the planets and we avoid having to make many extra calls later since the character JSON has the value homeworld as a url so we should call that endpoint to obtain it */
export const getAllPlanets = async () => {
  let allPlanets: any = [];
  let nextPageUrl = "https://swapi.dev/api/planets/";

  while (nextPageUrl) {
    try {
      const response = await axios.get(nextPageUrl);
      const { data } = response;
      allPlanets = allPlanets.concat(data.results);

      nextPageUrl = data.next;
    } catch (error) {
      handleError(error);
      break;
    }
  }

  return allPlanets;
};

/* function that is executed when starting the app. It obtains all the species and we avoid having to make many extra calls later since the character JSON has the value species as a url so we should call that endpoint to obtain it */
export const getAllSpecies = async () => {
  let allSpecies: any = [];
  let nextPageUrl = "https://swapi.dev/api/species/";

  while (nextPageUrl) {
    try {
      const response = await axios.get(nextPageUrl);
      const { data } = response;

      allSpecies = allSpecies.concat(data.results);

      nextPageUrl = data.next;
    } catch (error) {
      handleError(error);
      break;
    }
  }

  return allSpecies;
};
