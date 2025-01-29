import { Component } from '@angular/core';
import {Client} from '../../../models/client';

@Component({
  selector: 'app-add-client',
  standalone: false,

  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.css'
})
export class AddClientComponent {

  protected oClient : Client={} as Client;

  constructor() {
  }

  createClient():Client{
    return this.oClient;
  }
}
