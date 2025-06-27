import React from 'react';
import { Container } from '../styles/components';

function Tips() {
  const tips = [
    'Use a Presto Card for transit',
    'Uber is widely available',
    'Tap water is safe to drink',
    'Tipping is customary (15-20%)',
  ];

  return (
    <Container>
    <img src="https://via.placeholder.com/800x200?text=Travel+Tips" alt="tips" />
    <ul>
      {tips.map((tip, index) => (
        <li key={index}>{tip}</li>
      ))}
    </ul>
    </Container>
  );
}

export default Tips;
