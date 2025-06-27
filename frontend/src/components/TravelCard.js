import React from 'react';
import { Card } from '../styles/components';

function TravelCard({ title, description, image }) {
  return (
    <Card>
      {image && <img src={image} alt={title} />}
      <h3>{title}</h3>
      <p>{description}</p>
    </Card>
  );
}

export default TravelCard;
