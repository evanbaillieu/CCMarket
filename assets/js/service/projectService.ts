import config from '../config/default';

export const getProjects = async ({ pageParam = 1 }) => {
    const data = await fetch(`${config.baseUrl}/projects/?page=${pageParam}`, {
        headers: { 'Content-type': 'application/json' },
        method: 'GET',
    });
    return data.json();
};

export const getProject = async (idProject: string) => {
    const data = await fetch(`${config.baseUrl}/projects/${idProject}`, {
        headers: { 'Content-type': 'application/json' },
        method: 'GET',
    });
    return data.json();
};
const getProjectCollection = async () => {
    const data = await fetch(`${config.baseUrl}/projects/?page=1`, {
        headers: { Accept: 'application/json' },
        method: 'GET',
    });
    const json = data.json();
    return json;
};
export default getProjectCollection;
