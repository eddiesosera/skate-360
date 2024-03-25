import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SidebarComponent } from '../../components/navigation/sidebar/sidebar.component';
import { UserService } from '../../services/data/user.service';
import { finalize, tap } from 'rxjs';
import { User } from '../../models/functions/data/user.model';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [RouterLink, SidebarComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

  constructor(private userData: UserService, router: Router) {
    this.userData.getAllUsers().subscribe((success: User[]) => {
      console.log(success)
    })
  };

}
