import React from 'react';
import { Container, Grid, Card } from '../styles/components';
import { MusicalNoteIcon } from '@heroicons/react/24/outline';

function Nightlife() {
  const events = [
    { title: 'Club Night at Venue A', time: '9 PM', link: 'https://example.com' },
    { title: 'Concert at Venue B', time: '8 PM', link: 'https://example.com' },
    { title: 'Festival at Venue C', time: '6 PM', link: 'https://example.com' },
  ];

  return (
    <Container>
      <img src="https://source.unsplash.com/800x200/?night" alt="nightlife" />
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
