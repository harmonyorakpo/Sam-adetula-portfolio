import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductKeyFeaturesComponent } from './product-key-features.component';

describe('ProductKeyFeaturesComponent', () => {
  let component: ProductKeyFeaturesComponent;
  let fixture: ComponentFixture<ProductKeyFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductKeyFeaturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductKeyFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
