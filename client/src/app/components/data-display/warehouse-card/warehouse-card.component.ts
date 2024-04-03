import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import { WarehouseData } from '../../../models/warehouse-data.model';
import { NewStockService } from '../../../services/page/wharehouse/new-stock.service';
import { LocationModel } from '../../../models/functions/data/location.model';
import { LocationService } from '../../../services/data/location.service';

@Component({
  selector: 'app-warehouse-card',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './warehouse-card.component.html',
  styleUrl: './warehouse-card.component.css'
})
export class WarehouseCardComponent {

  // inputting data like a usestate
  @Input() id: any
  @Input() location: any
  @Input() boards: any
  @Input() wheels: any
  @Input() trucks: any

  constructor(private newStockService: NewStockService) { }
  // constructor(private data: WarehouseData, private elementRef: ElementRef) { }


  // dummy data 
  warehousecardData: WarehouseData[] = [
    // {
    //   id: 1,
    //   location: "pretoria",
    //   boards: 3,
    //   wheels: 4,
    //   trucks: 6
    // },
    // {
    //   id: 2,
    //   location: "capetown",
    //   boards: 3,
    //   wheels: 4,
    //   trucks: 6
    // },
    // {
    //   id: 3,
    //   location: "Johannesburg",
    //   boards: 3,
    //   wheels: 4,
    //   trucks: 6
    // },
  ]

  // ngOnInit() { }

  // @Input() item: LocationModel = {
  //   id: 1,
  //   name: "item.name",
  //   street: "example",
  //   city: "example",
  //   description: "example",
  //   stockAmount: 2,
  //   avatar: "example",
  //   users: [],
  //   skateboards: [],
  // }


  openStockForm() {
    this.newStockService.toggleVisibility(true)
  }
}
