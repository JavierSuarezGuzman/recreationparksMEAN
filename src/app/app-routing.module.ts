/* Javier Suárez Guzmán
Agosto septiembre 2022 */ 

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrearEditarIngresosComponent } from './components/crear-editar-ingresos/crear-editar-ingresos.component';
import { ListarIngresosComponent } from './components/listar-ingresos/listar-ingresos.component';

const routes: Routes = [
  { path: '', component: ListarIngresosComponent },
  { path: 'ingresonuevo', component: CrearEditarIngresosComponent },
  { path: 'editaringreso/:id', component: CrearEditarIngresosComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
