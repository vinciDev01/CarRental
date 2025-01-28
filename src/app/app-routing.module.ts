import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './gerant/main/content/content.component';
import { BodyComponent } from './gerant/main/content/body/body.component';

const routes: Routes = [
  { path:'', component:BodyComponent},
  { path: 'gerant', loadChildren: () => import('./gerant/gerant.module').then(m => m.GerantModule) },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
