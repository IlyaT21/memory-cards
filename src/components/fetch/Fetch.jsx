import React, { useEffect } from "react";
import axios from "axios";

function Fetch({ setPokemonData, triggerFetch }) {
  const fetchPokemon = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
      );
      let pokemonList = response.data.results;
      pokemonList = pokemonList.sort(() => 0.5 - Math.random());
      pokemonList = pokemonList.slice(0, 10);

      const promises = pokemonList.map((pokemon) => axios.get(pokemon.url));
      const pokemonDetails = await Promise.all(promises);

      const detailedPokemonData = pokemonDetails.map((detail) => detail.data);
      setPokemonData(detailedPokemonData);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  };

  useEffect(() => {
    fetchPokemon();
    console.log(fetchPokemon());
  }, [triggerFetch]);
}

export default Fetch;
