export type IUser = {
    id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    role?: string[];
    dateOfBirth?: string;
    projects?: IProject[];
    sources?: ISource[];
    wishlist?: IWishlist;
    experiance?: IExperiance[];
    profilType?: IProfilType[];
    lang?: ILang[];
    contributeProject?: IProject[];
};

export type IProject = {
    id?: string;
    title: string;
    abstract: string;
    description: string;
    nbStar?: number;
    leader?: string;
    jobs?: IJob[];
    category?: string;
    sources?: string[];
    contributors?: IUser[];
};

export type ISource = {
    id?: string;
    name: string;
    type: string;
    link: string;
    projects: string[];
};

export type IExperiance = {
    id: string;
    title: string;
    resumer: string;
    dateDeDebut: string;
    dateDeFin: string;
    sources: ISource[];
};

export type IWishlist = {
    id: string;
    projects: IProject[];
    user: IUser;
};

export type IJob = {
    id?: string;
    title: string;
    abstract: string;
    description: string;
    Project?: IProject;
    profilType?: IProfilType;
    sources?: ISource[];
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

export type IProfilType = {
    id?: string;
    name?: string;
};

export type ILang = {
    id: string;
    name: string;
    type: string;
};

export type ICategory = {
    id?: string;
    name: string;
};
