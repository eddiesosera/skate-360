import { Component, Input, OnInit } from '@angular/core';
import { DropdownComponent } from '../../../components/inputs/dropdown/dropdown.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../components/inputs/button/button.component';
import { NewStockService } from '../../../services/page/wharehouse/new-stock.service';
import { WheelsService } from '../../../services/data/wheels.service';

@Component({
  selector: 'app-new-stock',
  standalone: true,
  imports: [CommonModule, ButtonComponent, DropdownComponent],
  templateUrl: './new-stock.component.html',
  styleUrl: './new-stock.component.css'
})
export class NewStockComponent implements OnInit {
  @Input() isVisisble = false;
  @Input() resourceLabel: string = 'Resource Type';
  @Input() resourceVariant: string = 'Variant';
  resourceTypes = [
    {
      id: 0,
      label: 'Board Type',
      action: () => { alert(''); this.resourceLabel = 'Board Type' }
    },
    {
      id: 1,
      label: 'Board Skin',
      action: () => { alert(''); this.resourceLabel = 'Board Skin' }
    },
    {
      id: 2,
      label: 'Trucks',
      action: () => { alert(''); this.resourceLabel = 'Truck' }
    },
    {
      id: 3,
      label: 'Wheels',
      action: () => { alert(''); this.resourceLabel = 'Wheels' }
    },
    {
      id: 4,
      label: 'Bearings',
      action: () => { alert(''); this.resourceLabel = 'Bearings' }
    }
  ];
  resourceTypeVariant = [
    {
      id: 0,
      label: 'White',
      action: () => { alert(''); this.resourceLabel = 'Board Type' }
    },
    {
      id: 1,
      label: 'Yellow',
      action: () => { alert(''); this.resourceLabel = 'Board Skin' }
    },
    {
      id: 2,
      label: 'Red',
      action: () => { alert(''); this.resourceLabel = 'Truck' }
    },
    {
      id: 3,
      label: 'Black',
      action: () => { alert(''); this.resourceLabel = 'Wheels' }
    }
  ];

  constructor(private newStockService: NewStockService, private wheelsService: WheelsService) { }

  ngOnInit(): void {
    this.newStockService.isVisible.subscribe((state) => this.isVisisble = state);
    this.wheelsService.getAllWheels().subscribe((wheels) => {
      console.log(wheels)
    })

  }

  toggleClose() {
    this.newStockService.toggleVisibility(false)
  }

  addStock() {
    this.wheelsService.getAllWheels().subscribe((wheels) => {
      console.log(wheels)

    })
    this.toggleClose()
  }
}
