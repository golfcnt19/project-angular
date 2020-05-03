import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import{FormsModule}from '@angular/forms';
import{ServiceService}from '../app/Service/service.service';
import{HttpClientModule}from '@angular/common/http';
import { AComponent } from './Product/a/a.component';
import { EComponent } from './Product/e/e.component';
import { LComponent } from './Product/l/l.component';
import { ListComponent } from './Customer/list/list.component';
import { EditsComponent } from './Customer/edits/edits.component';
import { AddsComponent } from './Customer/adds/adds.component';



@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    AComponent,
    EComponent,
    LComponent,
    ListComponent,
    EditsComponent,
    AddsComponent,
   
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
