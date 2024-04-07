import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ToolOptionCardComponent } from './component/tool-option-card/tool-option-card.component';
import { CommonModule } from '@angular/common';
import { SelectedItemService } from '../../../../services/page/craft/selected-item.service';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ToolOptionService } from '../../../../services/page/craft/tool-option.service';
import { EditSkateboardConfigService } from '../../../../services/page/craft/edit-skateboard-config.service';

@Component({
  selector: 'app-tool-option',
  standalone: true,
  imports: [CommonModule, ToolOptionCardComponent, CdkDropListGroup, CdkDropList, CdkDrag],
  templateUrl: './tool-option.component.html',
  styleUrl: './tool-option.component.css'
})
export class ToolOptionComponent implements AfterViewInit, OnInit {
  componentType: string = 'Item';
  selectedComponent = 'none';
  selectedIndex = 0;
  skateboardForm: any;
  inventoryList = [
    {
      type: 'wheels',
      inventory: [
        {
          id: 0,
          name: 'White Flamigo Wheel',
          avatar: 'white',
          quantity: 200
        },
        {
          id: 1,
          name: 'Yellow Fuego Wheel',
          avatar: 'yellow',
          quantity: 200
        },
        {
          id: 2,
          name: 'Red Charger Wheel',
          avatar: 'red',
          quantity: 200
        },
        {
          id: 3,
          name: 'Black Cat Wheel',
          avatar: 'black',
          quantity: 200
        }
      ]
    },
    {
      type: 'board',
      inventory: [
        {
          id: 0,
          name: 'White Flamigo Board',
          avatar: 'white',
          quantity: 200
        },
        {
          id: 1,
          name: 'Yellow Fuego Board',
          avatar: 'yellow',
          quantity: 200
        },
        {
          id: 2,
          name: 'Red Charger Board',
          image: 'red',
          avatar: 200
        },
        {
          id: 3,
          name: 'Black Cat Board',
          avatar: 'black',
          quantity: 200
        }
      ]
    },
    {
      type: 'truck',
      inventory: [
        {
          id: 0,
          name: 'White Truck',
          avatar: 'white',
          quantity: 200
        },
        {
          id: 1,
          name: 'Yellow Truck',
          avatar: 'yellow',
          quantity: 200
        },
        {
          id: 2,
          name: 'Red Truck',
          image: 'red',
          avatar: 200
        },
        {
          id: 3,
          name: 'Black Truck',
          avatar: 'black',
          quantity: 200
        }
      ]
    },
    {
      type: 'bearings',
      inventory: [
        {
          id: 0,
          name: 'White Bearing',
          avatar: 'white',
          quantity: 200
        },
        {
          id: 1,
          name: 'Yellow Bearing',
          avatar: 'yellow',
          quantity: 200
        },
        {
          id: 2,
          name: 'Red Bearing',
          image: 'red',
          avatar: 200
        },
        {
          id: 3,
          name: 'Black Bearing',
          avatar: 'black',
          quantity: 200
        }
      ]
    }
  ];
  selectedList = this.inventoryList[this.selectedIndex];

  constructor(private selectedItem: SelectedItemService, private dragDropService: ToolOptionService, private formConfig: EditSkateboardConfigService) {
    this.selectedItem.selectedItem.subscribe(item => {
      if (item?.name) {
        this.componentType = item?.name;
      } else {
        this.componentType = 'Item'
      }
    })
  }

  ngOnInit(): void {
    this.selectedList = this.inventoryList[this.selectedIndex];
    console.log(this.selectedList);
    this.formConfig.skateboardForm.subscribe(form => this.skateboardForm = form)
    this.formConfig.setSkateboardForm(this.skateboardForm)
  }

  ngAfterViewInit(): void {
    this.selectedList = this.inventoryList[this.selectedIndex];
  }

  setMargin(index: any): string {
    return `${index} * 20 px`
  }

  drop(event: CdkDragDrop<string[]> | any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    this.dragDropService.emitItemDropped(); // Emit event when item is dropped
  }

  onDragEnded(event: CdkDragDrop<string[]> | any, item: any) {
    console.log('Drag ended:', item);
  }

}
