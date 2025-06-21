import React from 'react';

function LocalGuides() {
  const guides = [
    { id: 1, name: 'Alice', languages: 'EN/FR', rate: '$50', vehicle: 'Yes' },
    { id: 2, name: 'Bob', languages: 'EN/ES', rate: '$40', vehicle: 'No' },
    { id: 3, name: 'Carlos', languages: 'EN/PT', rate: '$45', vehicle: 'Yes' },
  ];

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Languages</th>
          <th>Rate</th>
          <th>Vehicle</th>
          <th>Booking</th>
        </tr>
      </thead>
      <tbody>
        {guides.map((g) => (
          <tr key={g.id}>
            <td>{g.name}</td>
            <td>{g.languages}</td>
            <td>{g.rate}</td>
            <td>{g.vehicle}</td>
            <td><button>Book</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default LocalGuides;
