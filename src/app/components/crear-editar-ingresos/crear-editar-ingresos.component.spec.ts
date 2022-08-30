 /* Javier Suárez Guzmán
Agosto septiembre 2022 */ 

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEditarIngresosComponent } from './crear-editar-ingresos.component';

describe('CrearEditarIngresosComponent', () => {
  let component: CrearEditarIngresosComponent;
  let fixture: ComponentFixture<CrearEditarIngresosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearEditarIngresosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearEditarIngresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
