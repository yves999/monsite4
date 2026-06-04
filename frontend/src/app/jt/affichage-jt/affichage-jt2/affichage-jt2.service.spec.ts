import { TestBed } from '@angular/core/testing';

import { AffichageJt2Service } from './affichage-jt2.service';

describe('AffichageJt2Service', () => {
  let service: AffichageJt2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffichageJt2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
