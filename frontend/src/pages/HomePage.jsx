import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Grid } from '../styles/components';
import styled from 'styled-components';
import Hero from '../components/Hero';
import Map from '../components/Map';
import {
  CheckCircleIcon,
  MapIcon,
  ChatBubbleLeftRightIcon,
  TicketIcon,
} from '@heroicons/react/24/solid';

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

  img {
    width: 100%;
    border-radius: 8px;
    height: 100px;
    object-fit: cover;
  }
`;

const TwoColumn = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

const Column = styled.div`
  flex: 1 1 300px;
`;

const Bullet = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  svg {
    margin-right: 6px;
  }
`;

function HomePage() {
  const { t } = useTranslation();
  const [weather, setWeather] = useState(null);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=29d294eef9e21cc10792af93d19ad1cc')
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
      <Hero
        title="Smart Travel Hub"
        subtitle="Your gateway to exploring Toronto"
        background="https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />

      <p>Current Weather: {weather ? `${weather}°C` : '--'}</p>
      <p>
        Local Time:{' '}
        {time.toLocaleString('en-CA', {
          timeZone: 'America/Toronto',
          timeStyle: 'short',
          dateStyle: 'long',
        })}
      </p>
      <p>
        Smart Travel Hub helps you discover attractions, food, nightlife and more
        around Toronto.
      </p>

      <TwoColumn>
        <Column>
          <Map />
        </Column>
        <Column>
          <h3>Why Choose Toronto?</h3>
          <ul>
            <Bullet><CheckCircleIcon width={20} />Diverse attractions for every traveler</Bullet>
            <Bullet><CheckCircleIcon width={20} />Vibrant multicultural food scene</Bullet>
            <Bullet><CheckCircleIcon width={20} />Easy access from major cities</Bullet>
          </ul>

          <h3 style={{ marginTop: '20px' }}>Explore Services</h3>
          <ul>
            <Bullet><MapIcon width={20} />Custom itineraries</Bullet>
            <Bullet><ChatBubbleLeftRightIcon width={20} />Local guides</Bullet>
            <Bullet><TicketIcon width={20} />Event booking</Bullet>
          </ul>
        </Column>
      </TwoColumn>

      <Grid style={{ marginTop: '20px' }}>
        <PartnerCard href="https://www.airalo.com" target="_blank" rel="noreferrer">
          <img
            src="https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=200&q=60"
            alt="Airalo"
          />
        </PartnerCard>
        <PartnerCard href="https://www.visitorscoverage.com" target="_blank" rel="noreferrer">
          <img
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=200&q=60"
            alt="VisitorsCoverage"
          />
        </PartnerCard>
      </Grid>
    </Container>
  );
}

export default HomePage;
