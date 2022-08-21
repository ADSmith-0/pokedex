import '../css/Header.css';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar.js';
import { useState } from 'react';
import ExpandedCard from './ExpandedCard';

const Header = () => {
    const [ pokemonInfo, setPokemonInfo ] =  useState();
    return (
        <header id="header">
            <img id="logo" src="./img/logo.png" alt="Pokedex logo" height="96" width="272"/>
            <nav id="navbar">
                <Link to="/">All Pokemon</Link>
                <Link to="/favourites">Favourites</Link>
                <Link to="/compare">Compare</Link>
            </nav>
            <SearchBar passInfoBack={setPokemonInfo} />
            {
                pokemonInfo &&
                <ExpandedCard info={pokemonInfo} setExpandedCardInfo={setPokemonInfo} />
            }
        </header>
    )
}
export default Header;