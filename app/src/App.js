import React from "react";
import "./CSS/App.css";
import Header from "./Components/Header";
import PokemonList from "./Components/PokemonList";

function App() {
  return (
    <div className="App">
      <Header />
      <PokemonList />
    </div>
  );
}
// heck yeah
export default App;
