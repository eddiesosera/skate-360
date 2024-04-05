import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedItemService {

  private selectedItemSource = new BehaviorSubject<any>(null);
  selectedItem = this.selectedItemSource.asObservable();

  changeSelectedItem(component: any) {
    if (component.name === "truck_1") {
      component.name = "truck"
      this.selectedItemSource.next(component)
    } else {
      this.selectedItemSource.next(component)
    }

    console.log("Item Selected: " + component)
  }
}
