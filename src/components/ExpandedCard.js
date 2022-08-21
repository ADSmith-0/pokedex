import { formatId } from '../util';
import Loading from './Loading';
import '../css/ExpandedCard.css';

const ExpandedCard = ({ info, setExpandedCardInfo }) => {

    if (info !== undefined){
        return (
            <section id="blocker">
                <section className="expanded-card">
                    <button className="back-btn" onClick={() => setExpandedCardInfo(undefined)}>
                        <img className="back-arrow" src="/img/left-arrow-white-96x96.png" alt="back arrow" height="40" width="40"/>
                    </button>
                    <section className="expanded-card-info">
                        <img src={info.sprites.front_default} height="150" width="150" alt={info.name+" sprite"}/>
                        <div className="pokemon-identification">
                            <p>{formatId(info.id)}</p>
                            <p>{info.name.toTitleCase()}</p>
                        </div>
                        <section className="pokemon-stats-list">
                            {
                                info.stats.map((stat, id) => (
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