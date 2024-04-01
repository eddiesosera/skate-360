import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewStockService {

  private toggleDisplaySource = new BehaviorSubject<boolean>(false);
  isVisible = this.toggleDisplaySource.asObservable();

  toggleVisibility(state: boolean): void {
    this.toggleDisplaySource.next(state)
  }

}
