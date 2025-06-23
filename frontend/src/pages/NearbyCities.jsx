import React from 'react';

function NearbyCities() {
  const cities = [
    { id: 1, name: 'Niagara Falls', distance: '130km', highlights: 'Falls', transport: 'Bus' },
    { id: 2, name: 'Ottawa', distance: '450km', highlights: 'Parliament', transport: 'Train' },
    { id: 3, name: 'Montreal', distance: '540km', highlights: 'Old Port', transport: 'Train' },
  ];

  return (
    <div className="container">
    <div className="grid" style={{ overflowX: 'auto' }}>
      {cities.map((c) => (
        <div key={c.id} className="card" style={{ minWidth: '180px' }}>
          <h3>{c.name}</h3>
          <p>{c.distance}</p>
          <p>{c.highlights}</p>
          <p>{c.transport}</p>
        </div>
      ))}
    </div>
    </div>
  );
}

export default NearbyCities;
