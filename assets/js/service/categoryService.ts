import config from '../config/default';

export const getAll = async () => {
    const data = await fetch(`${config.baseUrl}/categories/`, { headers: { Accept: 'application/json' } });
    return data.json();
};
