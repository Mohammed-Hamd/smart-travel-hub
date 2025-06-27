import React from 'react';
import { Container, Grid } from '../styles/components';

function Monetization() {
  return (
    <Container>
      <img src="https://source.unsplash.com/800x200/?airport" alt="partners" />
      <h3>Partners</h3>
      <Grid>
        <img src="https://source.unsplash.com/100x50/?city" alt="AdSense" />
        <img src="https://source.unsplash.com/100x50/?landscape" alt="Directory" />
        <img src="https://source.unsplash.com/100x50/?adventure" alt="SmartPass" />
      </Grid>
    </Container>
  );
}

export default Monetization;
