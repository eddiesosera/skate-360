import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../components/inputs/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-craft-skateboard',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './craft-skateboard.component.html',
  styleUrl: './craft-skateboard.component.css'
})
export class CraftSkateboardComponent {
  selectedItems = [
    {
      name: 'board',
      quantity: 1,
      price: 200
    },
    {
      name: 'trucks',
      quantity: 2,
      price: 500
    },
    {
      name: 'wheels',
      quantity: 4,
      price: 500
    },
    {
      name: 'bearings',
      quantity: 4,
      price: 500
    },
  ]
}
