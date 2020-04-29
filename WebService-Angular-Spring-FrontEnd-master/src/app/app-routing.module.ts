import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Persona/listar/listar.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import { AComponent } from './Product/a/a.component';
import { LComponent } from './Product/l/l.component';
import { EComponent } from './Product/e/e.component';
const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'add',component:AddComponent},
  {path:'edit',component:EditComponent},
  {path:'A',component:AComponent},
  {path:'L',component:LComponent},
  {path:'E',component:EComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
