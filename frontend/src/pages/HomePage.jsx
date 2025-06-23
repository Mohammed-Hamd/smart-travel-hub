import React from 'react';
import { useTranslation } from 'react-i18next';

function HomePage() {
  const { t } = useTranslation();
  return (
    <div className="container">
      <h2>{t('welcome')}</h2>
      {/* Weather/Timezone/Stadium info placeholders */}
      <p>Weather: --</p>
      <p>Timezone: America/Toronto</p>
      <p>Stadium: BMO Field</p>
      {/* Partner logos placeholders */}
      <div className="grid" style={{ marginTop: '10px' }}>
        <img src="https://via.placeholder.com/100x50?text=Airalo" alt="Airalo" />
        <img src="https://via.placeholder.com/100x50?text=VisitorsCoverage" alt="VisitorsCoverage" />
      </div>
    </div>
  );
}

export default HomePage;
