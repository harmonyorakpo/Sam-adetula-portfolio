import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwwipeComponent } from './swwipe.component';

describe('SwwipeComponent', () => {
  let component: SwwipeComponent;
  let fixture: ComponentFixture<SwwipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwwipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwwipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
