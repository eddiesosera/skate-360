import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../../models/functions/data/user.model';

@Injectable({
  providedIn: 'root'
})
export class EditSkateboardConfigService {
  loggedInUser!: User;

  constructor() {
    let userParsed = JSON.parse(localStorage.getItem('loggedInUser')!)
    this.loggedInUser = JSON.parse(userParsed.user)
  }



  private skateboardFormSource = new BehaviorSubject<any>(
    {
      userId: this.loggedInUser.id,
      locationId: this.loggedInUser.location.id,
      stockNeeded: 1,
      configuration: {
        board_type: 1,
        board_skin: 1,
        trucks: 1,
        wheels: 1,
        bearings: 1
      }
    }
  );
  skateboardForm = this.skateboardFormSource.asObservable();

  setSkateboardForm(prop: any) {
    this.skateboardFormSource.next(prop)
  }

}
