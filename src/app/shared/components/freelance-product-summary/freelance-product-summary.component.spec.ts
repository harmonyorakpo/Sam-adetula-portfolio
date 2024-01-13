import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelanceProductSummaryComponent } from './freelance-product-summary.component';

describe('FreelanceProductSummaryComponent', () => {
  let component: FreelanceProductSummaryComponent;
  let fixture: ComponentFixture<FreelanceProductSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreelanceProductSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreelanceProductSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
