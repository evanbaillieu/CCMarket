import { IUser } from '../constant/Type/entity';
import { IAuth } from '../constant/Type/auth';
import { setTokken } from '../helper/utilHelper';
export const register = async (data: IUser) => {
    const newData = await fetch(`http://localhost:8000/api/auth/register`, {
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
    const newAuth = { username: data.email, password: data.password };

    const newData = await fetch(`http://localhost:8000/api/auth/login`, {
        headers: { 'Content-type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(newAuth),
    });

    const json = await newData.json();

    setTokken(json?.token);

    return json;
};
