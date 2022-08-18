import { useState, useEffect } from "react";
import { getPokemon } from "./util";
import Card from "./components/Card";

const AllPokemon = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        (async () => {
            const first50Pokemon = await getPokemon(0, 50);
            setPokemon(first50Pokemon);
        })();
    }, [])
    
    return (
        <>
            {pokemon.map(({name, url}, id) => (
                <Card key={id} name={name} url={url} />
            ))}
        </>
    )
}
export default AllPokemon;