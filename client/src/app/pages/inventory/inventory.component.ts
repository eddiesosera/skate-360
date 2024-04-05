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

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [SidebarComponent, SearchBarComponent, ProductCardComponent, CommonModule, GridlayoutComponent, InventoryCardComponent],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {

  skateboardCollection: any = []
  pages = this.skateboardCollection.length

  locationCollection: any = []
  location = this.locationCollection.name

  id: any;
  currentlocation: any;
  skateboards:any

  // constructor(private skateboardData: SkateboardService) { }
  // location service 
  constructor(private locationData: LocationService, private route: ActivatedRoute) { }

  // ngOnInit(): void {
  //   this.skateboardData.getAllSkateboards().subscribe((skateboards) => {
  //     this.skateboardCollection = skateboards;
  //     console.log(skateboards)
  //   }
  //   )
  // }

  ngOnInit(): void {
    this.locationData.getAllLocations().subscribe((locations) => {
      this.locationCollection = locations;
      this.route.paramMap.subscribe(params => {
        // Assuming 'id' is the parameter name defined in your route
        this.id = params.get('id');
        console.log('ID:', this.id);
      });
      console.log(locations)
      for (let location of locations){
        console.log(location)
        console.log(location.id)
        console.log(this.id)
        if(location.id == this.id){
          console.log("you are on this location ",location)
          this.currentlocation=location
          this.skateboards=location.skateboards
          console.log(this.currentlocation.skateboards)
        }
      }

    })
  }
  // need a function that loopr throught the array of the locations and matches the id parameter with locations


}
