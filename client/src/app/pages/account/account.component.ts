import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarComponent } from '../../components/navigation/sidebar/sidebar.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [RouterLink, SidebarComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

}
