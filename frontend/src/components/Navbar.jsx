import React from 'react';
import { NavItem, NavbarWrapper } from '../styles/components';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

function Navbar() {
  const { t } = useTranslation();
  return (
    <NavbarWrapper>
      <NavItem to="/">{t('nav.home')}</NavItem>
      <NavItem to="/attractions">{t('nav.attractions')}</NavItem>
      <NavItem to="/guides">{t('nav.guides')}</NavItem>
      <NavItem to="/nearby">{t('nav.nearby')}</NavItem>
      <NavItem to="/food">{t('nav.food')}</NavItem>
      <NavItem to="/tips">{t('nav.tips')}</NavItem>
      <NavItem to="/itinerary">{t('nav.itinerary')}</NavItem>
      <NavItem to="/essentials">{t('nav.essentials')}</NavItem>
      <NavItem to="/nightlife">{t('nav.nightlife')}</NavItem>
      <NavItem to="/monetization">{t('nav.monetization')}</NavItem>
      <LanguageSelector />
    </NavbarWrapper>
  );
}

export default Navbar;
