export type IUser = {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    role: string[];
    dateDeNaisance: string;
    project?: IProject[];
    source?: ISource[];
    wishlist?: IWishlist;
    experiance?: IExperiance[];
    profilType?: IProfileType[];
    lang?: ILang[];
    contributeProject?: IProject[];
};

export type IProject = {
    id: string;
    titre: string;
    resumer: string;
    description: string;
    nombreStar: number;
    porteur: IUser;
    fichePost: IFichePost[];
    source: ISource[];
    Contributeur: IUser[];
};

export type ISource = {
    id: string;
    name: string;
    type: string;
    lien: string;
};

export type IExperiance = {
    id: string;
    titre: string;
    resumer: string;
    dateDeDebut: string;
    dateDeFin: string;
    source: ISource[];
};

export type IWishlist = {
    id: string;
    projects: IProject[];
    user: IUser;
};

export type IFichePost = {
    id: string;
    titre: string;
    resumer: string;
    description: string;
    source: ISource[];
};

export type IMessagerie = {
    id: string;
    user: IUser;
    discution: IDiscution[];
    userBloqued: IUser[];
};

export type IDiscution = {
    id: string;
    user: IUser[];
    message: IMessage[];
};

export type IMessage = {
    id: string;
    creeUser: IUser;
    etat: string;
    message: string;
};

export type IProfileType = {
    id: string;
    name: string;
};

export type ILang = {
    id: string;
    name: string;
    type: string;
};
