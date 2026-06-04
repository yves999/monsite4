import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionJT } from './gestion-jt';

describe('GestionJT', () => {
  let component: GestionJT;
  let fixture: ComponentFixture<GestionJT>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionJT],
    }).compileComponents();

    fixture = TestBed.createComponent(GestionJT);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
