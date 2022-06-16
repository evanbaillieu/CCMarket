import React, { FC, ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { getTypeInpute } from '../helper/utilHelper';
import OeilFermer from '../svg/oeilFermer.svg';

export interface IOptionInput {
    validate: string;
    type: string;
    title: string;
    name: string;
    error: string;
}
export interface IInputeProps {
    option: IOptionInput;
    value: string;
    svg?: JSX.Element;
    handleChange: (e: ChangeEvent) => void;
    onClick?: () => void;
}

const Inpute: FC<IInputeProps> = ({ option, value, handleChange, svg, onClick }) => {
    const { t } = useTranslation();

    return (
        <div className="input">
            <label htmlFor={option.name}>{t(option.title)}</label>
            <div className="input_content">
                <input
                    className={option.error ? 'error' : option.validate ? 'validate' : ''}
                    type={getTypeInpute(option.name)}
                    onChange={handleChange}
                    name={option.name}
                    value={value}
                    placeholder={/*t(`placeholder.${name}`)*/ '••••••••••••'}
                />
                {svg && <div onClick={onClick}>{svg}</div>}
            </div>
            {option.error && <h6>{t(option.error)}</h6>}
        </div>
    );
};
export default Inpute;
