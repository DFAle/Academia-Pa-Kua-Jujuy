import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterClases } from './register-clases';

describe('RegisterClases', () => {
  let component: RegisterClases;
  let fixture: ComponentFixture<RegisterClases>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterClases]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterClases);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
