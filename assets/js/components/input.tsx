import React, { FC, ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

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
                    type={option.type}
                    onChange={handleChange}
                    name={option.name}
                    value={value}
                    placeholder={t(`placeholder.${option.name}`)}
                />
                {svg && <div onClick={onClick}>{svg}</div>}
            </div>
            <span className="error"> {option.error && <p>{t(option.error)}</p>}</span>
        </div>
    );
};
export default Inpute;
