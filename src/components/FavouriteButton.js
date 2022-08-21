import { useEffect, useState } from 'react';
import '../css/FavouriteButton.css';

const FavouriteButton = ({ passIsFavouritedBack, isPokemonFavourited }) => {
    const [isFavourited, setIsFavourited] = useState(isPokemonFavourited);
    
    const handleFavourited = e => setIsFavourited(!isFavourited);

    useEffect(() => {
        passIsFavouritedBack(isFavourited);
    }, [passIsFavouritedBack, isFavourited])

    return (
        <button onClick={handleFavourited} className={(isFavourited ? "selected":"")+" favourite-btn"}>
            {isFavourited ? "★" : "☆"} 
        </button>
    )
}

export default FavouriteButton;