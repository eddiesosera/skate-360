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
  styleUrl: './locations.component.css'
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
      skateboards: []
    }
  ];

  constructor(private locationsData: LocationService) { }

  ngOnInit(): void {
    this.locationsData.getAllLocations().subscribe((newLocations: LocationModel[]) => {
      console.log(newLocations);
      this.locations = newLocations
    })
  }
}
