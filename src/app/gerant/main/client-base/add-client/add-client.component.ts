import { Component } from '@angular/core';
import {Client} from '../../../models/client';
import {ClientService} from '../../../services/client/client.service';


@Component({
  selector: 'app-add-client',
  standalone: false,

  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.css'
})
export class AddClientComponent {

  protected oClient : Client = {} as Client ;

  constructor(private service : ClientService) {
  }

  save(): void {
    this.service.createClient(this.oClient).subscribe(() => {
      alert("Client ajouté avec succès !");
    }, () => {
      alert("Une erreur est survenue !");
    });
  }
}
