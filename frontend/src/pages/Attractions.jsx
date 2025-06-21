import React from 'react';

function Attractions() {
  const attractions = [
    { id: 1, title: 'CN Tower', description: 'Iconic tower', link: '#' },
    { id: 2, title: 'Royal Ontario Museum', description: 'Museum exhibits', link: '#' },
    { id: 3, title: 'Toronto Islands', description: 'Island parks', link: '#' },
    { id: 4, title: 'Casa Loma', description: 'Gothic Revival castle', link: '#' },
    { id: 5, title: 'Ripley\'s Aquarium', description: 'Aquarium fun', link: '#' },
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {attractions.map((a) => (
        <div key={a.id} style={{ border: '1px solid #ccc', padding: '10px', width: '180px' }}>
          <img src={`https://via.placeholder.com/160x90?text=${encodeURIComponent(a.title)}`} alt={a.title} />
          <h3>{a.title}</h3>
          <p>{a.description}</p>
          <a href={a.link} target="_blank" rel="noopener noreferrer">Book Now</a>
        </div>
      ))}
    </div>
  );
}

export default Attractions;
