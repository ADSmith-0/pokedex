import { getPokemon } from './APIHelper';

const getAllPokemonNames = async () => {
    const pokemon = await getPokemon(0, 2000);
    const namesArray = await pokemon.reduce((acc, val) => [...acc, val.name.toTitleCase()], []);
    console.log(namesArray);
}

// getAllPokemonNames();

const GetAllPokemonNames = () => {
    return (
        <h1>Blank</h1>
    );
}

export default GetAllPokemonNames;