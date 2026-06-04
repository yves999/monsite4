import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jt } from './jt';

describe('Jt', () => {
  let component: Jt;
  let fixture: ComponentFixture<Jt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jt],
    }).compileComponents();

    fixture = TestBed.createComponent(Jt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
