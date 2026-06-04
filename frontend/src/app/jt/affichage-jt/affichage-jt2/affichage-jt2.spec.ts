import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageJt2 } from './affichage-jt2';

describe('AffichageJt2', () => {
  let component: AffichageJt2;
  let fixture: ComponentFixture<AffichageJt2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffichageJt2],
    }).compileComponents();

    fixture = TestBed.createComponent(AffichageJt2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
