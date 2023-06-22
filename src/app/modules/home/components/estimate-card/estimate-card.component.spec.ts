import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateCardComponent } from './estimate-card.component';

describe('EstimateCardComponent', () => {
  let component: EstimateCardComponent;
  let fixture: ComponentFixture<EstimateCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstimateCardComponent]
    });
    fixture = TestBed.createComponent(EstimateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
