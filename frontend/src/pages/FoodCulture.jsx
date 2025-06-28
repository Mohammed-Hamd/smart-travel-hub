import React from 'react';
import { Container, StyledTable, Th, Td, Button } from '../styles/components';
import Hero from '../components/Hero';

const foods = [
  {
    id: 1,
    type: 'Canadian',
    restaurant: 'Maple Diner',
    booking: 'https://www.opentable.com/',
    img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&h=80'
  },
  {
    id: 2,
    type: 'Chinese',
    restaurant: 'Dragon City',
    booking: 'https://example.com',
    img: 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&h=80'
  },
  {
    id: 3,
    type: 'Italian',
    restaurant: 'Pasta House',
    booking: 'https://www.opentable.com/',
    img: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&h=80'
  },
];

function FoodCulture() {
  return (
    <Container>
      <Hero
        title="Food & Culture"
        subtitle="Taste the diversity of Toronto"
        background="https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&h=400"
      />
      <StyledTable>
        <thead>
          <tr>
            <Th></Th>
            <Th>Cuisine</Th>
            <Th>Restaurant</Th>
            <Th>Booking</Th>
          </tr>
        </thead>
        <tbody>
          {foods.map((f) => (
            <tr key={f.id}>
              <Td><img src={f.img} alt={f.type} /></Td>
              <Td>{f.type}</Td>
              <Td>{f.restaurant}</Td>
              <Td><a href={f.booking} target="_blank" rel="noreferrer">Link</a></Td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
      <p style={{ marginTop: '20px', textAlign: 'center' }}>
        Hungry? <Button as="a" href="#">Book a table</Button>
      </p>
    </Container>
  );
}

export default FoodCulture;
