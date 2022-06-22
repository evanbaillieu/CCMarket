import config from '../config/default';

export const findAll = async () => {
    const data = await fetch(`${config.baseUrl}/langues/`, { headers: { Accept: 'application/json' } });
    return data.json();
};
