import React, { useState } from "react";
import "./App.css";
import Fetch from "./components/fetch/Fetch";
import Gameboard from "./components/gameboard/Gameboard";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [triggerFetch, setTriggerFetch] = useState(false);

  const fetchPokemon = () => {
    setPokemonData([]);
    setTriggerFetch((prev) => !prev);
  };

  return (
    <>
      <Fetch setPokemonData={setPokemonData} triggerFetch={triggerFetch} />
      <Gameboard pokemonData={pokemonData} fetchPokemon={fetchPokemon} />
    </>
  );
}

export default App;
