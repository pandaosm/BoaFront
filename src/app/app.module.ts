import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterielModule } from './materiel/materiel.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
import { ClientComponent } from './component/client/client/client.component';
import { ClientsComponent } from './component/client/clients/clients.component';
import { ClientFormComponent } from './component/client/client-form/client-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ClientFormComponent,
    TestComponent,
    ClientComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule , 
    BrowserAnimationsModule,
    AppRoutingModule , 
    MaterielModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
