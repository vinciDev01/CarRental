import { Component } from '@angular/core';
import {Car} from '../../../models/car';

@Component({
  selector: 'app-add-car',
  standalone: false,

  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.css'
})
export class AddCarComponent {

  protected oCar : Car = {} as Car ;

  constructor() {
  }

  createCar(): Car {
    return this.oCar;
  }
}
