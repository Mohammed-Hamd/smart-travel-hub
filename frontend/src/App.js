import React from 'react';
import axios from 'axios';

function App() {
  const handleExample = async () => {
    try {
      const res = await axios.get('/api/maps');
      alert(res.data.message);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Smart Travel Hub</h1>
      <button onClick={handleExample}>Test Google Maps API</button>
    </div>
  );
}

export default App;
