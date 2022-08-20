import { useEffect, useState } from "react";
import { formatId } from '../util';
import Loading from "./Loading";
import '../css/Card.css';

const Card = ({ name, info }) => {
    const [ pokemonInfo, setPokemonInfo ] = useState();

    useEffect(() => {
        (async () => {
            setPokemonInfo((await info.then(res=>res.clone().json())));
        })()
    }, [info]);

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
                    <p>{name.toTitleCase()}</p>
                </div>
            </section>
        )
    }else{
        return (
            <Loading />
        )
    }
}
export default Card;