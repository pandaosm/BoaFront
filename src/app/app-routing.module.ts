import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './component/client/client-form/client-form.component';
import { ClientsComponent } from './component/client/clients/clients.component';


const routes: Routes = [
  { path: '', component: ClientsComponent },
  { path: 'home', component: ClientsComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'addClient', component: ClientFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
