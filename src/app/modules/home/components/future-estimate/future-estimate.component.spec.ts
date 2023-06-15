import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureEstimateComponent } from './future-estimate.component';

describe('FutureEstimateComponent', () => {
  let component: FutureEstimateComponent;
  let fixture: ComponentFixture<FutureEstimateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FutureEstimateComponent]
    });
    fixture = TestBed.createComponent(FutureEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
