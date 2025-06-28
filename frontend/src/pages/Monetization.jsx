import React from 'react';
import { Container, Grid, Card, Button } from '../styles/components';
import Hero from '../components/Hero';

function Monetization() {
  const partners = [
    {
      name: 'AdSense',
      logo: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=200&q=60',
      url: 'https://google.com/adsense',
      blurb: 'Helps keep the site running.'
    },
    {
      name: 'Directory',
      logo: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=200&q=60',
      url: '#',
      blurb: 'Find trusted local services.'
    },
    {
      name: 'SmartPass',
      logo: 'https://images.unsplash.com/photo-1562577309-2592ab84b1bc?auto=format&fit=crop&w=200&q=60',
      url: '#',
      blurb: 'Discount program for attractions.'
    }
  ];

  return (
    <Container>
      <Hero
        title="Partners"
        subtitle="Ways we keep the lights on"
        background="https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&h=400"
      />
      <h3>Partners</h3>
      <Grid>
        {partners.map(p => (
          <Card key={p.name} as="a" href={p.url} target="_blank" rel="noreferrer" style={{ textAlign: 'center' }}>
            <img src={p.logo} alt={p.name} />
            <p>{p.name}</p>
            <small>{p.blurb}</small>
          </Card>
        ))}
      </Grid>
      <p style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button as="a" href="#">Partner with us</Button>
      </p>
    </Container>
  );
}

export default Monetization;
