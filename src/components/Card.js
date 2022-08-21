import { useEffect, useState } from "react";
import { formatId } from '../util';
import Loading from "./Loading";
import FavouriteButton from "./FavouriteButton";
import '../css/Card.css';
import { getFavouritedPokemon, isPokemonFavourited, setFavouritedPokemon } from "../LocalStorageHelper";

const Card = ({ name, info }) => {
    const [ pokemonInfo, setPokemonInfo ] = useState();
    const [ isFavourited, setIsFavourited ] = useState(isPokemonFavourited());

    useEffect(() => {
        (async () => {
            setPokemonInfo((await info.then(res=>res.clone().json())));
        })()
    }, [info]);

    useEffect(() => {
        const favouritedPokemon = getFavouritedPokemon();
        if(isFavourited){
            setFavouritedPokemon({...favouritedPokemon, [name]: process.env.REACT_APP_API_URL+"pokemon/"+name});
        }else{
            delete favouritedPokemon[name];
            setFavouritedPokemon(favouritedPokemon);
        }
    }, [name, isFavourited]);

    if(pokemonInfo !== undefined){
        return (
            <section className="card">
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
            <Loading />
        )
    }
}
export default Card;