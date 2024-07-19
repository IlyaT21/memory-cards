import { useState } from "react";
import "./App.css";
import Fetch from "./components/fetch/Fetch.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Fetch />
    </>
  );
}

export default App;
