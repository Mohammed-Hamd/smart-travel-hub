import React from 'react';

function TravelCard({ title, description }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', width: '150px' }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default TravelCard;
