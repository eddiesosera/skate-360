import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SelectedItemService } from '../../../../services/page/craft/selected-item.service';
import { ComponentType } from './componentTypes';
// import {ComponentType}  from './componentTypes';

@Component({
  selector: 'app-selected-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selected-item.component.html',
  styleUrl: './selected-item.component.css'
})
export class SelectedItemComponent {
  @Input() isSelectorActive = false;
  selected: any;
  skateboardType = 'oldschool';
  imgUrl = '';

  constructor(private selectedItem: SelectedItemService,) {
    this.selectedItem.selectedItem.subscribe(item => {
      this.selected = item
      // if (this.selected===ComponentType[0].name)
      for (let componentType of ComponentType) {
        if (this.selected.name == componentType.name || this.selected.name == componentType.id) {
          if (this.selected.name === "wheels") {
            this.imgUrl = '../../../../../assets/img/inventory/selected/wheel.png'
          } else if (this.selected.name === "truck") {
            this.imgUrl = '../../../../../assets/img/inventory/selected/truck.png'
          }
        } else if (this.selected.name == componentType.name || this.skateboardType == 'oldschool') {
          if (this.selected.name === "board") {
            this.imgUrl = '../../../../../assets/img/inventory/selected/oldschool_board_board.png'
          } else if (this.selected.name === "gripTape") {
            this.imgUrl = '../../../../../assets/img/inventory/selected/oldschool_board_gripTape.png'
          }

        }
      }
    })
  }

  activateSelector() {
    this.isSelectorActive = !this.isSelectorActive
    console.log(this.selected)
  }
}
