import React from 'react'
import { useTranslation } from "react-i18next";

export default function Users() {
  const {t} = useTranslation();
  return (
    <div>{t('users')}</div>
  )
}
