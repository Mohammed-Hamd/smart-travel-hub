import React from 'react';

function Tips() {
  const tips = [
    'Use a Presto Card for transit',
    'Uber is widely available',
    'Tap water is safe to drink',
    'Tipping is customary (15-20%)',
  ];

  return (
    <ul>
      {tips.map((tip, index) => (
        <li key={index}>{tip}</li>
      ))}
    </ul>
  );
}

export default Tips;
