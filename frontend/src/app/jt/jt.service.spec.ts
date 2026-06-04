import { TestBed } from '@angular/core/testing';

import { JtService } from './jt.service';

describe('JtService', () => {
  let service: JtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
