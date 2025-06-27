import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Grid } from '../styles/components';

function HomePage() {
  const { t } = useTranslation();
  return (
    <Container>
      <img src="https://source.unsplash.com/800x200/?city" alt="Toronto" />
      <h2>{t('welcome')}</h2>
      {/* Weather/Timezone/Stadium info placeholders */}
      <p>Weather: --</p>
      <p>Timezone: America/Toronto</p>
      <p>Stadium: BMO Field</p>
      {/* Partner logos placeholders */}
      <Grid style={{ marginTop: '10px' }}>
        <img src="https://source.unsplash.com/100x50/?airport" alt="Airalo" />
        <img src="https://source.unsplash.com/100x50/?hotel" alt="VisitorsCoverage" />
      </Grid>
    </Container>
  );
}

export default HomePage;
