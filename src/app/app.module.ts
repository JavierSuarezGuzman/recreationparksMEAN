 /* Javier Suárez Guzmán
Agosto septiembre 2022 */ 

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CrearEditarIngresosComponent } from './components/crear-editar-ingresos/crear-editar-ingresos.component';
import { ListarIngresosComponent } from './components/listar-ingresos/listar-ingresos.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearEditarIngresosComponent,
    ListarIngresosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
