import { useState, ChangeEvent } from 'react';

const useForm = <T>(initState?: T) => {
    const [data, setData] = useState<T>(initState);
    const [errors, setErrors] = useState<T>(initState);

    const hangleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        setData((currentState) => {
            return {
                ...currentState,
                [name]: value,
            };
        });

        if (value.length <= 1) {
            setErrors({
                ...errors,
                [name]: 'error.tropcourt',
            });
            return;
        } else {
            setErrors({
                ...errors,
                [name]: '',
            });
        }

        validate(name, value);
    };

    const validate = (name: string, value: string) => {
        //A function to validate each input values

        switch (name) {
            case 'firstName':
            case 'lastName':
                if (!new RegExp(/^[a-zA-Z]+$/).test(value)) {
                    setErrors({
                        ...errors,
                        [name]: `error.${name}`,
                    });
                } else {
                    setErrors({
                        ...errors,
                        [name]: '',
                    });
                }
                break;
            case 'username':
            case 'email':
                if (
                    !new RegExp(
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    ).test(value)
                ) {
                    setErrors({
                        ...errors,
                        [name]: 'error.email',
                    });
                } else {
                    setErrors({
                        ...errors,
                        [name]: '',
                    });
                }
                break;
            case 'dateOfBirth':
                if (!new RegExp(/^\d{4}-\d{2}-\d{2}$/).test(value)) {
                    setErrors({
                        ...errors,
                        [name]: 'error.dateOfBirth',
                    });
                } else {
                    setErrors({
                        ...errors,
                        [name]: '',
                    });
                }
                break;
            case 'currentPassword':
            case 'newPassword':
            case 'password':
                if (!new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/).test(value)) {
                    setErrors({
                        ...errors,
                        [name]: 'error.password',
                    });
                } else {
                    setErrors({
                        ...errors,
                        [name]: '',
                    });
                }
                break;
        }
    };

    const setInitialData = (data: T) => {
        setData(data);
    };
    return { data, errors, hangleChange, setInitialData };
};

export default useForm;
