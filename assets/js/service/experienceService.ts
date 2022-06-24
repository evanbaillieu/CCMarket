import config from '../config/default';
import { IExperiance } from '../constant/Type/entity';
import { getTokken } from '../helper/utilHelper';

export const addExperience = async (data: IExperiance, user: string) => {
    const token = getTokken();
    data.user = user;
    const response = await fetch(`${config.baseUrl}/experiences`, {
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        method: 'POST',
        body: JSON.stringify(data),
    });

    const json = await response.json();
    return json;
};

export const getExperience = async (experienceId: string) => {
    const token = getTokken();
    const response = await fetch(`${config.baseUrl}/experiences/${experienceId}`, {
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        method: 'GET',
    });

    const json = await response.json();
    return json;
};

export const updateExperience = async (experienceId: string, data: IExperiance) => {
    const token = getTokken();
    const response = await fetch(`${config.baseUrl}/experiences/${experienceId}`, {
        headers: {
            'Content-type': 'application/merge-patch+json',
            Authorization: `Bearer ${token}`,
        },
        method: 'PATCH',
        body: JSON.stringify(data),
    });

    const json = await response.json();
    return json;
};
