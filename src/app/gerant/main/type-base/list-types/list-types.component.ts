import { Component } from '@angular/core';
import {TypeService} from '../../../services/type/type.service';
import {Type} from '../../../models/type';

@Component({
  selector: 'app-list-types',
  standalone: false,

  templateUrl: './list-types.component.html',
  styleUrl: './list-types.component.css'
})
export class ListTypesComponent {

  protected listType : Type[] = [];

  constructor(private service : TypeService) {
  }

  // listTypes(): void {
  //   this.service.getTypes().subscribe(
  //     (response) => {
  //       console.log("Message:", response.message);
  //       console.log("Details:", response.details);
  //       this.listType = response.details;
  //     },
  //     (error) => {
  //       console.error("Erreur lors de la récupération des types :", error);
  //       this.listType = [];
  //     }
  //   );
  // }


}
