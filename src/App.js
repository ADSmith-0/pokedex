import Header from "./components/Header";
import { Routes, Route } from 'react-router-dom';
import AllPokemon from "./AllPokemon";
import Favourites from "./Favourites";

function App() {
  return (
    <>
        <Header/>
        <Routes>
            <Route path="/" element={<AllPokemon/>} />
            <Route path="/favourites" element={<Favourites/>} />
        </Routes>
    </>
  );
}
export default App;
