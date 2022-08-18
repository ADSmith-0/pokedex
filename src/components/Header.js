import '../css/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header id="header">
            <img id="logo" src="./img/logo.png" alt="Pokedex logo" height="96" width="272"/>
            <nav id="navbar">
                <Link to="/">All Pokemon</Link>
                <Link to="/favourites">Favourites</Link>
            </nav>
        </header>
    )
}
export default Header;