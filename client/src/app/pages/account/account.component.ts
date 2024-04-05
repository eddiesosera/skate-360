import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SidebarComponent } from '../../components/navigation/sidebar/sidebar.component';
import { UserService } from '../../services/data/user.service';
import { finalize, tap } from 'rxjs';
import { User } from '../../models/functions/data/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [RouterLink, SidebarComponent, CommonModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

  username: any

  constructor(private userData: UserService, router: Router) {
    this.userData.getAllUsers().subscribe((success: User[]) => {
      console.log(success)
    })
  };

  // ! tried this
  // ngOnInit() {
  //   // console.log(this.)
  //   this.username = this.userData.getAllUsers.name
  // }

  // ! other method
  ngOnInit(): void {
    this.userData.getAllUsers().subscribe((success: User[]) => {

      this.username = this.userData.getAllUsers.name;
      console.log(success)
      // if (this.username.name > 0) {
      //   this.userData = this.username[0].name; // to extract the name parameter
      // }
    })
    console.log(this.username)
  }

  // filter for the name of the user
  filterSuccessForName(successId: number, userData: any) {
    const filterNames: any[] = [];
    for (const name of userData.name) {
      if (userData.name === successId) {
        filterNames.push(name);
      }
    }
    console.log(this.username.name) // ! this wont even consol log 
  }

  // users: any


}
