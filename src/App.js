import Header from "./components/Header";
import { Routes, Route } from 'react-router-dom';
import AllPokemon from "./AllPokemon";
import Favourites from "./Favourites";
import Compare from "./Compare";
import GetAllPokemonNames from "./getAllPokemonNames";
import { initialiseFavouritedPokemon } from "./LocalStorageHelper";

initialiseFavouritedPokemon();

function App() {
  return (
    <>
        <Header/>
        <Routes>
            <Route path="/" element={<AllPokemon/>} />
            <Route path="/favourites" element={<Favourites/>} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/getAllPokemonNames" element={<GetAllPokemonNames />} />
        </Routes>
    </>
  );
}
export default App;
