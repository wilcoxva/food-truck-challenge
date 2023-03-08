import React, { useEffect, useState } from 'react';

function App() {
  const [foodTrucks, setFoodTrucks] = useState([]);

  useEffect(() => {
    fetch('https://data.sfgov.org/resource/rqzj-sfat.json')
    .then(resp => resp.json())
    .then(data => setFoodTrucks(data))
  }, [])

  return (
    <div style={{ background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(255,255,255,1) 100%)', height: '100vh' }}>
      <header style={{ textAlign: 'center', marginTop: '100px' }}>
        <h1 style={{ fontFamily: 'helvetica' }}>
          Your marketing destination for information on all of San Francisco's {foodTrucks.length} food trucks.
        </h1>
      </header>
      <body />
    </div>
   
  );
}

export default App;
