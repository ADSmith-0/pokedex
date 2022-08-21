import { useEffect, useState } from "react";
import { formatId } from '../util';
import Loading from "./Loading";
import FavouriteButton from "./FavouriteButton";
import '../css/Card.css';
import { isPokemonFavourited, toggleFavourited } from "../LocalStorageHelper";

const Card = ({ name, info, setExpandedCardInfo }) => {
    const [ pokemonInfo, setPokemonInfo ] = useState();
    const [ isFavourited, setIsFavourited ] = useState(isPokemonFavourited());

    useEffect(() => {
        (async () => {
            setPokemonInfo((await info.then(res=>res.clone().json())));
        })()
    }, [info]);

    useEffect(() => {
        toggleFavourited(name, isFavourited);
    }, [name, isFavourited]);

    const setCardExpanded = e => setExpandedCardInfo(info);

    if(pokemonInfo !== undefined){
        return (
            <section className="card" onClick={setCardExpanded}>
                <FavouriteButton passIsFavouritedBack={setIsFavourited} isPokemonFavourited={isFavourited}/>
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
            <section className="card">
                <Loading />
            </section>
        )
    }
}
export default Card;