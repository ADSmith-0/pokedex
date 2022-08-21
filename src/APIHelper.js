/* Get all pokemon from a start id to an end id
    start <integer>: The id of the pokemon you want to start with
    end <integer>: The id of the pokemon you want to end with
    return <JSON Object>: a list of pokemon with values { name, url } 
 */
const getPokemon = async (start, end) => {
    const { results } = await fetch(process.env.REACT_APP_API_URL+`pokemon/?offset=${start}&limit=${end}`).then(res => res.json());
    return results;
}

/* Gets all pokemon from a generation
    genNumber <integer>: the generation you want to get
    return <JSON Object>: a list of pokemon with values { name, url }
*/
const getGeneration = async genNumber => {
    const result = await fetch(process.env.REACT_APP_API_URL + "generation/" + genNumber).then(res => res.json());
    return result["pokemon_species"];
}

/*
    Get all the information for a single pokemon
    pokemonName <String>: name of pokemon to find, in lower case
    return <Object>: JSON object that has all pokemon properties
*/ 
const getPokemonInfo = async pokemonName => (
    await fetch(process.env.REACT_APP_API_URL + "pokemon/" + pokemonName).then(res => res.json())
)

export { getPokemon, getGeneration, getPokemonInfo }