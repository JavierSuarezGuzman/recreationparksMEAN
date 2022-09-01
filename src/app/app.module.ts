 /* Javier Suárez Guzmán
Agosto septiembre 2022 */ 

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
