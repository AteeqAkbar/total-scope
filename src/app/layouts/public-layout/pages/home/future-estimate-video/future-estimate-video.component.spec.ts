import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureEstimateVideoComponent } from './future-estimate-video.component';

describe('FutureEstimateVideoComponent', () => {
  let component: FutureEstimateVideoComponent;
  let fixture: ComponentFixture<FutureEstimateVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FutureEstimateVideoComponent]
    });
    fixture = TestBed.createComponent(FutureEstimateVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
