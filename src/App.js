import './App.css';

import luxuryIcon from "./images/icon-luxury.svg";
import sedansIcon from "./images/icon-sedans.svg";
import suvsIcon from "./images/icon-suvs.svg";

function App() {
  return (
    <div className="App">
      <main>
        <article>
          <img src={sedansIcon} alt='car' />
          <h1>SEDANS</h1>
          <p>
            Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip
          </p>
          <button className='more-button'>Learn More</button>
        </article>
        <article>
          <img src={suvsIcon} alt='car' />
          <h1>SUVS</h1>
          <p>
            Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.
          </p>
          <button className='more-button'>Learn More</button>
        </article>
        <article>
          <img src={luxuryIcon} alt='car' />
          <h1>LUXURY</h1>
          <p>
            Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.
          </p>
          <button className='more-button'>Learn More</button>
        </article>
      </main>
    </div>
  );
}

export default App;
