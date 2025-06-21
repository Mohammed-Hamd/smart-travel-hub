import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

function Navbar() {
  const { t } = useTranslation();
  return (
    <nav style={{ display: 'flex', gap: '10px', padding: '10px', borderBottom: '1px solid #ccc' }}>
      <Link to="/">{t('nav.home')}</Link>
      <Link to="/attractions">{t('nav.attractions')}</Link>
      <Link to="/guides">{t('nav.guides')}</Link>
      <Link to="/nearby">{t('nav.nearby')}</Link>
      <Link to="/food">{t('nav.food')}</Link>
      <Link to="/tips">{t('nav.tips')}</Link>
      <Link to="/itinerary">{t('nav.itinerary')}</Link>
      <Link to="/essentials">{t('nav.essentials')}</Link>
      <Link to="/nightlife">{t('nav.nightlife')}</Link>
      <Link to="/monetization">{t('nav.monetization')}</Link>
      <LanguageSelector />
    </nav>
  );
}

export default Navbar;
