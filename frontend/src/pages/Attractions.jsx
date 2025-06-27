import React from 'react';
import { Container, Grid, Card, Button } from '../styles/components';

function Attractions() {
  const attractions = [
    { id: 1, title: 'CN Tower', description: 'Iconic tower', link: '#' },
    { id: 2, title: 'Royal Ontario Museum', description: 'Museum exhibits', link: '#' },
    { id: 3, title: 'Toronto Islands', description: 'Island parks', link: '#' },
    { id: 4, title: 'Casa Loma', description: 'Gothic Revival castle', link: '#' },
    { id: 5, title: 'Ripley\'s Aquarium', description: 'Aquarium fun', link: '#' },
  ];

  return (
    <Container>
      <Grid>
        {attractions.map((a) => (
          <Card key={a.id}>
            <img src={`https://via.placeholder.com/160x90?text=${encodeURIComponent(a.title)}`} alt={a.title} />
            <h3>{a.title}</h3>
            <p>{a.description}</p>
            <Button as="a" href={a.link} target="_blank" rel="noopener noreferrer">Book Now</Button>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}

export default Attractions;
