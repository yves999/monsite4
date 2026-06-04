import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageJT } from './affichage-jt';

describe('AffichageJT', () => {
  let component: AffichageJT;
  let fixture: ComponentFixture<AffichageJT>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffichageJT],
    }).compileComponents();

    fixture = TestBed.createComponent(AffichageJT);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
