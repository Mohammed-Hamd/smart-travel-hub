import React from 'react';
import { Container, Grid, Card } from '../styles/components';
import Hero from '../components/Hero';
import { MusicalNoteIcon } from '@heroicons/react/24/outline';

function Nightlife() {
  const events = [
    { title: 'Club Night at Venue A', time: '9 PM', link: 'https://example.com' },
    { title: 'Concert at Venue B', time: '8 PM', link: 'https://example.com' },
    { title: 'Festival at Venue C', time: '6 PM', link: 'https://example.com' },
  ];

  return (
    <Container>
      <Hero
        title="Nightlife"
        subtitle="Experience Toronto after dark"
        background="https://source.unsplash.com/1200x400/?night,toronto"
      />
      <Grid style={{ marginTop: '20px' }}>
        {events.map((e) => (
          <Card key={e.title} style={{ flex: '1 0 150px' }}>
            <MusicalNoteIcon width={24} />
            <h4>{e.title}</h4>
            <p>{e.time}</p>
            <a href={e.link} target="_blank" rel="noreferrer">Tickets</a>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}

export default Nightlife;
