import React from 'react';

function Nightlife() {
  const events = [
    'Club Night at Venue A',
    'Concert at Venue B',
    'Festival at Venue C',
  ];

  return (
    <ul>
      {events.map((e, idx) => (
        <li key={idx}>{e}</li>
      ))}
    </ul>
  );
}

export default Nightlife;
