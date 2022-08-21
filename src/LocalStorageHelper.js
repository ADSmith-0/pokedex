/*
    Function to initialise an object in localstorage
    to store favourited pokemon
*/ 
const initialiseFavouritedPokemon = () => {
    const favouritedPokemon = getFavouritedPokemon();
    console.log(favouritedPokemon);
    if(Object.keys(favouritedPokemon).length === 0) localStorage.setItem('favourited_pokemon', JSON.stringify({}));
}

/*
    Function to get the list of favourited pokemon and parse them
    return <Object>(name: url): a json object of the name and url
    for every favourited pokemon
*/ 
const getFavouritedPokemon = () => JSON.parse(localStorage.getItem('favourited_pokemon'));

/*
    Function to set a new object of favourited pokemon
    favouritePokemon <Object>(name:url): the object of new favourited pokemon
*/ 
const setFavouritedPokemon = favouritedPokemon => localStorage.setItem('favourited_pokemon', JSON.stringify(favouritedPokemon));

/*
    Function to find if a pokemon is favourited
    pokemon <String>: The name of the pokemon you want to find in Titlecase
    return <Boolean>: True of false if the pokemon has been found
*/ 
const isPokemonFavourited = pokemon => {
    const favouritedPokemon = getFavouritedPokemon();
    return favouritedPokemon[pokemon];
}

export { initialiseFavouritedPokemon, getFavouritedPokemon, setFavouritedPokemon, isPokemonFavourited }