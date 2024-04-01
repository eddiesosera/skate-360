import { Component, Input } from '@angular/core';
import { DropdownComponent } from '../../../components/inputs/dropdown/dropdown.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../components/inputs/button/button.component';

@Component({
  selector: 'app-new-stock',
  standalone: true,
  imports: [CommonModule, ButtonComponent, DropdownComponent],
  templateUrl: './new-stock.component.html',
  styleUrl: './new-stock.component.css'
})
export class NewStockComponent {
  @Input() resourceLabel: string = 'Resource Type';
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
}
