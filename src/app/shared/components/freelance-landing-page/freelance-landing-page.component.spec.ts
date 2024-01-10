import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelanceLandingPageComponent } from './freelance-landing-page.component';

describe('FreelanceLandingPageComponent', () => {
  let component: FreelanceLandingPageComponent;
  let fixture: ComponentFixture<FreelanceLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreelanceLandingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreelanceLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
