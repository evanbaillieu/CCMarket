import { TranslationFormat } from '../constant/Type/lang';
const data: TranslationFormat = {
    nav: {
        home: 'Home',
        projects: 'Projects',
        jobs: 'Jobs',
    },
    login: {
        title: 'Login',
        email: 'Email',
        password: 'Password',
    },
    register: {
        firstname: 'First Name',
        lastname: 'Last Name',
        email: 'Email',
        dateDeNaisance: 'Date of birth',
        password: 'Password',
        veryfPassword: 'Confirm your password',
    },
    error: {
        firstname: 'your firstname does not meet the conditions',
        lastname: 'your lastname does not meet the conditions',
        email: 'your email does not meet the conditions',
        dateDeNaisance: 'your date of birth does not meet the conditions',
        password: 'your password does not meet the conditions',
        veryfPassword: 'your confirm password is not equals as password',
        tropcourt: 'there is not enough carracter',
    },
    post: 'no new post',
    users: 'welcomes young users',
};
export default data;
