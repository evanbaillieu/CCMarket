import { TranslationFormat } from '../constant/Type/lang';

const data: TranslationFormat = {
    nav: {
        home: 'Accuile',
        projects: 'Projects',
        jobs: 'Poste',
    },
    login: {
        title: 'Se Connecter',
        email: 'address mail',
        password: 'Mot de passe',
    },
    register: {
        firstname: 'Prénom',
        lastname: 'nom de famille',
        email: 'Email',
        dateDeNaisance: 'Date de naissance',
        password: 'Mot de passe',
        veryfPassword: 'Confirmer votre mode de passe',
    },
    error: {
        firstname: 'votre pernom neut repecte pas les condition',
        lastname: 'votre nom de famille neut respecte pas les condition',
        email: "votre email n'eut respect pas les condition",
        dateDeNaisance: 'votre date de naissance neut respect pas les condition',
        password: 'votre password neut respect pas les condition',
        veryfPassword: "votre mot de passe de confirmation n'est pas egal au mot de passe",
        tropcourt: "il n'y a pas assez de caracter",
    },
    post: 'pas de nouveau post',
    users: 'bienvenue jeune utilisateur',
};

export default data;
