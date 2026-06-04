import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Federer } from './federer';

describe('Federer', () => {
  let component: Federer;
  let fixture: ComponentFixture<Federer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Federer],
    }).compileComponents();

    fixture = TestBed.createComponent(Federer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
