import { Component, OnInit } from '@angular/core';
import { ToolOptionCardComponent } from './component/tool-option-card/tool-option-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tool-option',
  standalone: true,
  imports: [CommonModule, ToolOptionCardComponent],
  templateUrl: './tool-option.component.html',
  styleUrl: './tool-option.component.css'
})
export class ToolOptionComponent implements OnInit {
  componentType: string = 'Wheel';
  selectedComponent = 'none';
  selectedIndex = 0;
  inventoryList = [
    {
      type: 'wheels',
      inventory: [
        {
          id: 0,
          title: 'Default',
          type: 'Standard',
          image: '../../../../../assets/img/inventory/wheels/default.webp',
          quantity: 20
        },
        {
          id: 1,
          title: 'Fuego',
          type: 'Deluxe',
          image: '../../../../../assets/img/inventory/wheels/fuego.png',
          quantity: 20
        },
        {
          id: 2,
          title: 'Red Charger',
          type: 'Deluxe',
          image: '../../../../../assets/img/inventory/wheels/red_charger.png',
          quantity: 20
        }
      ]
    },
    {
      type: 'boards',
      inventory: [
        {
          id: 0,
          type: 'Classic',
          image: '../../../../../assets/img/inventory/boards/classic_boards.jpeg',
          quantity: 20
        },
        {
          id: 1,
          type: 'Old School',
          image: '../../../../../assets/img/inventory/boards/oldschool_board.webp',
          quantity: 20
        },
        {
          id: 2,
          type: 'Longboard',
          image: '../../../../../assets/img/inventory/boards/longboard.jpg',
          quantity: 20
        }
      ]
    },
    {
      type: 'trucks',
      inventory: [
        {
          id: 0,
          type: 'Classic',
          image: '../../../../../assets/img/inventory/truck.png',
          quantity: 20
        },
      ]
    },
    {
      type: 'bearings',
      inventory: [
        {
          id: 0,
          type: 'Classic',
          image: '../../../../../assets/img/inventory/bearing.webp',
          quantity: 20
        },
      ]
    }
  ];

  selectedList = this.inventoryList[this.selectedIndex].inventory

  ngOnInit(): void {
    this.selectedList = this.inventoryList[this.selectedIndex].inventory;

    console.log(this.selectedList)
  }

  setMargin(index: any): string {
    return `${index} * 20 px`
  }

}
