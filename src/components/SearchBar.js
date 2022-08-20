import pokemonNames from '../PokemonNames.json';
import '../css/SearchBar.css';

const SearchBar = () => {
  return (
    <section id="searchbar-component">
        <input id="search-name" type="text" placeholder="Search"/>
        <button id="search-btn"><span id="search-icon">⚲</span></button>
    </section>
  );
}

export default SearchBar;