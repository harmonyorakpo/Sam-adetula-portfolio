import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeegorComponent } from './feegor.component';

describe('FeegorComponent', () => {
  let component: FeegorComponent;
  let fixture: ComponentFixture<FeegorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeegorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeegorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
