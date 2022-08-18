import { useEffect, useState } from "react";
import { formatId } from '../util';
import '../css/Card.css';

const Card = ({ name, info }) => {
    const [ pokemonInfo, setPokemonInfo ] = useState();

    useEffect(() => {
        (async () => {
            setPokemonInfo((await info.then(res=>res.clone().json())));
        })()
    });

    if(pokemonInfo !== undefined){
        return (
            <section className="card">
                <img 
                    className="pokemon-sprite" 
                    src={pokemonInfo.sprites.front_default}
                    width="90"
                    height="90" 
                    alt={"sprite of "+name}
                />
                <div className="info-line">
                    <p>{formatId(pokemonInfo.id)}</p>
                    <p>{name}</p>
                </div>
            </section>
        )
    }else{
        return (
            <p>Loading</p>
        )
    }
}
export default Card;