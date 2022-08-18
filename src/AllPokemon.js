import { useState, useEffect } from "react";
import { getGeneration, getPokemon } from "./APIHelper";
import PokemonGrid from "./components/PokemonGrid";
import './css/AllPokemon.css';

const getFirst50Pokemon = async () => (await getPokemon(0, 50));

const AllPokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const [ generation, setGeneration ] = useState(0);

    useEffect(() => {
        (async () => {
            setPokemon(await getFirst50Pokemon());
        })();
    }, [])

    useEffect(() => {
        (async () => {
            if(generation === 0){
                setPokemon(await getFirst50Pokemon());
            }else{
                setPokemon(await getGeneration(generation));
                // console.log(await getGeneration(generation));
            }
        })()
    }, [generation]);
    
    return (
        <>
            <section id="all-pokemon-options">
                <label id="generation-option">Generation:
                    <select onChange={(e) => setGeneration(e.target.value)}>
                        <option value="0">Select a generation</option>
                        <option value="1">Generation I</option>
                        <option value="2">Generation II</option>
                        <option value="3">Generation III</option>
                        <option value="4">Generation IV</option>
                        <option value="5">Generation V</option>
                        <option value="6">Generation VI</option>
                        <option value="7">Generation VII</option>
                        <option value="8">Generation VIII</option>
                    </select>
                </label>
                <label id="pokemon-loaded-option">No. of Pokemon loaded:
                    <select>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </label>
            </section>
            <PokemonGrid pokemon={pokemon} />
        </>
    )
}
export default AllPokemon;