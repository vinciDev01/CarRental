import { Component } from '@angular/core';
import {Marque} from '../../../models/marque';

@Component({
  selector: 'app-add-marque',
  standalone: false,

  templateUrl: './add-marque.component.html',
  styleUrl: './add-marque.component.css'
})
export class AddMarqueComponent {

  protected oMarque : Marque={} as Marque;

  constructor() {
  }

  createMarque():Marque{
  return this.oMarque
  }
}
