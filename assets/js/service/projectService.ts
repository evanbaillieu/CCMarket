import config from '../config/default';
import { IProject } from '../constant/Type/entity';
import { getTokken } from '../helper/utilHelper';

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

export const addProject = async (data: IProject, category: string, leader: string) => {
    const token = getTokken();
    data.category = category;
    data.leader = leader;
    const response = await fetch(`${config.baseUrl}/projects`, {
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
