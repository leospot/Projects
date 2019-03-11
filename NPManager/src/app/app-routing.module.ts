import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiarioCreateComponent } from './diario-create/diario-create.component';
import { DiarioDetailsComponent } from './diario-details/diario-details.component';
import { DiarioUpdateComponent } from './diario-update/diario-update.component';
import { DiariosListComponent } from './diarios-list/diarios-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'diario-create' },
  { path: 'diario-create', component: DiarioCreateComponent },
  { path: 'diario-details/:id', component: DiarioDetailsComponent },
  { path: 'diario-update', component: DiarioUpdateComponent },
  { path: 'diarios-list', component: DiariosListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
