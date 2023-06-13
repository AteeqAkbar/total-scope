import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatCardComponent } from './estimate-card.component';

describe('EstimatCardComponent', () => {
  let component: EstimatCardComponent;
  let fixture: ComponentFixture<EstimatCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstimatCardComponent]
    });
    fixture = TestBed.createComponent(EstimatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
