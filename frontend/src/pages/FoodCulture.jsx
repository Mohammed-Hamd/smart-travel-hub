import React from 'react';

function FoodCulture() {
  const foods = [
    { id: 1, type: 'Canadian', restaurant: 'Maple Diner', booking: 'OpenTable' },
    { id: 2, type: 'Chinese', restaurant: 'Dragon City', booking: 'Walk-in' },
    { id: 3, type: 'Italian', restaurant: 'Pasta House', booking: 'OpenTable' },
  ];

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>Cuisine</th>
          <th>Restaurant</th>
          <th>Booking</th>
        </tr>
      </thead>
      <tbody>
        {foods.map((f) => (
          <tr key={f.id}>
            <td>{f.type}</td>
            <td>{f.restaurant}</td>
            <td>{f.booking}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FoodCulture;
