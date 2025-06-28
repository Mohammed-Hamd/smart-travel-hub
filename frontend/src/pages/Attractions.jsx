import React from 'react';
import { Container, Grid, Card, Button } from '../styles/components';
import Hero from '../components/Hero';

function Attractions() {
  const attractions = [
    {
      id: 1,
      title: 'CN Tower',
      description: 'Toronto\'s most recognizable landmark with panoramic views.',
      link: 'https://goo.gl/maps/v8uvVwbnEoR44kuZ9',
      image: 'https://picsum.photos/seed/cntower/300/200'
    },
    {
      id: 2,
      title: 'Royal Ontario Museum',
      description: 'World-class museum showcasing art, culture and nature.',
      link: 'https://goo.gl/maps/bUy2HtMJTHcV4Eu66',
      image: 'https://picsum.photos/seed/rom/300/200'
    },
    {
      id: 3,
      title: 'St. Lawrence Market',
      description: 'Historic market famed for its artisanal foods.',
      link: 'https://goo.gl/maps/i5E6nDUK6W3SoWq16',
      image: 'https://picsum.photos/seed/stlawrence/300/200'
    },
    {
      id: 4,
      title: 'Distillery District',
      description: 'Cobblestone streets lined with boutiques and eateries.',
      link: 'https://goo.gl/maps/45mHNByz3g8x6GsS8',
      image: 'https://picsum.photos/seed/distillery/300/200'
    },
    {
      id: 5,
      title: 'Toronto Islands',
      description: 'A chain of islands offering beaches and recreation.',
      link: 'https://goo.gl/maps/TWzQPaMPN03GYjy98',
      image: 'https://picsum.photos/seed/torontoislands/300/200'
    },
  ];

  return (
    <Container>
      <Hero
        title="Top Attractions"
        subtitle="Must-see places around Toronto"
        background="https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&h=400"
      />
      <Grid>
        {attractions.map((a) => (
          <Card key={a.id} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <img
              src={a.image}
              alt={a.title}
              style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <div style={{ flexGrow: 1, margin: '10px 0' }}>
              <h3>{a.title}</h3>
              <p>{a.description}</p>
            </div>
            <Button
              as="a"
              href={a.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: 'auto' }}
            >
              View on Maps
            </Button>
          </Card>
        ))}
      </Grid>
      <p style={{ marginTop: '20px', textAlign: 'center' }}>
        Ready for adventure? <Button as="a" href="#">Plan your visit</Button>
      </p>
    </Container>
  );
}

export default Attractions;
