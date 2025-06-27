import React from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from '../styles/components';

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <Select onChange={changeLanguage} value={i18n.language}>
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="fr">Français</option>
      <option value="ar">العربية</option>
      <option value="zh">中文</option>
      <option value="pt">Português</option>
    </Select>
  );
}

export default LanguageSelector;
