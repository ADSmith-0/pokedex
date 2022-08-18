import { useState, useEffect } from "react";
import { getPokemon } from "./APIHelper";
import Card from "./components/Card";
import './css/AllPokemon.css';

const AllPokemon = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        (async () => {
            const first50Pokemon = await getPokemon(0, 50);
            setPokemon(first50Pokemon);
        })();
    }, [])
    
    return (
        <main id="pokemon-grid">
            {pokemon.map(({name, url}, id) => {
                const pokemonInfo = fetch(url);
                return (
                    <Card key={id} name={name} info={pokemonInfo} />
                );
            })}
        </main>
    )
}
export default AllPokemon;