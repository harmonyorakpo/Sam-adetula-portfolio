import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiedIterationsComponent } from './modified-iterations.component';

describe('ModifiedIterationsComponent', () => {
  let component: ModifiedIterationsComponent;
  let fixture: ComponentFixture<ModifiedIterationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModifiedIterationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifiedIterationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
