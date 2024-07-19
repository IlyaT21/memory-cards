import React, { useEffect, useState } from "react";
import axios from "axios";

function Fetch() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
        );
        let pokemonList = response.data.results.slice(0, 10);
        pokemonList = pokemonList.sort(() => 0.5 - Math.random());

        // Step 2: Fetch details for each Pokémon
        const promises = pokemonList.map((pokemon) => axios.get(pokemon.url));
        const pokemonDetails = await Promise.all(promises);

        // Step 3: Extract and set the data
        const detailedPokemonData = pokemonDetails.map((detail) => detail.data);
        setPokemonData(detailedPokemonData);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    }

    fetchPokemon();
  }, []);

  return (
    <div>
      <h1>Pokémon List</h1>
      {pokemonData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {pokemonData.map((pokemon, index) => (
            <>
              <li key={index}>
                <h2>{pokemon.name}</h2>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              </li>
            </>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Fetch;
