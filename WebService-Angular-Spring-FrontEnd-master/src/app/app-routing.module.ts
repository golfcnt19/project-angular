import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Persona/listar/listar.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import { AComponent } from './Product/a/a.component';
import { LComponent } from './Product/l/l.component';
import { EComponent } from './Product/e/e.component';
import { ListComponent } from './Customer/list/list.component';
import { EditsComponent } from './Customer/edits/edits.component';
import { AddsComponent } from './Customer/adds/adds.component';
import { ListdataComponent } from './pro/listdata/listdata.component';

const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'add',component:AddComponent},
  {path:'edit',component:EditComponent},
  {path:'A',component:AComponent},
  {path:'L',component:LComponent},
  {path:'E',component:EComponent},
  {path: 'lists' ,component: ListComponent},
  {path: 'edits' ,component: EditsComponent},
  {path: 'adds' ,component: AddsComponent},
  {path: 'plist' ,component: ListdataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
