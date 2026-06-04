import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Djokovic } from './djokovic';

describe('Djokovic', () => {
  let component: Djokovic;
  let fixture: ComponentFixture<Djokovic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Djokovic],
    }).compileComponents();

    fixture = TestBed.createComponent(Djokovic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
