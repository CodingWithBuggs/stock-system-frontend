import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductyTypeModel } from '../models/productyType.model';

@Injectable({
  providedIn: 'root',
})
export class ProductTypeService {
  httpClient = inject(HttpClient);

  public getAll()  {
    return this.httpClient.get<ProductyTypeModel[]>('https://localhost:7163/api/ProductType');
  }
}
