import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GerantRoutingModule } from './gerant-routing.module';
import { GerantComponent } from './main/gerant.component';
import { CarBaseComponent } from './main/car-base/car-base.component';
import { AddCarComponent } from './main/car-base/add-car/add-car.component';
import { InfoCarComponent } from './main/car-base/info-car/info-car.component';
import { ListCarsComponent } from './main/car-base/list-cars/list-cars.component';
import { GerantMenuComponent } from './main/gerant-menu/gerant-menu.component';
import { ContentComponent } from './main/content/content.component';
import { BodyComponent } from './main/content/body/body.component';
import { HeaderComponent } from './main/content/header/header.component';
import { ReservationBaseComponent } from './main/reservation-base/reservation-base.component';
import { ListeReservationsComponent } from './main/reservation-base/liste-reservations/liste-reservations.component';
import { MarqueBaseComponent } from './main/marque-base/marque-base.component';
import { AddMarqueComponent } from './main/marque-base/add-marque/add-marque.component';
import { ListMarquesComponent } from './main/marque-base/list-marques/list-marques.component';
import { ModelBaseComponent } from './main/model-base/model-base.component';
import { AddModelComponent } from './main/model-base/add-model/add-model.component';
import { ListModelsComponent } from './main/model-base/list-models/list-models.component';
import { ClientBaseComponent } from './main/client-base/client-base.component';
import { AddClientComponent } from './main/client-base/add-client/add-client.component';
import { ListClientsComponent } from './main/client-base/list-clients/list-clients.component';
import { CreerReservationComponent } from './main/reservation-base/creer-reservation/creer-reservation.component';
import { TypeBaseComponent } from './main/type-base/type-base.component';
import { AddTypeComponent } from './main/type-base/add-type/add-type.component';
import { ListTypesComponent } from './main/type-base/list-types/list-types.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    GerantComponent,
    CarBaseComponent,
    AddCarComponent,
    InfoCarComponent,
    ListCarsComponent,
    GerantMenuComponent,
    ContentComponent,
    BodyComponent,
    HeaderComponent,
    ReservationBaseComponent,
    CreerReservationComponent,
    ListeReservationsComponent,
    MarqueBaseComponent,
    AddMarqueComponent,
    ListMarquesComponent,
    ModelBaseComponent,
    AddModelComponent,
    ListModelsComponent,
    ClientBaseComponent,
    AddClientComponent,
    ListClientsComponent,
    TypeBaseComponent,
    AddTypeComponent,
    ListTypesComponent,
  ],
    imports: [
        CommonModule,
        GerantRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ]
})
export class GerantModule { }
