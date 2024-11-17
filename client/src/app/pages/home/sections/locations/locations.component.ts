import { Component, OnInit } from '@angular/core';
import { GridlayoutComponent } from '../../../../components/data-display/gridlayout/gridlayout.component';
import { WarehouseCardComponent } from '../../../../components/data-display/warehouse-card/warehouse-card.component';
import { LocationModel } from '../../../../models/functions/data/location.model';
import { User } from '../../../../models/functions/data/user.model';
import { CommonModule } from '@angular/common';
import { LocationService } from '../../../../services/data/location.service';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule, GridlayoutComponent, WarehouseCardComponent],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css',
})
export class LocationsComponent implements OnInit {
  locations: LocationModel[] = [
    {
      id: 0,
      name: '',
      street: '',
      city: 'string',
      description: 'string',
      stockAmount: 0,
      avatar: '',
      users: [],
      skateboards: [],
    },
  ];

  constructor(private service: LocationService) {}

  locationList?: any;
  classicboardsLength: any;
  longboardsLength: any;
  oldschoolboardsLength: any;
  wheelsLength: any;
  trucksLength: any;

  // Gets all the location data
  ngOnInit() {
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
