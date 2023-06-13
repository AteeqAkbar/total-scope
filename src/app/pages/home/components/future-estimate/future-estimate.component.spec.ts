import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureEstimatComponent } from './future-estimate.component';

describe('FutureEstimatComponent', () => {
  let component: FutureEstimatComponent;
  let fixture: ComponentFixture<FutureEstimatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FutureEstimatComponent]
    });
    fixture = TestBed.createComponent(FutureEstimatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
