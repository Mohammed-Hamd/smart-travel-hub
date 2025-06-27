import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Container, Grid } from '../styles/components';

const Hero = styled.section`
  background-image: url('https://images.unsplash.com/photo-1534351590666-13e439b4e83b?auto=format&fit=crop&w=1200&q=80');
  background-size: cover;
  background-position: center;
  color: #fff;
  text-align: center;
  padding: 80px 20px;
  border-radius: 10px;
`;

const PartnerCard = styled.a`
  display: block;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #eee;
  background: #fff;
  transition: transform 0.2s;
  text-align: center;
  &:hover {
    transform: translateY(-3px);
  }
`;

function HomePage() {
  const { t } = useTranslation();
  const [weather, setWeather] = useState(null);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const key = process.env.REACT_APP_OPENWEATHER_KEY;
    if (!key) return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=${key}`)
      .then(res => res.json())
      .then(data => setWeather(data.main.temp))
      .catch(() => {});
  }, []);

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <Container>
      <Hero>
        <h1>Smart Travel Hub</h1>
        <p>Your gateway to exploring Toronto</p>
      </Hero>
      <p>Current Weather: {weather ? `${weather}°C` : '--'}</p>
      <p>Local Time: {time.toLocaleString('en-CA', { timeZone: 'America/Toronto', timeStyle: 'short', dateStyle: 'long' })}</p>
      <p>Smart Travel Hub helps you discover attractions, food, nightlife and more around Toronto.</p>
      <Grid style={{ marginTop: '20px' }}>
        <PartnerCard href="https://www.airalo.com" target="_blank" rel="noreferrer">
          <img src="https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=200&q=60" alt="Airalo" />
        </PartnerCard>
        <PartnerCard href="https://www.visitorscoverage.com" target="_blank" rel="noreferrer">
          <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=200&q=60" alt="VisitorsCoverage" />
        </PartnerCard>
      </Grid>
    </Container>
  );
}

export default HomePage;
