import { Component, OnInit } from '@angular/core';
import { SelectedItemComponent } from '../selected-item/selected-item.component';
import { ThreeObjectComponent } from '../../../../components/craft/three-object/three-object.component';
import { UserService } from '../../../../services/data/user.service';
import { User } from '../../../../models/functions/data/user.model';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [ThreeObjectComponent, SelectedItemComponent],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent implements OnInit {
  loggedInUser?: User;
  constructor(private userData: UserService) {
  };

  ngOnInit(): void {
    let userParsed = JSON.parse(localStorage.getItem('loggedInUser')!)
    this.loggedInUser = JSON.parse(userParsed.user)
    console.log(this.loggedInUser)
  }

}
