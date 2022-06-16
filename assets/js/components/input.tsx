import React, { FC, ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { getTypeInpute } from '../helper/utilHelper';

export interface IInputeProps {
    title: string;
    name: string;
    value: string;
    handleChange: (e: ChangeEvent) => void;
    error: string;
}

const Inpute: FC<IInputeProps> = ({ title, name, value, handleChange, error }) => {
    const { t } = useTranslation();

    return (
        <div className="input">
            <label htmlFor={name}>{t(title)}</label>
            <input
                type={getTypeInpute(name)}
                onChange={handleChange}
                name={name}
                value={value}
                placeholder={/*t(`placeholder.${name}`)*/ '••••••••••••'}
            />
            {error && <h6>{t(error)}</h6>}
        </div>
    );
};
export default Inpute;
