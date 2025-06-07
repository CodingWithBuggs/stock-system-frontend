import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductyTypeModel as ProductTypeModel } from './models/productyType.model';
import { ProductTypeService } from './services/productType.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected title = 'Frontend';
  private productTypeService = inject(ProductTypeService);
  public productTypes = signal<ProductTypeModel[]>([]);

  ngOnInit(): void {
    this.productTypeService.getAll().subscribe((res) => {
      console.log('products', res);
      this.productTypes.set(res);
    });
  }
}
