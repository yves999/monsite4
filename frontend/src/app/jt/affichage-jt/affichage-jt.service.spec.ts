import { TestBed } from '@angular/core/testing';

import { AffichageJTService } from './affichage-jt.service';

describe('AffichageJTService', () => {
  let service: AffichageJTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffichageJTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
