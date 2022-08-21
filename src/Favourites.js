import PokemonGrid from "./components/PokemonGrid"
import { getFavouritedPokemon } from "./LocalStorageHelper"

const Favourites = () => {

    const favouritedPokemon = getFavouritedPokemon();
    let favouritedPokemonArr = [];
    for(let pokemon in favouritedPokemon){
        let normalisedPokemon = {"name": pokemon, "url": favouritedPokemon[pokemon]};
        favouritedPokemonArr = [...favouritedPokemonArr, normalisedPokemon];
    }
    return (
        <>
            <PokemonGrid pokemon={favouritedPokemonArr} />
        </>
    )
}
export default Favourites;