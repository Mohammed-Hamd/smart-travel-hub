import React from 'react';
import { Container, Grid } from '../styles/components';

function Monetization() {
  return (
    <Container>
      <img src="https://via.placeholder.com/800x200?text=Partners" alt="partners" />
      <h3>Partners</h3>
      <Grid>
        <img src="https://via.placeholder.com/100x50?text=AdSense" alt="AdSense" />
        <img src="https://via.placeholder.com/100x50?text=Directory" alt="Directory" />
        <img src="https://via.placeholder.com/100x50?text=SmartPass" alt="SmartPass" />
      </Grid>
    </Container>
  );
}

export default Monetization;
