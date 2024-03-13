import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarComponent } from '../../components/navigation/sidebar/sidebar.component';

@Component({
  selector: 'app-skateboards',
  standalone: true,
  imports: [RouterLink, SidebarComponent],
  templateUrl: './skateboards.component.html',
  styleUrl: './skateboards.component.css'
})
export class SkateboardsComponent {

}
