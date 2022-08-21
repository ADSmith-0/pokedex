import pokemonNames from '../PokemonNames.json';
import '../css/SearchBar.css';
import { useState } from 'react';

const SearchBar = () => {

    const [ suggestions, setSuggestions ] = useState(pokemonNames);
    const [ isAutocompleteVisible, setIsAutocompleteVisible ] = useState(false);
    const [ inputValue, setInputValue ] = useState("");
    
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

  return (
    <section id="searchbar-component">
        <input id="search-name" type="text" value={inputValue} onInput={handleSearchInput} placeholder="Search"/>
        <ul id="search-autocomplete" className={isAutocompleteVisible ? "visible" : ""}>
            {suggestions.map((suggestion, id) => (
                <li key={id} className="autocomplete-suggestion" onClick={populateSearchBar}>{suggestion}</li>
            ))}
        </ul>
        <button id="search-btn"><span id="search-icon">⚲</span></button>
    </section>
  );
}

export default SearchBar;