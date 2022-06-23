import config from '../config/default';
import { ISource } from '../constant/Type/entity';
import { getTokken } from '../helper/utilHelper';

export const createGitHubSource = async (source: ISource) => {
    const token = getTokken();
    const response = await fetch(`${config.baseUrl}/sources`, {
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        method: 'POST',
        body: JSON.stringify(source),
    });

    const json = await response.json();

    return json;
};

export const updateGitHubSource = async (sourceId: string, source: ISource) => {
    const token = getTokken();
    const response = await fetch(`${config.baseUrl}/sources/${sourceId}`, {
        headers: {
            'Content-type': 'application/merge-patch+json',
            Authorization: `Bearer ${token}`,
        },
        method: 'PATCH',
        body: JSON.stringify(source),
    });

    const json = await response.json();

    return json;
};

export const deleteGitHubSource = async (sourceId: string) => {
    const token = getTokken();
    await fetch(`${config.baseUrl}/sources/${sourceId}`, {
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        method: 'DELETE',
    });
};
