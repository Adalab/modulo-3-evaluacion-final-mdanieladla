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
        };
      });
    });
};

export default callToApi;
