import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDetailsLandingPageComponent } from './work-details-landing-page.component';

describe('WorkDetailsLandingPageComponent', () => {
  let component: WorkDetailsLandingPageComponent;
  let fixture: ComponentFixture<WorkDetailsLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkDetailsLandingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkDetailsLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
