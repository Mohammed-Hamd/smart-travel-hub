import React from 'react';
import { Container, Grid, Card, Button } from '../styles/components';
import Hero from '../components/Hero';

function Attractions() {
  const attractions = [
    {
      id: 1,
      title: 'CN Tower',
      description: 'Toronto\'s most recognizable landmark with panoramic views.',
      link: 'https://goo.gl/maps/v8uvVwbnEoR44kuZ9'
    },
    {
      id: 2,
      title: 'Royal Ontario Museum',
      description: 'World-class museum showcasing art, culture and nature.',
      link: 'https://goo.gl/maps/bUy2HtMJTHcV4Eu66'
    },
    {
      id: 3,
      title: 'St. Lawrence Market',
      description: 'Historic market famed for its artisanal foods.',
      link: 'https://goo.gl/maps/i5E6nDUK6W3SoWq16'
    },
    {
      id: 4,
      title: 'Distillery District',
      description: 'Cobblestone streets lined with boutiques and eateries.',
      link: 'https://goo.gl/maps/45mHNByz3g8x6GsS8'
    },
    {
      id: 5,
      title: 'Toronto Islands',
      description: 'A chain of islands offering beaches and recreation.',
      link: 'https://goo.gl/maps/TWzQPaMPN03GYjy98'
    },
  ];

  return (
    <Container>
      <Hero
        title="Top Attractions"
        subtitle="Must-see places around Toronto"
        background="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80"
      />
      <Grid>
        {attractions.map((a) => (
          <Card key={a.id}>
            <img src={`https://source.unsplash.com/160x90/?${encodeURIComponent(a.title)}`} alt={a.title} />
            <h3>{a.title}</h3>
            <p>{a.description}</p>
            <Button as="a" href={a.link} target="_blank" rel="noopener noreferrer">View on Maps</Button>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}

export default Attractions;
