import { Language } from '../constant/Type/lang';
const config = {
    baseUrl: 'http://localhost:8000/api',
    customUrl: 'http://localhost:8000',
    lang: {
        default: Language.EN,
        key: 'lang',
    },
    tokken: {
        key: 'auth-cmarket',
    },
};
export default config;
