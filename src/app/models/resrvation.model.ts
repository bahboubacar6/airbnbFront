export enum TypeAnnonce{
    MAISON,
    APPARTEMENT,
    CHAMBRE
}

export interface Reservation{
    idReservation: number;
    typeReservation: TypeAnnonce;
    date: Date;
    startDate: Date;
    endDate: Date;
    image: string;
    price: number;
    description: string
}

export class ReservationToUser{
    idReservation: number = 0
    typeReservation: TypeAnnonce = TypeAnnonce.MAISON ;
    date: Date =new Date();
    startDate: Date = new Date();
    endDate: Date = new Date();
    image: string ="";
    price: number = 0;
    description: string = "";
    idAppUserDTO: number = 0;
    idAnnounceDTO: number = 0;
}



