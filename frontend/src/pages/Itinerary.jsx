import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container, Button } from '../styles/components';
import Hero from '../components/Hero';

const Card = styled.div`
  background: #f9f9f9;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.07);
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-4px);
  }
`;

const DayLabel = styled.h3`
  margin-bottom: 10px;
  color: #333;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: #fff;
  font-size: 14px;
  margin-bottom: 10px;
`;

const AddDayBtn = styled(Button)`
  margin: 20px auto;
  display: block;
`;

const ontarioActivities = [
  '',
  'Visit Niagara Falls',
  'Casa Loma Tour',
  'Ripley’s Aquarium',
  'Toronto Islands Picnic',
  'Distillery District Stroll',
  'Blue Mountain Hike',
  'Thousand Islands Cruise',
  'Ottawa Day Trip',
  'Royal Ontario Museum',
];

function Itinerary() {
  const [days, setDays] = useState(() => {
    const stored = localStorage.getItem('itinerary');
    return stored
      ? JSON.parse(stored)
      : [
          { id: 1, label: 'Day 1', activity: '' },
          { id: 2, label: 'Day 2', activity: '' },
          { id: 3, label: 'Day 3', activity: '' },
        ];
  });

  useEffect(() => {
    localStorage.setItem('itinerary', JSON.stringify(days));
  }, [days]);

  const updateActivity = (id, value) => {
    setDays((prev) =>
      prev.map((d) => (d.id === id ? { ...d, activity: value } : d))
    );
  };

  const addNewDay = () => {
    const newId = days.length + 1;
    setDays([...days, { id: newId, label: `Day ${newId}`, activity: '' }]);
  };

  return (
    <Container>
      <Hero
        title="Trip Planner"
        subtitle="Customize your daily itinerary"
        background="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
      />
      {days.map((d) => (
        <Card key={d.id}>
          <DayLabel>{d.label}</DayLabel>
          <Select
            value={d.activity}
            onChange={(e) => updateActivity(d.id, e.target.value)}
          >
            {ontarioActivities.map((activity, i) => (
              <option key={i} value={activity}>
                {activity || '-- Select a popular activity --'}
              </option>
            ))}
          </Select>
        </Card>
      ))}
      <AddDayBtn onClick={addNewDay}>➕ Add Another Day</AddDayBtn>
      <p style={{ textAlign: 'center' }}>
        <Button as="a" href="#">Save itinerary</Button>
      </p>
    </Container>
  );
}

export default Itinerary;
