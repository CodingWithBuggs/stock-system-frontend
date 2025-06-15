import { Component, OnInit, inject, signal } from "@angular/core";
import { ProductTypeGridComponent } from "../../components/product-type-grid/product-type-grid.component";
import { HeaderComponent } from "../../components/shared/header/header.component";
import { SidebarComponent } from "../../components/shared/sidebar/sidebar.component";
import { ProductyTypeModel } from "../../models/productyType.model";
import { ProductTypeService } from "../../services/productType.service";


@Component({
  selector: 'dashboard-page',
  imports: [SidebarComponent, HeaderComponent, ProductTypeGridComponent],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
  providers: [SidebarComponent, HeaderComponent]
})
export class DashboardPage implements OnInit {

  private productTypeService = inject(ProductTypeService);
  public productTypes = signal<ProductyTypeModel[]>([]);

  ngOnInit(): void {
    this.productTypeService.getAll().subscribe((data) => {
      console.log("productTypes", data);
      this.productTypes.set(data);
    })
  }
}
