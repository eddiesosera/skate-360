import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleQuizService {

  private toggleSource = new BehaviorSubject<boolean>(false)
  currentToggleState = this.toggleSource.asObservable();

  changeToggleState(state: boolean) {
    this.toggleSource.next(state)
  }

}
