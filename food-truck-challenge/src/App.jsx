import React, { useEffect, useState } from 'react';
import FoodTruck from './FoodTruck';

function App() {
  const [foodTrucks, setFoodTrucks] = useState([]);

  useEffect(() => {
    fetch('https://data.sfgov.org/resource/rqzj-sfat.json')
    .then(resp => resp.json())
    .then(data => setFoodTrucks(data))
  }, [])

  return (
    <div>
      <header style={{ textAlign: 'center', marginTop: '100px' }}>
        <h1 style={{ fontFamily: 'helvetica' }}>
          Your marketing destination for information on all of San Francisco's {foodTrucks.length} food trucks.
        </h1>
      </header>
      <body style={{ background: 'linear-gradient(0deg, rgba(34,193,195,1) 96%, rgba(255,255,255,1) 100%)', backgroundSize: 'cover' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {foodTrucks.map((foodTruck, i) => { return <FoodTruck key={i} foodTruck={foodTruck} /> })}
        </div>
      </body>
    </div>
   
  );
}

export default App;
