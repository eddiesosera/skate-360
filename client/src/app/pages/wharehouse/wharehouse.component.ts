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
  imports: [CommonModule, RouterLink, SearchBarComponent, SidebarComponent, WarehouseCardComponent, NewStockComponent],
  templateUrl: './wharehouse.component.html',
  styleUrl: './wharehouse.component.css'
})
export class WharehouseComponent {

  // @Input() location: string = 'location'

  constructor(private service: LocationService) { }

  // the arrays
  locationList?: any
  classicboardsLength: any
  longboardsLength: any
  oldschoolboardsLength: any

  // to get all the location data
  ngOnInit() {
    // the "any" was LocationModel but it is acting weird
    this.service.getAllLocations().subscribe((data: any) => {
      console.log(data);
      console.log(this.filterSkateboardsByBoardType("ramsy", data).length)
      this.classicboardsLength = this.filterSkateboardsByBoardType("ramsy", data).length // for the classic board length
      console.log(this.filterSkateboardsByBoardType("Long", data).length)
      this.longboardsLength = this.filterSkateboardsByBoardType("Long", data).length // fot the long board length
      console.log(this.filterSkateboardsByBoardType("Oldschool", data).length)
      this.oldschoolboardsLength = this.filterSkateboardsByBoardType("Oldschool",data).length // for the oldschool length
      this.locationList = data
      // this.findItemByType(data[0].skateboards[0].boardtype)
    })
  }

  // create function to get all the types of skateboards
  // classic skatedboard function 
  // 1. get the boardtype date 
  // 2. filter through the names for all names with classic

  // let boardtype = 
  // boardtype() {
  //   // 3. for loop to get the board type 
  //   for (let i = 0; i < this.boardtype.length; i++) {
  //     console.log(this.boardtype)
  //   }
  // }

  // * this is a function that is looping through the skateboards and then filtering out the boardtype name and then provides the boardtype name data
  // The filterSkateboardsByBoardType function takes a boardTypeName parameter and returns an array of skateboards that match the specified board type.
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



}