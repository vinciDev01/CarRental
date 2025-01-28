export interface Reservation {
  id: number;
  client: String;
  voiture: String;
  dateDebut: Date;
  dateFin: Date;
  status: String;
}
