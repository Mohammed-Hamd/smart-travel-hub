import React from 'react';
import { Container, StyledTable, Th, Td, Button } from '../styles/components';
import Hero from '../components/Hero';

const guides = [
  {
    id: 1,
    name: 'Alice',
    languages: 'EN/FR',
    rate: '$50',
    vehicle: 'Yes',
    photo: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=80&q=60',
    rating: 5,
    bio: 'Lifelong Torontonian with a love for history.'
  },
  {
    id: 2,
    name: 'Bob',
    languages: 'EN/ES',
    rate: '$40',
    vehicle: 'No',
    photo: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=80&q=60',
    rating: 4,
    bio: 'Foodie expert showing hidden gems.'
  },
  {
    id: 3,
    name: 'Carlos',
    languages: 'EN/PT',
    rate: '$45',
    vehicle: 'Yes',
    photo: 'https://images.unsplash.com/photo-1603415526960-f8f56e44c1d5?auto=format&fit=crop&w=80&q=60',
    rating: 5,
    bio: 'Outdoor enthusiast ready for adventures.'
  }
];

function LocalGuides() {
  const guides = [
    { id: 1, name: 'Alice', languages: 'EN/FR', rate: '$50', vehicle: 'Yes' },
    { id: 2, name: 'Bob', languages: 'EN/ES', rate: '$40', vehicle: 'No' },
    { id: 3, name: 'Carlos', languages: 'EN/PT', rate: '$45', vehicle: 'Yes' },
  ];

  return (
    <Container>
      <Hero
        title="Local Guides"
        subtitle="Connect with experts"
        background="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1200&q=80"
      />
    <StyledTable>
      <thead>
        <tr>
          <Th></Th>
          <Th>Name</Th>
          <Th>Languages</Th>
          <Th>Rate</Th>
          <Th>Vehicle</Th>
          <Th>Rating</Th>
          <Th>Booking</Th>
        </tr>
      </thead>
      <tbody>
        {guides.map((g) => (
          <tr key={g.id}>
            <Td><img src={g.photo} alt="" /></Td>
            <Td>{g.name}</Td>
            <Td>{g.languages}</Td>
            <Td>{g.rate}</Td>
            <Td>{g.vehicle}</Td>
            <Td>{'★'.repeat(g.rating)}</Td>
            <Td><Button as="a" href="https://wa.me/1234567890" target="_blank" rel="noreferrer">Book</Button></Td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
    <p style={{ textAlign: 'center', marginTop: '20px' }}>
      <Button as="a" href="#">Contact a guide</Button>
    </p>
    </Container>
  );
}

export default LocalGuides;
