import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandaComponent } from './landa.component';

describe('LandaComponent', () => {
  let component: LandaComponent;
  let fixture: ComponentFixture<LandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
