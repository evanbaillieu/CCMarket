import React, { FC, useEffect } from 'react';
import { useQuery } from 'react-query';
import { getAll } from '../service/messengerService';

const Messenger: FC = () => {
    const { isError, isLoading, data } = useQuery('List-message', getAll, {
        refetchInterval: 10000,
        refetchIntervalInBackground: true,
    });

    console.log(data);

    return (
        <div className="messenger">
            <div className="messeger_list">{'test'}</div>
            <div className="messeger_left"></div>
        </div>
    );
};

export default Messenger;
