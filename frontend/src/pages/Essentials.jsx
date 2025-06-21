import React from 'react';

function Essentials() {
  const items = [
    { id: 1, need: 'SIM', location: 'Airalo' },
    { id: 2, need: 'Toiletries', location: 'Walmart' },
    { id: 3, need: 'Transit Card', location: 'Shoppers Drug Mart' },
  ];

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.need} - {item.location}</li>
      ))}
    </ul>
  );
}

export default Essentials;
