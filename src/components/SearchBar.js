import pokemonNames from '../PokemonNames.json';
import '../css/SearchBar.css';
import { useState } from 'react';
import { getPokemonInfo } from '../APIHelper';
import ExpandedCard from './ExpandedCard';

const SearchBar = () => {

    const [ suggestions, setSuggestions ] = useState(pokemonNames);
    const [ isAutocompleteVisible, setIsAutocompleteVisible ] = useState(false);
    const [ inputValue, setInputValue ] = useState("");
    const [ pokemonInfo, setPokemonInfo ] = useState();
    
    const autoComplete = searchTerm => {
        if(searchTerm){
            setSuggestions(pokemonNames.filter(name => name.toLowerCase().includes(searchTerm.toLowerCase())));
            setIsAutocompleteVisible(true);
        }else{
            setIsAutocompleteVisible(false);
        }
    }

    const handleSearchInput = e => {
        const searchTerm = e.target.value;
        setInputValue(searchTerm);
        autoComplete(searchTerm);
    }

    const populateSearchBar = e => {
        setInputValue(e.target.innerText);
        setIsAutocompleteVisible(false);
    }

    const searchForPokemon = async e => {
        const pokemonInfo = await getPokemonInfo(inputValue.toLowerCase());
        setPokemonInfo(await pokemonInfo);
    }

  return (
    <>
        <section id="searchbar-component">
            <input id="search-name" type="text" value={inputValue} onInput={handleSearchInput} placeholder="Search"/>
            <ul id="search-autocomplete" className={isAutocompleteVisible ? "visible" : ""}>
                {suggestions.map((suggestion, id) => (
                    <li key={id} className="autocomplete-suggestion" onClick={populateSearchBar}>{suggestion}</li>
                ))}
            </ul>
            <button id="search-btn" onClick={searchForPokemon}><span id="search-icon">⚲</span></button>
        </section>
        {
            pokemonInfo &&
            <ExpandedCard info={pokemonInfo} setExpandedCardInfo={setPokemonInfo}/>
        }
    </>
  );
}

export default SearchBar;