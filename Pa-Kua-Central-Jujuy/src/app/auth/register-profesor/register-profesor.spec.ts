import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterProfesor } from './register-profesor';

describe('RegisterProfesor', () => {
  let component: RegisterProfesor;
  let fixture: ComponentFixture<RegisterProfesor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterProfesor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterProfesor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
