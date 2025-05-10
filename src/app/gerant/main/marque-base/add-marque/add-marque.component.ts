import { Component } from '@angular/core';
import {Marque} from '../../../models/marque';
import {MarqueService} from '../../../services/marque/marque.service';

@Component({
  selector: 'app-add-marque',
  standalone: false,

  templateUrl: './add-marque.component.html',
  styleUrl: './add-marque.component.css'
})
export class AddMarqueComponent {

  protected oMarque : Marque = {} as Marque ;

  constructor(private service : MarqueService) {
  }

  // save(): void {
  //   this.service.createMarque(this.oMarque).subscribe(() => {
  //     alert("Marque ajouté avec succès !");
  //   }, () => {
  //     alert("Une erreur est survenue !");
  //   });
  // }
  save(): void {
    try
    {
      this.service.createMarque(this.oMarque).subscribe();
      alert("Marque ajouté avec succès !");
    }
    catch (e) {
      alert(e);
    }
  }
}
