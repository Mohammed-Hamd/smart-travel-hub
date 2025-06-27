import React from 'react';
import { Container, StyledTable, Th, Td, Button } from '../styles/components';

function LocalGuides() {
  const guides = [
    { id: 1, name: 'Alice', languages: 'EN/FR', rate: '$50', vehicle: 'Yes' },
    { id: 2, name: 'Bob', languages: 'EN/ES', rate: '$40', vehicle: 'No' },
    { id: 3, name: 'Carlos', languages: 'EN/PT', rate: '$45', vehicle: 'Yes' },
  ];

  return (
    <Container>
    <StyledTable>
      <thead>
        <tr>
          <Th>Name</Th>
          <Th>Languages</Th>
          <Th>Rate</Th>
          <Th>Vehicle</Th>
          <Th>Booking</Th>
        </tr>
      </thead>
      <tbody>
        {guides.map((g) => (
          <tr key={g.id}>
            <Td>{g.name}</Td>
            <Td>{g.languages}</Td>
            <Td>{g.rate}</Td>
            <Td>{g.vehicle}</Td>
            <Td><Button>Book</Button></Td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
    </Container>
  );
}

export default LocalGuides;
