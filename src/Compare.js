import CompareContainer from './components/CompareContainer.js';
import './css/Compare.css';

const Compare = () => {
    return (
        <section id="compare-container">
            <div>
                <p>Pokemon 1: </p>
                <CompareContainer />
            </div>
            <div>
                <p>Pokemon 2: </p>
                <CompareContainer />
            </div>
        </section>
    );
}

export default Compare;