import React, { FC } from 'react';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';

export interface ISelectProps {
    name: string;
    custFetch: () => Promise<any>;
    isTrad: boolean;
}
const Select: FC<ISelectProps> = ({ name, custFetch, isTrad }) => {
    const { t } = useTranslation();
    const { isError, isLoading, data } = useQuery(`select-${name}`, custFetch);
    return (
        <select name={name}>
            {data &&
                data.map((item: any) => (
                    <option key={item.id} value={item.name}>
                        {isTrad ? t(`searchList.${item.name}`) : item.name}
                    </option>
                ))}
        </select>
    );
};

export default Select;
