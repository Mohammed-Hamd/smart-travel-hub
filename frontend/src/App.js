import React from 'react';
import SearchBar from './components/SearchBar';
import TravelCard from './components/TravelCard';
import MapPlaceholder from './components/MapPlaceholder';

function App() {
  const dummyTrips = [
    { id: 1, title: 'Paris Adventure', description: 'Explore the city of lights' },
    { id: 2, title: 'New York Getaway', description: 'Experience the big apple' },
    { id: 3, title: 'Tokyo Discovery', description: 'Dive into Japanese culture' },
  ];

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Smart Travel Hub</h1>
      <SearchBar />
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
        {dummyTrips.map((trip) => (
          <TravelCard key={trip.id} title={trip.title} description={trip.description} />
        ))}
      </div>
      <MapPlaceholder />
    </div>
  );
}

export default App;
