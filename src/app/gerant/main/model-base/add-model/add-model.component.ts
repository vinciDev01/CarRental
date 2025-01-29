import { Component } from '@angular/core';
import {Model} from '../../../models/model';

@Component({
  selector: 'app-add-model',
  standalone: false,

  templateUrl: './add-model.component.html',
  styleUrl: './add-model.component.css'
})
export class AddModelComponent {
  protected oModele: Model={} as Model;

  constructor() {
  }

  createModele(): Model{
    return this.oModele;
  }
}
