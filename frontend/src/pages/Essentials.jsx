import React from 'react';
import { Container, Grid, Card, Button } from '../styles/components';
import Hero from '../components/Hero';
import { DevicePhoneMobileIcon, TicketIcon, MapIcon } from '@heroicons/react/24/outline';

const items = [
  { id: 1, need: 'SIM Card', location: 'Airalo', icon: DevicePhoneMobileIcon },
  { id: 2, need: 'Transit Card', location: 'Shoppers Drug Mart', icon: TicketIcon },
  { id: 3, need: 'City Map App', location: 'Google Maps', icon: MapIcon },
];

function Essentials() {
  return (
    <Container>
      <Hero
        title="Toronto Essentials"
        subtitle="Things you should have on arrival"
        background="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=80"
      />
      <Grid style={{ marginTop: '20px' }}>
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.id} title={item.location} style={{ textAlign: 'center' }}>
              <Icon width={32} height={32} />
              <h4>{item.need}</h4>
              <p>{item.location}</p>
            </Card>
          );
        })}
      </Grid>
      <p style={{ marginTop: '20px', textAlign: 'center' }}>
        <Button as="a" href="#">Get these essentials</Button>
      </p>
    </Container>
  );
}

export default Essentials;
