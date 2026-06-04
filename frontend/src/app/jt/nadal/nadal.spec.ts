import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nadal } from './nadal';

describe('Nadal', () => {
  let component: Nadal;
  let fixture: ComponentFixture<Nadal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nadal],
    }).compileComponents();

    fixture = TestBed.createComponent(Nadal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
