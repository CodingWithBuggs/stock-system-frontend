/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { ProductTypeService } from './productType.service';

describe('Service: ProductTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductTypeService]
    });
  });

  it('should ...', inject([ProductTypeService], (service: ProductTypeService) => {
    expect(service).toBeTruthy();
  }));
});
