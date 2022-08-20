import Card from './Card';
import { removeSpeciesFromUrl } from '../util';
import '../css/PokemonGrid.css';

const PokemonGrid = ({ pokemon }) => {
  return (
      <main id="pokemon-grid">
          {pokemon.map(({ name, url }, id) => {
              const pokemonInfo = fetch(removeSpeciesFromUrl(url));
              return (
                  <Card key={id} name={name} info={pokemonInfo} />
              );
          })}
      </main>
  )
}

export default PokemonGrid;