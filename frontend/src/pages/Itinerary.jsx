import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container, Button } from '../styles/components';

const DayBox = styled.div`
  padding: 10px;
  color: white;
  margin-bottom: 10px;
`;

const initialDays = [
  { id: 1, color: 'green', label: 'Day 1', plan: 'CN Tower visit' },
  { id: 2, color: 'blue', label: 'Day 2', plan: 'Boat ride' },
  { id: 3, color: 'red', label: 'Day 3', plan: 'Dinner at local spot' },
];

function Itinerary() {
  const [days, setDays] = useState(() => {
    const stored = localStorage.getItem('itinerary');
    return stored ? JSON.parse(stored) : initialDays;
  });

  useEffect(() => {
    localStorage.setItem('itinerary', JSON.stringify(days));
  }, [days]);

  const updatePlan = (id, value) => {
    setDays((prev) => prev.map((d) => (d.id === id ? { ...d, plan: value } : d)));
  };

  return (
    <Container>
      {days.map((d) => (
        <DayBox key={d.id} style={{ backgroundColor: d.color }}>
          <strong>{d.label}</strong>
          <textarea
            style={{ width: '100%', marginTop: '5px' }}
            value={d.plan}
            onChange={(e) => updatePlan(d.id, e.target.value)}
          />
          <div style={{ marginTop: '5px' }}>
            <Button as="a" href="https://www.google.com/maps" target="_blank" rel="noreferrer">Book All</Button>
          </div>
        </DayBox>
      ))}
    </Container>
  );
}

export default Itinerary;
