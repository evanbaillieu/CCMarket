import React, { FC, ChangeEvent } from 'react';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';

export interface ISelectProps {
    name: string;
    custFetch: () => Promise<any>;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    value: string;
    isTrad?: boolean;
}
const Select: FC<ISelectProps> = ({ name, custFetch, onChange, value, isTrad = false }) => {
    const { t } = useTranslation();
    const { isError, isLoading, data } = useQuery(`select-${name}`, custFetch);

    return (
        <select onChange={onChange} value={value} name={name}>
            <option value={''}></option>
            {data &&
                data?.map((item: any) => (
                    <option key={item.id} value={item.name}>
                        {item.name}
                    </option>
                ))}
        </select>
    );
};

export default Select;
