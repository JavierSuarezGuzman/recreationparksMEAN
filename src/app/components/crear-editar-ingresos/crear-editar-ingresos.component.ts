/* Javier Suárez Guzmán
Agosto septiembre 2022 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ingreso } from 'src/app/models/ingreso';

@Component({
  selector: 'app-crear-editar-ingresos',
  templateUrl: './crear-editar-ingresos.component.html',
  styleUrls: ['./crear-editar-ingresos.component.css']
})

export class CrearEditarIngresosComponent implements OnInit {
  ingresoForm: FormGroup;
  titulo = 'Nuevo ingreso';
  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService) {
    this.ingresoForm = this.fb.group({
      cedula: ['', Validators.required],
      nombre: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      apellido: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      correo: ['', Validators.email],
      nroContacto: ['', Validators.required],
      nroEmergencia: ['', Validators.required],
      ingreso: [`${this.fechaHoy()}`, Validators.required],
      salida: [``, Validators.required],
    })
    console.log(this.ingresoForm.get('ingreso')?.value);
  }

  ngOnInit(): void {
  }

  crearIngreso() {

    const IngresoDatos: Ingreso = {
      cedula: this.ingresoForm.get('cedula')?.value,
      nombre: this.ingresoForm.get('nombre')?.value,
      apellido: this.ingresoForm.get('apellido')?.value,
      correo: this.ingresoForm.get('correo')?.value,
      nroContacto: this.ingresoForm.get('nroContacto')?.value,
      nroEmergencia: this.ingresoForm.get('nroEmergencia')?.value,
      ingreso: this.ingresoForm.get('ingreso')?.value,
      salida: this.ingresoForm.get('salida')?.value,
    }
    console.log(IngresoDatos);
    this.toastr.info('Los datos fueron ingresados exitosamente', 'Ingreso satisfactorio')
    this.router.navigate(['/']);
  }

  fechaHoy() {
    const fecha = new Date();
    let dia = String(fecha.getDate());
    let mes = String(fecha.getMonth() + 1);
    let anno = String(fecha.getFullYear());
    let hora = String(fecha.getHours());
    let minuto = String(fecha.getMinutes());

    if (parseInt(mes) < 10) {
      mes = "0" + mes;
    }
    if (parseInt(dia) < 10) {
      dia = "0" + dia;
    }
    if (parseInt(hora) < 10) {
      hora = "0" + hora;
    }
    if (parseInt(minuto) < 10) {
      minuto = "0" + minuto;
    }

    const fechaString = anno + "-" + mes + "-" + dia + "T" + hora + ":" + minuto;
    return fechaString;

  }

}
