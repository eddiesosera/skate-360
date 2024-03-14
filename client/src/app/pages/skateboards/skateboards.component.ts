import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarComponent } from '../../components/navigation/sidebar/sidebar.component';
import { ButtonComponent } from '../../components/inputs/button/button.component';
import { DropdownComponent } from '../../components/inputs/dropdown/dropdown.component';

@Component({
  selector: 'app-skateboards',
  standalone: true,
  imports: [RouterLink, SidebarComponent, ButtonComponent, DropdownComponent],
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
  ];
  @Input() label1: string = 'Type';
  @Input() label2: string = 'Popularity';
  @Input() label3: string = 'Created By';
  filterOptions1 = [{
    id: 0,
    label: 'Classic',
    action: () => { alert(''); this.label1 = 'Classic' }
  },
  {
    id: 1,
    label: 'Old School',
    action: () => { alert(''); this.label1 = 'Old School' }
  },
  {
    id: 2,
    label: 'Long Board',
    action: () => { alert(''); this.label1 = 'Long Board' }
  }];

  filterOptions2 = [
    {
      id: 0,
      label: 'Least',
      action: () => { alert(''); this.label1 = 'Classic' }
    },
    {
      id: 1,
      label: 'Most',
      action: () => { alert(''); this.label1 = 'Old School' }
    },
  ];

  filterOptions3 = [
    {
      id: 0,
      label: 'Eddie',
      action: () => { alert(''); this.label1 = 'Classic' }
    },
    {
      id: 1,
      label: 'Ungerer',
      action: () => { alert(''); this.label1 = 'Old School' }
    },
  ]


}
