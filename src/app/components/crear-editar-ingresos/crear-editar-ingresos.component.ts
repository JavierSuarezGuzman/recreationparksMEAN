/* Javier Suárez Guzmán
Agosto septiembre 2022 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ingreso } from 'src/app/models/ingreso';

@Component({
  selector: 'app-crear-editar-ingresos',
  templateUrl: './crear-editar-ingresos.component.html',
  styleUrls: ['./crear-editar-ingresos.component.css']
})
export class CrearEditarIngresosComponent implements OnInit {
  ingresoForm: FormGroup;
  titulo = 'Crear ingreso';
  constructor(private fb: FormBuilder, 
              private router: Router) {
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

    const Ingreso: Ingreso = {
      cedula: this.ingresoForm.get('cedula')?.value,
      nombre: this.ingresoForm.get('nombre')?.value,
      apellido: this.ingresoForm.get('apellido')?.value,
      correo: this.ingresoForm.get('correo')?.value,
      nroContacto: this.ingresoForm.get('nroContacto')?.value,
      nroEmergencia: this.ingresoForm.get('nroEmergencia')?.value,
      ingreso: this.ingresoForm.get('ingreso')?.value,
      salida: this.ingresoForm.get('salida')?.value,
    }
    console.log(Ingreso);
    this.router.navigate(['/']);
  }

}
