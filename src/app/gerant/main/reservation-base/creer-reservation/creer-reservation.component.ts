import { Component } from '@angular/core';
import {Reservation} from '../../../models/reservation';
import {ReservationService} from '../../../services/reservation/reservation.service';


@Component({
  selector: 'app-creer-reservation',
  standalone: false,

  templateUrl: './creer-reservation.component.html',
  styleUrl: './creer-reservation.component.css'
})
export class CreerReservationComponent {
  protected oReservation: Reservation={} as Reservation

  constructor(private service : ReservationService) {
  }

  save(): void {
    try
    {
      this.service.createReservation(this.oReservation).subscribe();
    }
    catch (e) {
      alert(e);
    }
  }
}
