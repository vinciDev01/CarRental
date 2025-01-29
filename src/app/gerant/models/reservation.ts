import { Client } from "./client";
import { Voiture } from "./voiture";

export interface Reservation {
  id: string;
  client: Client;
  voiture: Voiture;
  dateDebut: Date;
  dateFin: Date;
  status: String;
}
