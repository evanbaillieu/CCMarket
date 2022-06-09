import React, { FC } from 'react'
import { useTranslation } from "react-i18next";

const Posts: FC = () => {
  const {t} = useTranslation();
  return (
    <div>{t('post')}</div>
  )
}
export default Posts
