import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WarehouseData } from '../../../models/warehouse-data.model';
@Component({
  selector: 'app-warehouse-card',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './warehouse-card.component.html',
  styleUrl: './warehouse-card.component.css'
})
export class WarehouseCardComponent {



  // dummy data 
  warehousecardData: WarehouseData[] = [
    {
      id: 1,
      location: "pretoria",
      boards: 3,
      wheels: 4,
      trucks: 6
    },
    {
      id: 2,
      location: "capetown",
      boards: 3,
      wheels: 4,
      trucks: 6
    },
    {
      id: 3,
      location: "Johannesburg",
      boards: 3,
      wheels: 4,
      trucks: 6
    },
  ]
}
