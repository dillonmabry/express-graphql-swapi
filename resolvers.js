const fetch = require("node-fetch");

const resolveFilms = parent => {
  const promises = parent.films.map(async url => {
    const response = await fetch(url);
    return response.json();
  });

  return Promise.all(promises);
};

export default {
  Planet: {
    films: resolveFilms
  },
  Person: {
    homeworld: async parent => {
      const response = await fetch(parent.homeworld);
      return response.json();
    },
    films: resolveFilms
  },
  Query: {
    hello: (_, { name }) => `Hello ${name || "World"}`,
    getPerson: async (_, { id }) => {
      const response = await fetch(`https://swapi.co/api/people/${id}/`);
      return response.json();
    }
  }
};


