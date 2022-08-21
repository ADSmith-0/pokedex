import Card from './Card';
import ExpandedCard from './ExpandedCard';
import { removeSpeciesFromUrl } from '../util';
import '../css/PokemonGrid.css';
import { useState } from 'react';

const PokemonGrid = ({ pokemon }) => {

    const [ expandedCardInfo, setExpandedCardInfo ] = useState();

    return (
        <>
            <main id="pokemon-grid">
                {pokemon.map(({ name, url }, id) => {
                    const pokemonInfo = fetch(removeSpeciesFromUrl(url));
                    return (
                        <Card key={id} name={name} info={pokemonInfo} setExpandedCardInfo={setExpandedCardInfo}/>
                    );
                })}
            </main>
            {
                expandedCardInfo &&
                <ExpandedCard info={expandedCardInfo} setExpandedCardInfo={setExpandedCardInfo}/>
            }
        </>
  )
}

export default PokemonGrid;