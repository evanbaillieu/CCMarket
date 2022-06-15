import { Language } from '../constant/Type/lang';
const config = {
    baseurl: 'http://localhost:8000/api',
    lang: {
        default: Language.EN,
        key: 'lang',
    },
    tokken: {
        key: 'auth-cmarket',
    },
};
export default config;
