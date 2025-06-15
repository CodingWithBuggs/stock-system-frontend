import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTypeGridComponent } from './product-type-grid.component';

describe('ProductTypeGridComponent', () => {
  let component: ProductTypeGridComponent;
  let fixture: ComponentFixture<ProductTypeGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductTypeGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTypeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
