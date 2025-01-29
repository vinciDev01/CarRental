import { Component } from '@angular/core';
import {Type} from '../../../models/type';
import {TypeService} from '../../../services/type/type.service';

@Component({
  selector: 'app-add-type',
  standalone: false,

  templateUrl: './add-type.component.html',
  styleUrl: './add-type.component.css'
})
export class AddTypeComponent {

  protected oType: Type={} as Type

  constructor(private service : TypeService) {
  }

  createType(): Type{
    alert(this.oType.nom)
    try{
      this.service.createType(this.oType);
    }
    catch (e) {
      alert(e);
    }
    console.log(this.oType.nom)
    return this.oType;
  }
}
