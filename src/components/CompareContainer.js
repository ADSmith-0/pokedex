import { useState } from "react";
import SearchBar from "./SearchBar";
import ExpandedCard from "./ExpandedCard";

const CompareContainer = () => {
    const [ pokemonInfo, setPokemonInfo ] = useState();
    if(pokemonInfo){
        return (
            <ExpandedCard info={pokemonInfo} setExpandedCardInfo={setPokemonInfo} blockerEnabled={false} />
        )
    }else{
        return (
            <SearchBar passInfoBack={setPokemonInfo} />
        )
    }
}

export default CompareContainer;