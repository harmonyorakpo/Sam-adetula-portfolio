import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkwayComponent } from './parkway.component';

describe('ParkwayComponent', () => {
  let component: ParkwayComponent;
  let fixture: ComponentFixture<ParkwayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkwayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParkwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
