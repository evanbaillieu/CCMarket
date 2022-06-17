import React, { FC } from 'react';
import { useQuery } from 'react-query';
import { Circles } from 'react-loader-spinner';
import { getPost } from '../service/postService';
import image from '../img/homeImg.png';
import { IProject } from '../constant/Type/entity';

const ListDemo: FC = () => {
    const { isLoading, error, data } = useQuery<IProject[], Error>('key_pour_mis_en_cache', getPost);
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
            {data && data.map((item) => <p key={item.id}>{item.titre}</p>)}
        </div>
    );
};

export default ListDemo;
