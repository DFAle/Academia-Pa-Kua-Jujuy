import { TestBed } from '@angular/core/testing';

import { ClasesServices } from './clases-services';

describe('ClasesServices', () => {
  let service: ClasesServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClasesServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
