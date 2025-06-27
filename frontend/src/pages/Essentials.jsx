import React from 'react';
import { Container } from '../styles/components';

function Essentials() {
  const items = [
    { id: 1, need: 'SIM', location: 'Airalo' },
    { id: 2, need: 'Toiletries', location: 'Walmart' },
    { id: 3, need: 'Transit Card', location: 'Shoppers Drug Mart' },
  ];

  return (
    <Container>
    <img src="https://source.unsplash.com/800x200/?landscape" alt="essentials" />
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.need} - {item.location}</li>
      ))}
    </ul>
    </Container>
  );
}

export default Essentials;
