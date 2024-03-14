import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarComponent } from '../../components/navigation/sidebar/sidebar.component';
import { ButtonComponent } from '../../components/inputs/button/button.component';

@Component({
  selector: 'app-skateboards',
  standalone: true,
  imports: [RouterLink, SidebarComponent, ButtonComponent],
  templateUrl: './skateboards.component.html',
  styleUrl: './skateboards.component.css'
})
export class SkateboardsComponent {
  filter = [
    {
      id: 'type',
      name: 'Type',
      options: [
        'classic', 'long board', 'old school'
      ]
    },
    {
      id: 'popularity',
      name: 'Popularity',
      options: [
        'least', 'most'
      ]
    },
    {
      id: 'craftedBy',
      name: 'Crafted By',
      options: [
        // List of employees
        'eddie', 'ungerer', 'abraham'
      ]
    }
  ]

}
