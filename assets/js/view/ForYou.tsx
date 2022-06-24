import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ListJobs from '../components/ListJobs';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../service/accountService';
import { IProfilType, IProject, IUser } from '../constant/Type/entity';
import { getJobCollectionForYou } from '../service/jobService';

const ForYou: FC = ({}) => {
    const { t } = useTranslation();
    const [user, setUser] = useState<IUser>();
    const [profilType, setProfilType] = useState<IProfilType>();
    const [projects, setProjects] = useState<IProject>();
    const navigate = useNavigate();
    useEffect(() => {
        getMe().then((response) => {
            if (response.user) {
                setUser(response.user);

                if (response.profilType) {
                    setProfilType(response.profilType);
                } else {
                    navigate('/account');
                }

                setProjects(response.projects);
            } else {
                navigate('/login');
            }
        });
    }, []);

    console.log(projects);

    return (
        <div>
            <aside className="container_for_you">
                <div className="container_for_you_title">
                    <h1>{t('forYou.title')}</h1>
                </div>
                <div className="container_for_you_description">
                    <p>{t('forYou.description')}</p>
                </div>
            </aside>
            {user ? <ListJobs getJobs={() => getJobCollectionForYou(profilType.name)} /> : <></>}
        </div>
    );
};

export default ForYou;
