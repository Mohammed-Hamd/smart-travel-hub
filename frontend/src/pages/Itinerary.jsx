import React from 'react';
import styled from 'styled-components';

const DayBox = styled.div`
  padding: 10px;
  color: white;
  margin-bottom: 10px;
`;

function Itinerary() {
  const days = [
    { id: 1, color: 'green', label: 'Day 1' },
    { id: 2, color: 'blue', label: 'Day 2' },
    { id: 3, color: 'red', label: 'Day 3' },
  ];

  return (
    <div>
      {days.map((d) => (
        <DayBox key={d.id} style={{ backgroundColor: d.color }}>
          {d.label} - Activities here <a href="#">Book All</a>
        </DayBox>
      ))}
    </div>
  );
}

export default Itinerary;
