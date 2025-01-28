import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerantComponent } from './main/gerant.component';
import { AddCarComponent } from './main/car-base/add-car/add-car.component';
import { ListCarsComponent } from './main/car-base/list-cars/list-cars.component';
import { InfoCarComponent } from './main/car-base/info-car/info-car.component';
import { CreerReservationComponent } from './main/reservation-base/creer-reservation/creer-reservation.component';
import { ListeReservationsComponent } from './main/reservation-base/liste-reservations/liste-reservations.component';
import { ContentComponent } from './main/content/content.component';
import { BodyComponent } from './main/content/body/body.component';
import { AddMarqueComponent } from './main/marque-base/add-marque/add-marque.component';
import { ListMarquesComponent } from './main/marque-base/list-marques/list-marques.component';
import { AddModelComponent } from './main/model-base/add-model/add-model.component';
import { ListModelsComponent } from './main/model-base/list-models/list-models.component';

const routes: Routes = [
  {
    path: '',
    component: GerantComponent,
    children: [
      { path: 'dashboard', component: BodyComponent },

      { path: 'add-car', component: AddCarComponent },
      { path: 'list-cars', component: ListCarsComponent },
      { path: 'info-car', component: InfoCarComponent },

      { path: 'add-reservation', component: CreerReservationComponent },
      { path: 'list-reservations', component: ListeReservationsComponent },

      { path: 'add-marque', component: AddMarqueComponent },
      { path: 'list-marques', component: ListMarquesComponent },

      { path: 'add-model', component: AddModelComponent },
      { path: 'list-marques', component: ListModelsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GerantRoutingModule { }
