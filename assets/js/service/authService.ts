import config from '../config/default';
import { IAuth } from '../constant/Type/auth';
import { IUser } from '../constant/Type/entity';
import { setTokken } from '../helper/utilHelper';
export const register = async (data: IUser) => {
    const newData = await fetch(`${config.baseUrl}/auth/register`, {
        headers: { 'Content-type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(data),
    });

    const json = await newData.json();
    console.log('**reponse: registeur**');
    console.log(json);
    return json;
};

export const login = async (data: IAuth) => {
    const newData = await fetch(`${config.baseUrl}/auth/login`, {
        headers: { 'Content-type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(data),
    });

    const json = await newData.json();
    console.log(json?.token);
    setTokken(json?.token);

    return json;
};
