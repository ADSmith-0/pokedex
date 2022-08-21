import { useEffect, useState } from 'react';
import { formatId } from '../util';
import Loading from './Loading';
import '../css/ExpandedCard.css';

const ExpandedCard = ({ info, setExpandedCardInfo }) => {

    const [pokemonInfo, setPokemonInfo] = useState();

    useEffect(() => {
        (async () => {
            setPokemonInfo((await info.then(res => res.clone().json())));
        })()
    }, [info]);

    if(pokemonInfo !== undefined){
        return (
            <section id="blocker">
                <section className="expanded-card">
                    <button className="back-btn" onClick={() => setExpandedCardInfo(undefined)}>
                        <img className="back-arrow" src="/img/left-arrow-white-96x96.png" alt="back arrow" height="40" width="40"/>
                    </button>
                    <section className="expanded-card-info">
                        <img src={pokemonInfo.sprites.front_default} height="150" width="150" alt={pokemonInfo.name+" sprite"}/>
                        <div className="pokemon-identification">
                            <p>{formatId(pokemonInfo.id)}</p>
                            <p>{pokemonInfo.name}</p>
                        </div>
                        <section className="pokemon-stats-list">
                            {
                                pokemonInfo.stats.map((stat, id) => (
                                    <div key={id} className="pokemon-stat">
                                        <label>{stat.stat.name}:</label>
                                        <p>{stat.base_stat}</p>
                                    </div>
                                ))
                            }
                        </section>
                    </section>
                </section>
            </section>
        )
    }else{
        <section className="expanded-card">
            <Loading />
        </section>
    }
}

export default ExpandedCard;