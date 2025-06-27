import React from 'react';
import { Container, StyledTable, Th, Td } from '../styles/components';

function FoodCulture() {
  const foods = [
    { id: 1, type: 'Canadian', restaurant: 'Maple Diner', booking: 'OpenTable' },
    { id: 2, type: 'Chinese', restaurant: 'Dragon City', booking: 'Walk-in' },
    { id: 3, type: 'Italian', restaurant: 'Pasta House', booking: 'OpenTable' },
  ];

  return (
    <Container>
    <img src="https://source.unsplash.com/800x200/?destination" alt="Food" />
    <StyledTable>
      <thead>
        <tr>
          <Th>Cuisine</Th>
          <Th>Restaurant</Th>
          <Th>Booking</Th>
        </tr>
      </thead>
      <tbody>
        {foods.map((f) => (
          <tr key={f.id}>
            <Td>{f.type}</Td>
            <Td>{f.restaurant}</Td>
            <Td>{f.booking}</Td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
    </Container>
  );
}

export default FoodCulture;
