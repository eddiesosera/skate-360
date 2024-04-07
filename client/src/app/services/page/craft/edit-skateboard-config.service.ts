import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../../models/functions/data/user.model';

@Injectable({
  providedIn: 'root'
})
export class EditSkateboardConfigService implements OnInit {
  private loggedInUser!: User | any;

  constructor() {
    let localStorageUser: any = localStorage.getItem('loggedInUser')
    let userParsed = JSON.parse(localStorageUser).user;
    this.loggedInUser = JSON.parse(userParsed)
  }

  private skateboardFormSource = new BehaviorSubject<any>(
    {
      userId: this.loggedInUser?.id,
      locationId: this.loggedInUser?.location?.id,
      stockNeeded: 1,
      avatar: '',
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
  private skateboardQuantitySource = new BehaviorSubject<number>(1);
  skateboardQuantity = this.skateboardQuantitySource.asObservable();

  ngOnInit(): void {

  }

  setSkateboardForm(prop: any) {
    // Parsing user from local storage
    let userParsed = JSON.parse(localStorage.getItem('loggedInUser') || '').user;
    this.loggedInUser = JSON.parse(userParsed);

    // Assigning user to form
    prop.userId = this.loggedInUser?.id;
    prop.locationId = this.loggedInUser?.location?.id;

    // Updating form
    this.skateboardFormSource.next(prop);
    console.log(prop)
  }

  setSkateboardQuantity(qty: number) {
    this.skateboardQuantitySource.next(qty)
  }

}
