import { Injectable } from '@angular/core';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolOptionService {

  itemDropped = new Subject<void>();

  emitItemDropped() {
    this.itemDropped.next();
  }

}
