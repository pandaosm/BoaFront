import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './Front/account/account.component';
import { ClientsComponent } from './Front/clients/clients.component';
import { NcgComponent } from './Front/ncg/ncg.component';

const routes: Routes = [
  { path: '', component: ClientsComponent },
  { path: 'home', component: ClientsComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'account', component: AccountComponent },
  { path: 'account', component: NcgComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
