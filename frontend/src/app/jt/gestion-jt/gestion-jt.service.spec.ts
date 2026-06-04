import { TestBed } from '@angular/core/testing';

import { GestionJtService } from './gestion-jt.service';

describe('GestionJtService', () => {
  let service: GestionJtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionJtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
