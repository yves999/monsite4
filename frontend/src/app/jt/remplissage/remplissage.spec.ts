import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Remplissage } from './remplissage';

describe('Remplissage', () => {
  let component: Remplissage;
  let fixture: ComponentFixture<Remplissage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Remplissage],
    }).compileComponents();

    fixture = TestBed.createComponent(Remplissage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
