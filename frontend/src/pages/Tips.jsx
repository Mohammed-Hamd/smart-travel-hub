import React from 'react';
import { Container, Button } from '../styles/components';
import Hero from '../components/Hero';

function Tips() {
  const tips = [
    'Use a Presto Card for transit',
    'Uber is widely available',
    'Tap water is safe to drink',
    'Tipping is customary (15-20%)',
  ];

  return (
    <Container>
      <Hero
  title="Travel Tips"
  subtitle="Make the most of your visit"
  background="https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&h=400"
/>

      <ul>
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
      <p style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button as="a" href="#">Share your tips</Button>
      </p>
    </Container>
  );
}

export default Tips;
