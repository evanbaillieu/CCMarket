import React, { FC } from 'react';
import { Circles } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { IProject } from '../constant/Type/entity';
import image from '../img/homeImg.png';
import { getProjects } from '../service/projectService';

const ListDemo: FC = () => {
    const { isLoading, error, data } = useQuery<IProject[], Error>('key_pour_mis_en_cache', getProjects);
    console.log(data);
    if (isLoading) {
        return <Circles color="grey" />;
    }

    if (error) {
        return <p>{`An error has occurred: + ${error.message}`}</p>;
    }
    return (
        <div>
            <img src={image} />
            {data && data.map((item) => <p key={item.id}>{item.title}</p>)}
        </div>
    );
};

export default ListDemo;
