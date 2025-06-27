import React from 'react';
import { Container } from '../styles/components';

function Nightlife() {
  const events = [
    'Club Night at Venue A',
    'Concert at Venue B',
    'Festival at Venue C',
  ];

  return (
    <Container>
    <img src="https://source.unsplash.com/800x200/?adventure" alt="nightlife" />
    <ul>
      {events.map((e, idx) => (
        <li key={idx}>{e}</li>
      ))}
    </ul>
    </Container>
  );
}

export default Nightlife;
