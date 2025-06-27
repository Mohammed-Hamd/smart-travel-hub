import React from 'react';
import { Container, Grid, Card } from '../styles/components';
import Hero from '../components/Hero';

function NearbyCities() {
  const cities = [
    { id: 1, name: 'Niagara Falls', distance: '130km', highlights: 'Falls', transport: 'Bus' },
    { id: 2, name: 'Ottawa', distance: '450km', highlights: 'Parliament', transport: 'Train' },
    { id: 3, name: 'Montreal', distance: '540km', highlights: 'Old Port', transport: 'Train' },
  ];

  return (
    <Container>
      <Hero
        title="Nearby Cities"
        subtitle="Explore beyond Toronto"
        background="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80"
      />
    <Grid style={{ overflowX: 'auto' }}>
      {cities.map((c) => (
        <Card key={c.id} style={{ minWidth: '180px' }}>
          <img src={`https://source.unsplash.com/160x90/?city,${encodeURIComponent(c.name)}`} alt={c.name} />
          <h3>{c.name}</h3>
          <p>{c.distance}</p>
          <p>{c.highlights}</p>
          <p>{c.transport}</p>
        </Card>
      ))}
    </Grid>
    </Container>
  );
}

export default NearbyCities;
