import { Component, Input, OnInit } from '@angular/core';
import { DropdownComponent } from '../../../components/inputs/dropdown/dropdown.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../components/inputs/button/button.component';
import { NewStockService } from '../../../services/page/wharehouse/new-stock.service';

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
      id: 5,
      label: 'White',
      action: () => { alert(''); this.resourceVariant = 'White' }
    },
    {
      id: 6,
      label: 'Yellow',
      action: () => { alert(''); this.resourceVariant = 'Yellow' }
    },
    {
      id: 7,
      label: 'Red',
      action: () => { alert(''); this.resourceVariant = 'Red' }
    },
    {
      id: 8,
      label: 'Black',
      action: () => { alert(''); this.resourceVariant = 'Black' }
    }
  ];

  constructor(private newStockService: NewStockService) { }

  ngOnInit(): void {
    this.newStockService.isVisible.subscribe((state) => this.isVisisble = state)
  }

  toggleClose() {
    this.newStockService.toggleVisibility(false)
  }
}
