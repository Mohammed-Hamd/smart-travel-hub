import React from 'react';
import { Container, Grid, Card, Button } from '../styles/components';
import Hero from '../components/Hero';

function NearbyCities() {
  const cities = [
    {
      id: 1,
      name: 'Niagara Falls',
      distance: '130km',
      highlights: 'Falls',
      transport: 'Bus',
      image: 'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&h=140',
    },
    {
      id: 2,
      name: 'Ottawa',
      distance: '450km',
      highlights: 'Parliament Hill',
      transport: 'Train',
      image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&h=140',
    },
    {
      id: 3,
      name: 'Montreal',
      distance: '540km',
      highlights: 'Old Port',
      transport: 'Train',
      image: 'https://images.pexels.com/photos/4589546/pexels-photo-4589546.jpeg?auto=compress&cs=tinysrgb&h=140',
    },
  ];

  return (
    <Container>
      <Hero
        title="Nearby Cities"
        subtitle="Explore beyond Toronto"
        background="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&h=400"
      />
      <Grid style={{ overflowX: 'auto' }}>
        {cities.map((c) => (
          <Card key={c.id} style={{ minWidth: '200px' }}>
            <img
              src={c.image}
              alt={c.name}
              style={{
                width: '100%',
                height: '120px',
                objectFit: 'cover',
                borderRadius: '6px',
              }}
            />
            <h3>{c.name}</h3>
            <p>{c.distance}</p>
            <p>{c.highlights}</p>
            <p>{c.transport}</p>
          </Card>
        ))}
      </Grid>
      <p style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button as="a" href="#">See transportation options</Button>
      </p>
    </Container>
  );
}

export default NearbyCities;
