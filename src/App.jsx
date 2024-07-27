import React, { useState } from "react";
import "./App.css";
import Fetch from "./components/fetch/Fetch";
import Gameboard from "./components/gameboard/Gameboard";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [triggerFetch, setTriggerFetch] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const fetchPokemon = () => {
    setPokemonData([]); // Clear the state to trigger fetching new data
    setTriggerFetch((prev) => !prev); // Toggle triggerFetch to re-fetch data
    setCurrentScore(0); // Reset current score
  };

  const updateScore = (newScore) => {
    setCurrentScore(newScore);
    if (newScore > highScore) {
      setHighScore(newScore);
    }
  };

  return (
    <>
      <div className="scoreboard">
        <p>Current Score: {currentScore}</p>
        <p>High Score: {highScore}</p>
      </div>
      <Fetch setPokemonData={setPokemonData} triggerFetch={triggerFetch} />
            <Gameboard
        pokemonData={pokemonData}
        fetchPokemon={fetchPokemon}
        currentScore={currentScore}
        updateScore={updateScore}
      />
    </>
  );
}

export default App;
