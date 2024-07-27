import React, { useState, useEffect } from "react";
import "./Gameboard.scss";

function Gameboard({ pokemonData, fetchPokemon }) {
  const [selectedPokemonNames, setSelectedPokemonNames] = useState([]);
  const [shuffledData, setShuffledData] = useState([]);
  const [popupMessage, setPopupMessage] = useState("");

  useEffect(() => {
    setShuffledData([...pokemonData]);
  }, [pokemonData]);

  const shuffleArray = (array) => {
    return array.sort(() => 0.5 - Math.random());
  };

  const handleSelect = (pokemon) => {
    if (selectedPokemonNames.includes(pokemon.name)) {
      setPopupMessage("Already selected! Fetching new Pokémon...");
      fetchPokemon();
      setSelectedPokemonNames([]);
    } else {
      setSelectedPokemonNames([...selectedPokemonNames, pokemon.name]);
      setShuffledData(shuffleArray([...shuffledData]));
    }
  };

  const closePopup = () => {
    setPopupMessage("");
  };

  return (
    <>
      <h1>Gameboard</h1>
      {pokemonData.length === 0 ? (
        <p>Pokémon data loading...</p>
      ) : (
        <div className="card-holder">
          {shuffledData.map((pokemon, index) => (
            <button key={index} onClick={() => handleSelect(pokemon)}>
              <h2>{pokemon.name}</h2>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </button>
          ))}
        </div>
      )}
      {popupMessage && (
        <div className="popup">
          <p>{popupMessage}</p>
          <button onClick={closePopup}>Close</button>
        </div>
      )}
    </>
  );
}

export default Gameboard;
