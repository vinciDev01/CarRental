import { Component } from '@angular/core';
import {Car} from '../../../models/car';
import {CarService} from '../../../services/car/car.service';

@Component({
  selector: 'app-add-car',
  standalone: false,

  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.css'
})
export class AddCarComponent {

  protected oCar : Car = {} as Car ;

  constructor(private service : CarService) {
  }

  // save(): void {
  //   this.service.createCar(this.oCar).subscribe(() => {
  //     alert("Voiture ajouté avec succès !");
  //   }, () => {
  //     alert("Une erreur est survenue !");
  //   });
  // }
  save(): void {
    try
    {
      this.service.createCar(this.oCar).subscribe();
    }
    catch (e) {
      alert(e);
    }
  }

}
