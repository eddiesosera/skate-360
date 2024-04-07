import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { SelectedItemComponent } from '../selected-item/selected-item.component';
import { ThreeObjectComponent } from '../../../../components/craft/three-object/three-object.component';
import { UserService } from '../../../../services/data/user.service';
import { User } from '../../../../models/functions/data/user.model';
import { ToolOptionService } from '../../../../services/page/craft/tool-option.service';
import { ToolOptionCardComponent } from '../tool-option/component/tool-option-card/tool-option-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [CommonModule, ThreeObjectComponent, ToolOptionCardComponent, SelectedItemComponent],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent implements OnInit {
  loggedInUser?: User;
  updatedData: any[] = [];
  constructor(private userData: UserService, private dragDropService: ToolOptionService) {
  };

  ngOnInit(): void {
    let userParsed = JSON.parse(localStorage.getItem('loggedInUser')!)
    this.loggedInUser = JSON.parse(userParsed.user)
    console.log(this.loggedInUser);

    this.dragDropService.itemDropped.subscribe(() => {
      // Handle the item dropped event here
      console.log('Item dropped in second component');
      console.log(this.updatedData)
      // Update your component's data or perform any necessary action
    });
  }

  drop(event: CdkDragDrop<string[]> | any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.updatedData, event.previousIndex, event.currentIndex);
    } else {
      const droppedItem = event.previousContainer.data[event.previousIndex];
      this.updatedData.splice(event.currentIndex, 0, droppedItem);
    }
  }
}
