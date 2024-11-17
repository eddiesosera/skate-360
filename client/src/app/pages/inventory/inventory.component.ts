import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/navigation/sidebar/sidebar.component';
import { SearchBarComponent } from '../../components/inputs/search-bar/search-bar.component';
import { ProductCardComponent } from '../../components/data-display/product-card/product-card.component';
import { SkateboardService } from '../../services/data/skateboard.service';
import { LocationService } from '../../services/data/location.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GridlayoutComponent } from '../../components/data-display/gridlayout/gridlayout.component';
import { InventoryCardComponent } from '../../components/data-display/inventory-card/inventory-card.component';
import { NewStockService } from '../../services/page/wharehouse/new-stock.service';
import { NewStockComponent } from '../wharehouse/new-stock/new-stock.component';
import { TrucksService } from '../../services/data/trucks.service';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [
    SidebarComponent,
    SearchBarComponent,
    ProductCardComponent,
    CommonModule,
    GridlayoutComponent,
    InventoryCardComponent,
    NewStockComponent,
  ],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css',
})
export class InventoryComponent {
  skateboardCollection: any = [];
  pages = this.skateboardCollection.length;

  locationCollection: any = [];
  location = this.locationCollection.name;

  id: any;
  currentlocation: any;
  skateboards: any;
  Truck: any;

  // Location service
  constructor(
    private locationData: LocationService,
    private route: ActivatedRoute,
    private newStockService: NewStockService,
    private TruckService: TrucksService
  ) {}

  ngOnInit(): void {
    this.locationData.getAllLocations().subscribe((locations) => {
      this.locationCollection = locations;
      this.route.paramMap.subscribe((params) => {
        this.id = params.get('id'); // 'id' is the parameter name defined in the route.
      });

      for (let location of locations) {
        console.log(location);
        console.log(location.id);
        console.log(this.id);
        if (location.id == this.id) {
          this.currentlocation = location;
          this.skateboards = location.skateboards;
        }
      }
    });
  }

  openStockForm() {
    this.newStockService.toggleVisibility(true);
  }
}
