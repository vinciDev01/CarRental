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
import { AddClientComponent } from './main/client-base/add-client/add-client.component';
import { ListClientsComponent } from './main/client-base/list-clients/list-clients.component';
import { AddTypeComponent } from './main/type-base/add-type/add-type.component';
import { ListTypesComponent } from './main/type-base/list-types/list-types.component';

const routes: Routes = [
  {
    path: '',
    component: GerantComponent,
    children: [
      { path: 'dashboard', component: BodyComponent },

      { path: 'add-marque', component: AddMarqueComponent },
      { path: 'list-marques', component: ListMarquesComponent },

      { path: 'add-model', component: AddModelComponent },
      { path: 'list-models', component: ListModelsComponent },

      { path: 'add-car', component: AddCarComponent },
      { path: 'list-cars', component: ListCarsComponent },
      { path: 'info-car', component: InfoCarComponent },

      { path: 'add-type', component: AddTypeComponent },
      { path: 'list-types', component: ListTypesComponent },

      { path: 'add-reservation', component: CreerReservationComponent },
      { path: 'list-reservations', component: ListeReservationsComponent },

      { path: 'add-client', component: AddClientComponent },
      { path: 'list-clients', component: ListClientsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GerantRoutingModule { }
