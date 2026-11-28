import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaClases } from './tabla-clases';

describe('TablaClases', () => {
  let component: TablaClases;
  let fixture: ComponentFixture<TablaClases>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaClases]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaClases);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
