import { Component } from '@angular/core';
import { Reservation } from '../../models/reservation';

@Component({
  selector: 'app-reservation-base',
  standalone: false,
  
  templateUrl: './reservation-base.component.html',
  styleUrl: './reservation-base.component.css'
})
export class ReservationBaseComponent {
  reservations: Reservation[] = [
    {
      id: 1,
      client: 'John Doe',
      voiture: 'Toyota Corolla',
      dateDebut: new Date(),
      dateFin: new Date(),
      status: 'Confirmée',
    },
    {
      id: 2,
      client: 'Jane Smith',
      voiture: 'Peugeot 208',
      dateDebut: new Date(),
      dateFin: new Date(),
      status: 'En attente',
    },
    {
      id: 3,
      client: 'Robert Johnson',
      voiture: 'Renault Clio',
      dateDebut: new Date(),
      dateFin: new Date(),
      status: 'Annulée',
    },
  ];

  displayedColumns: string[] = [
    'id',
    'client',
    'voiture',
    'dateDebut',
    'dateFin',
    'status',
    'actions',
  ];

  constructor() {}

  ngOnInit(): void {}

  onDelete(reservationId: number): void {
    if (confirm('Voulez-vous vraiment supprimer cette réservation ?')) {
      this.reservations = this.reservations.filter(
        (r) => r.id !== reservationId
      );
    }
  }
}
