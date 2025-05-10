import {Component, OnInit} from '@angular/core';
import {Marque} from '../../../models/marque';
import {MarqueService} from '../../../services/marque/marque.service';
import {Observable, timeout} from 'rxjs';

@Component({
  selector: 'app-list-marques',
  standalone: false,

  templateUrl: './list-marques.component.html',
  styleUrl: './list-marques.component.css'
})
export class ListMarquesComponent implements OnInit {

  protected oMarques : Marque []= [];

  isloading: boolean = false;

  constructor(private marqueService : MarqueService) {
  }

  ngOnInit() {
    this.listeMarque();
  }

  listeMarque(): void {
    this.isloading = true;
    // setTimeout(() => {
    //   this.marqueService.getMarques().subscribe(
    //     marques => {
    //       this.oMarques = marques;
    //       this.isloading = false;
    //       console.log(this.oMarques);
    //     },
    //     error => {
    //       console.log(error);
    //     },
    //     () => {
    //
    //     }
    //   );
    // },5000);

    this.marqueService.getMarques().subscribe(
        marques => {
          this.oMarques = marques;
          this.isloading = false;
          console.log(this.oMarques);
        },
        error => {
          console.log(error);
        },
        () => {

        }
    );

  }

}
