export enum TypeAnnonce{
    MAISON,
    APPARTEMENT,
    CHAMBRE
}

export interface Announce{
    idAnnounce: number;
    typeAnnounce: TypeAnnonce;
    date: Date;
    startDate: Date;
    endDate: Date;
    image: string;
    price: number;
    description: string
}