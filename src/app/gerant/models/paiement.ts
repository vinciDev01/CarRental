import { Reservation } from "./reservation";

export interface Paiement {
    montant :number;
    moyenDePaiement :String;
    dateDePaiement :Date;
    reservationId :Reservation;
}
