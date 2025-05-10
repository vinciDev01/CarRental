import { Component } from '@angular/core';
import {Model} from '../../models/model';
import {ModelService} from '../../services/model/model.service';

@Component({
  selector: 'app-model-base',
  standalone: false,

  templateUrl: './model-base.component.html',
  styleUrl: './model-base.component.css'
})
export class ModelBaseComponent {
  protected oModel: Model={} as Model

  constructor(private service : ModelService) {
  }

  save(): void {
    try
    {
      this.service.createModel(this.oModel).subscribe();
    }
    catch (e) {
      alert(e);
    }
  }
}
