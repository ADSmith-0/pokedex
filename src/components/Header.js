import '../css/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <img id="logo" src="./img/logo.png" alt="Pokedex logo" height="96" width="272"/>
            <navbar>
                <Link to="/">All Pokemon</Link>
                <Link to="/favourites">Favourites</Link>
            </navbar>
        </header>
    )
}
export default Header;