import { Component } from '@angular/core';
import { Voiture } from '../../../models/voiture';

@Component({
  selector: 'app-add-car',
  standalone: false,
  
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.css'
})
export class AddCarComponent {

  voiture : Voiture ={} as Voiture;
  addVoiture() : void{

  }
}
