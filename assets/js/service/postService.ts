import config from '../config/default';

export const getPost = async (page = 1) => {
    const data = await fetch(`${config.baseUrl}/project/page=${page}`);
    const json = await data.json();
    return json;
};
