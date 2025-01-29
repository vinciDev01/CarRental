import { Component } from '@angular/core';
import {Type} from '../../../models/type';

@Component({
  selector: 'app-add-type',
  standalone: false,

  templateUrl: './add-type.component.html',
  styleUrl: './add-type.component.css'
})
export class AddTypeComponent {

  protected oType: Type={} as Type

  constructor() {
  }

  createType(): Type{
    return this.oType;
  }
}
