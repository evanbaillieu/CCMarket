import React, { FC, useState, ChangeEvent, useEffect } from 'react';
import { useQuery } from 'react-query';
import { getAll, findDiscution } from '../service/messengerService';
import { useNavigate, useOutlet, useParams } from 'react-router-dom';
import ListDiscution from '../components/ListDiscution';
import { useTranslation } from 'react-i18next';
import { Circles } from 'react-loader-spinner';
import ToolBar from '../components/Toolbar';

const Messenger: FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [currentData, setcurrentData] = useState<any>({});
    const [select, setSelect] = useState('');
    const outlet = useOutlet();

    useEffect(() => {
        getAll()
            .then((data) => {
                if (data) {
                    setcurrentData(data);
                }
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="messenger">
            <div className="messenger_content">
                <div className="messenger_content_titre">
                    <h2>{t('messenger.discution')}</h2>
                </div>

                <ListDiscution content={currentData?.messaging?.discution} setSelect={() => setSelect} />
                {outlet}
            </div>
        </div>
    );
};

export default Messenger;
