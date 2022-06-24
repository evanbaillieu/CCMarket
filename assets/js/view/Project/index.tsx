import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ISource } from '../../constant/Type/entity';
import profile from '../../img/test.png';
import { getProject } from '../../service/projectService';
import Github from '../../svg/github.svg';
import Star from '../../svg/star.svg';
import { createDiscution } from '../../service/messengerService';

const Project: FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { idProject } = useParams();
    const [project, setProject] = useState({
        id: '',
        title: '',
        category: {
            name: '',
        },
        description: '',
        source: [],
        nbStar: 0,
        leader: {
            id: '',
            firstName: '',
            lastName: '',
        },
    });

    useEffect(() => {
        getProject(idProject).then((response) => {
            if (response.id) {
                console.log(response);
                setProject(response);
            } else {
                navigate('/listing');
            }
        });
    }, []);

    const addDicustion = async (id: string) => {
        const data = await createDiscution(id);
        if (data) {
            navigate(`/`);
        }
    };
    return (
        <div id="project-container">
            <div id="project-content">
                <h1>{project.title}</h1>
                <p className="profilType-name">{project.category.name}</p>

                <p>{project.description}</p>

                {project.source
                    ?.filter((item: { type: string }) => item.type === 'github')
                    .map((source: ISource, key: number) => (
                        <div key={key} className="source-box">
                            <Github />
                            <a href={source.link} target="_blank" rel="noreferrer">
                                {source.link}
                            </a>
                        </div>
                    ))}
            </div>

            <div id="project-sidebar">
                <button className="btn btn-primary">
                    <Star />
                    <p>{project.nbStar}</p>
                </button>
                <div id="project-sidebar-leader">
                    <h3>{t('job.leader')}</h3>
                    <div id="leader-box">
                        <img src={profile} width={50} height={50} alt={t('profileImage')} />
                        <p>{project.leader.firstName + ' ' + project.leader.lastName}</p>
                    </div>
                    <button onClick={() => addDicustion(project.leader?.id)} className="btn btn-primary btn-with-arrow">
                        {t('contactLeader')}
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Project;
