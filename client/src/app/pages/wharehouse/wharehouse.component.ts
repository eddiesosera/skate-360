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

  locationList: LocationModel[] = [

  ]

  // to get all the location data
  ngOnInit() {
    this.service.getAllLocations().subscribe((data) => {
      console.log(data);
      this.locationList = data
    })
  }

  // create function to get all the types of skateboards
  // classic skatedboard function 
  // 1. get the boardtype date 
  // 2. filter through the names for all names with classic
  boardtype() {
    // 3. for loop to get the board type 
    for (let i=0; i <this.boardtype.length; i++){
      
    }
  }

}