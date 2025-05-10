import { Component } from '@angular/core';
import {Model} from '../../../models/model';
import {ModelService} from '../../../services/model/model.service';

@Component({
  selector: 'app-add-model',
  standalone: false,

  templateUrl: './add-model.component.html',
  styleUrl: './add-model.component.css'
})
export class AddModelComponent {
  protected oModele : Model = {} as Model ;

  constructor(private service : ModelService) {
  }

  save(): void {
    this.service.createModel(this.oModele).subscribe(() => {
      alert("Model ajouté avec succès !");
    }, () => {
      alert("Une erreur est survenue !");
    });
  }
}
