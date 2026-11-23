import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAlumno } from './register-alumno';

describe('RegisterAlumno', () => {
  let component: RegisterAlumno;
  let fixture: ComponentFixture<RegisterAlumno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterAlumno]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterAlumno);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
