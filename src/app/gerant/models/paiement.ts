import { Reservation } from "./reservation";

export interface Paiement {
    reservation:Reservation;
    montant: number;
    datePaiement :Date;
    moyenPaiement :string;
    id:string;

}
