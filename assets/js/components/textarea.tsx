import React, { FC, ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

export interface IOptionTextarea {
    validate: string;
    title: string;
    name: string;
    error: string;
}
export interface ITextareaProps {
    option: IOptionTextarea;
    value: string;
    svg?: JSX.Element;
    handleChange: (e: ChangeEvent) => void;
    onClick?: () => void;
}

const Textarea: FC<ITextareaProps> = ({ option, value, handleChange }) => {
    const { t } = useTranslation();

    return (
        <div className="input">
            <label htmlFor={option.name}>{t(option.title)}</label>
            <textarea
                className={option.error ? 'error' : option.validate ? 'validate' : ''}
                onChange={handleChange}
                name={option.name}
                value={value}
                placeholder={t(`placeholder.${option.name}`)}
            ></textarea>
            <span className="error"> {option.error && <p>{t(option.error)}</p>}</span>
        </div>
    );
};
export default Textarea;
