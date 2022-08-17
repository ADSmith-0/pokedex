/* Get all pokemon from a start id to an end id
    start <integer>: The id of the pokemon you want to start with
    end <integer>: The id of the pokemon you want to end with
 */
const getPokemon = async (start, end) => {
    const { results } = await fetch(process.env.REACT_APP_API_URL+`pokemon/?offset=${start}&limit=${end}`).then(res => res.json());
    return results;
}

/* Gets all pokemon from a generation
    genNumber <integer>: the generation you want to get
*/
const getGeneration = async genNumber => {
    const result = await fetch(process.env.REACT_APP_API_URL + "generation/" + genNumber).then(res => res.json());
    return result["pokemon_species"];
}

export { getPokemon, getGeneration }