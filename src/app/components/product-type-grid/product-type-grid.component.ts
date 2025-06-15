import { Component, input } from '@angular/core';
import { ProductyTypeModel } from '../../models/productyType.model';

@Component({
  selector: 'product-type-grid',
  imports: [],
  templateUrl: './product-type-grid.component.html',
  styleUrl: './product-type-grid.component.css'
})
export class ProductTypeGridComponent {
  productTypes = input<ProductyTypeModel[]>()
}
