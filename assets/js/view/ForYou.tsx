import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ListJobs from '../components/ListJobs';
import { useLocation, useNavigate } from 'react-router-dom';
import { getMe } from '../service/accountService';
import { getTokken } from '../helper/utilHelper';
import { IProfilType, IUser } from '../constant/Type/entity';
import { getJobCollectionForYou } from '../service/jobService';

const ForYou: FC = ({}) => {
    const { t } = useTranslation();
    const [user, setUser] = useState<IUser>();
    const [profilType, setProfilType] = useState<IProfilType>();
    const navigate = useNavigate();
    useEffect(() => {
        getMe().then((response) => {
            if (response.user) {
                setUser(response.user);
                setProfilType(response.profilType);
            } else {
                navigate('/');
            }
        });
    }, []);

    return <div>{user ? <ListJobs getJobs={() => getJobCollectionForYou(profilType.name)} /> : <></>}</div>;
};

export default ForYou;
