import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaProfesores } from './tabla-profesores';

describe('TablaProfesores', () => {
  let component: TablaProfesores;
  let fixture: ComponentFixture<TablaProfesores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaProfesores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaProfesores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
