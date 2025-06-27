import React from 'react';
import { Container, StyledTable, Th, Td } from '../styles/components';

const foods = [
  {
    id: 1,
    type: 'Canadian',
    restaurant: 'Maple Diner',
    booking: 'https://www.opentable.com/',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=80&q=60'
  },
  {
    id: 2,
    type: 'Chinese',
    restaurant: 'Dragon City',
    booking: 'https://example.com',
    img: 'https://images.unsplash.com/photo-1543357480-c60d457bccaa?auto=format&fit=crop&w=80&q=60'
  },
  {
    id: 3,
    type: 'Italian',
    restaurant: 'Pasta House',
    booking: 'https://www.opentable.com/',
    img: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=80&q=60'
  },
];

function FoodCulture() {

  return (
    <Container>
    <img src="https://source.unsplash.com/800x200/?destination" alt="Food" />
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
            <Td><img src={f.img} alt="" /></Td>
            <Td>{f.type}</Td>
            <Td>{f.restaurant}</Td>
            <Td><a href={f.booking} target="_blank" rel="noreferrer">Link</a></Td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
    </Container>
  );
}

export default FoodCulture;
