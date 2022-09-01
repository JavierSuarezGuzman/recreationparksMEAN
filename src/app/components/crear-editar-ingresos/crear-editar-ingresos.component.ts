/* Javier Suárez Guzmán
Agosto septiembre 2022 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-editar-ingresos',
  templateUrl: './crear-editar-ingresos.component.html',
  styleUrls: ['./crear-editar-ingresos.component.css']
})
export class CrearEditarIngresosComponent implements OnInit {
  ingresoForm: FormGroup;
  titulo = 'Crear ingreso';
  constructor(private fb: FormBuilder) {
    this.ingresoForm = this.fb.group({
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.email],
      nroContacto: ['', Validators.required],
      nroEmergencia: ['', Validators.required],
      ingreso: ['', Validators.required],
      salida: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  crearIngreso() {

/*     console.log(typeof(this.ingresoForm)); //object
    console.log(this.ingresoForm); //lo trae como Object y no como FormGroup */
    //console.log(typeof(this.ingresoForm.get('nombre')?.value));
    console.log(this.ingresoForm.get('cedula')?.value); //string
    console.log(this.ingresoForm.get('nombre')?.value); //string
    console.log(this.ingresoForm.get('apellido')?.value); //string
    console.log(this.ingresoForm.get('correo')?.value); //string
    console.log(this.ingresoForm.get('nroContacto')?.value); //string
    console.log(this.ingresoForm.get('nroEmergencia')?.value); //string
    console.log(this.ingresoForm.get('ingreso')?.value); //string
    console.log(this.ingresoForm.get('salida')?.value); //string
  }

}
