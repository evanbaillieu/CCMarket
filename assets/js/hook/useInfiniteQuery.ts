/*import { string } from 'prop-types';
import React, { FC, useState, useEffect } from 'react';

export interface IProps<T> {
    key: string;
    fetchCustom: () => Promise<T[]>;
    PageParams: number;
}
const useInfiniteQuery = <T, K>({ key, fetchCustom, PageParams }: IProps<T>) => {
    const [data, setData] = useState<T[]>([]);
    const [status, setStatus] = useState({ isError: false, error: string, er });

    useEffect(() => {
        fetchCustom({PageParams})
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                set;
            });
    }, []);

    return {};
};

export default useInfiniteQuery;
*/