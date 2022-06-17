import config from '../config/default';

export const getPost = async ({ pageParam = 1 }) => {
    const data = await fetch(`${config.baseUrl}/project/?page=${pageParam}`, {
        headers: { 'Content-type': 'application/json' },
        method: 'GET',
    });
    return data.json();
};
