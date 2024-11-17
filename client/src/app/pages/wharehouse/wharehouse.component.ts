import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchBarComponent } from '../../components/inputs/search-bar/search-bar.component';
import { SidebarComponent } from '../../components/navigation/sidebar/sidebar.component';
import { WarehouseCardComponent } from '../../components/data-display/warehouse-card/warehouse-card.component';
import { NewStockComponent } from './new-stock/new-stock.component';
import { LocationService } from '../../services/data/location.service';
import { LocationModel } from '../../models/functions/data/location.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wharehouse',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    SearchBarComponent,
    SidebarComponent,
    WarehouseCardComponent,
    NewStockComponent,
  ],
  templateUrl: './wharehouse.component.html',
  styleUrl: './wharehouse.component.css',
})
export class WharehouseComponent {
  constructor(private service: LocationService) {}

  locationList?: any;
  classicboardsLength: any;
  longboardsLength: any;
  oldschoolboardsLength: any;
  wheelsLength: any;
  trucksLength: any;

  // To get all the location data
  ngOnInit() {
    // the "any" was LocationModel but it is acting weird
    this.service.getAllLocations().subscribe((data: any) => {
      console.log(data);
      console.log(this.filterSkateboardsByBoardType('ramsy', data).length);
      this.classicboardsLength = this.filterSkateboardsByBoardType(
        'ramsy',
        data
      ).length; // for the classic board length
      console.log(this.filterSkateboardsByBoardType('Long', data).length);
      this.longboardsLength = this.filterSkateboardsByBoardType(
        'Long',
        data
      ).length; // for the long board length
      console.log(this.filterSkateboardsByBoardType('Oldschool', data).length);
      this.oldschoolboardsLength = this.filterSkateboardsByBoardType(
        'Oldschool',
        data
      ).length; // for the oldschool length
      this.locationList = data;
      this.wheelsLength = this.filterLocationForWheels.length;
      this.trucksLength = this.filterLocationForTrucks.length;
    });
  }

  filterSkateboardsByBoardType(boardTypeName: string, locations: any): any[] {
    const filteredSkateboards: any[] = [];

    for (const location of locations) {
      for (const skateboard of location.skateboards) {
        if (skateboard.configuration.board_type.name === boardTypeName) {
          filteredSkateboards.push(skateboard);
        }
      }
    }

    return filteredSkateboards;
  }

  // Finds the number of wheels using the same logic from above
  filterLocationForWheels(WheelsId: number, location: any) {
    const filterWheels: any[] = [];
    for (const wheel of location.wheels) {
      for (const wheel of location.wheels) {
        if (location.wheels === WheelsId) {
          filterWheels.push(wheel);
        }
      }
      console.log(wheel);
    }
  }

  // Finds and loop through the trucks
  filterLocationForTrucks(TrucksId: number, location: any) {
    const filtertrucks: any[] = [];
    for (const truck of location.trucks) {
      if (location.trucks === TrucksId) {
        filtertrucks.push(truck);
      }
      console.log(truck);
    }
  }
}
