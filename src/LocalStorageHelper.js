/*
    Function to initialise an object in localstorage
    to store favourited pokemon
*/ 
const initialiseFavouritedPokemon = () => {
    const favouritedPokemon = getFavouritedPokemon();
    if(!favouritedPokemon) localStorage.setItem('favourited_pokemon', JSON.stringify({}));
}

/*
    Function to get the list of favourited pokemon and parse them
    return <Object>(name: url): a json object of the name and url
    for every favourited pokemon
*/ 
const getFavouritedPokemon = () => JSON.parse(localStorage.getItem('favourited_pokemon'));

/*
    Function to set a new object of favourited pokemon
    pokemonName <Object>(name:url): the object of new favourited pokemon
*/ 
const setFavouritedPokemon = pokemonName => localStorage.setItem('favourited_pokemon', JSON.stringify(pokemonName));

/*
    Function to find if a pokemon is favourited
    pokemonName <String>: The name of the pokemon you want to find in Titlecase
    return <Boolean>: True of false if the pokemon has been found
*/ 
const isPokemonFavourited = pokemonName => {
    const favouritedPokemon = getFavouritedPokemon() || false;
    if(favouritedPokemon) return !!favouritedPokemon[pokemonName];
    return false;
}

const addToFavourited = pokemonName => {
    const favouritedPokemon = getFavouritedPokemon();
    setFavouritedPokemon({ ...favouritedPokemon, [pokemonName]: process.env.REACT_APP_API_URL + "pokemon/" + pokemonName });
}

const removeFromFavourited = pokemonName => {
    const favouritedPokemon = getFavouritedPokemon();
    delete favouritedPokemon[pokemonName];
    setFavouritedPokemon(favouritedPokemon);
}

const toggleFavourited = (pokemonName, isFavourited) => {
    if(isFavourited){
        removeFromFavourited(pokemonName);  
    }else{
        addToFavourited(pokemonName);
    }
}

export { 
    initialiseFavouritedPokemon, 
    getFavouritedPokemon, 
    setFavouritedPokemon, 
    isPokemonFavourited, 
    addToFavourited, 
    removeFromFavourited, 
    toggleFavourited 
}
