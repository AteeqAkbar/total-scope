import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureEstimatVideoComponent } from './future-estimate-video.component';

describe('FutureEstimatVideoComponent', () => {
  let component: FutureEstimatVideoComponent;
  let fixture: ComponentFixture<FutureEstimatVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FutureEstimatVideoComponent]
    });
    fixture = TestBed.createComponent(FutureEstimatVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
