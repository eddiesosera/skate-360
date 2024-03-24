import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleQuizService {

  private toggleSource = new BehaviorSubject<boolean>(false);
  private userResultSource = new BehaviorSubject<'true' | 'false' | 'null'>('null');
  currentToggleState = this.toggleSource.asObservable();
  userResult = this.userResultSource.asObservable();

  changeToggleState(state: boolean) {
    this.toggleSource.next(state)
  }

  assignUserResult(result: 'true' | 'false' | 'null') {
    this.userResultSource.next(result)
  }

}
