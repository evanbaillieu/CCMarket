import React, { FC, useState, ChangeEvent } from 'react';
import { useQuery } from 'react-query';
import { getAll } from '../service/messengerService';
import { useNavigate, useOutlet } from 'react-router-dom';
import ListDiscution from '../components/ListDiscution';
import { useTranslation } from 'react-i18next';
import { Circles } from 'react-loader-spinner';
import ToolBar from '../components/Toolbar';

const Messenger: FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const outlet = useOutlet();

    const { isError, isLoading, data } = useQuery('List-message', getAll, {
        refetchInterval: 10000,
        refetchIntervalInBackground: true,
    });

    console.log(data);

    if (data?.code === 401) {
        navigate('/login');
    }

    if (isError) {
        navigate('/login');
    }

    if (isLoading) {
        return <Circles color="#F05454" />;
    }

    return (
        <div className="messenger">
            <div className="messenger_content">
                <div className="messenger_content_titre">
                    <h2>{t('messenger.discution')}</h2>
                </div>
                <ListDiscution content={data?.messaging?.discution} />
                {outlet}
                <ToolBar />
            </div>
        </div>
    );
};

export default Messenger;
