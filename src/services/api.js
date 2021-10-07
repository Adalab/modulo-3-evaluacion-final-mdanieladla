const callToApi = () => {
  // Llamamos al API
  return fetch(' https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((response) => {
      // Cuando responde el API podemos limpiar los datos aquí
      return response.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          image: character.image,
          origin: character.origin.name,
          episode: character.episode.length,
          location: character.location.name,
        };
      });
    });
};

export default callToApi;
