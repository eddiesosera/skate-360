import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarComponent } from '../../components/navigation/sidebar/sidebar.component';
import { ButtonComponent } from '../../components/inputs/button/button.component';
import { DropdownComponent } from '../../components/inputs/dropdown/dropdown.component';
import { SearchBarComponent } from '../../components/inputs/search-bar/search-bar.component';
import { GridlayoutComponent } from '../../components/data-display/gridlayout/gridlayout.component';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../components/data-display/product-card/product-card.component';
import { dummdata } from '../home/sections/our-collection/dummy data';
import { SkateboardService } from '../../services/data/skateboard.service';

@Component({
  selector: 'app-skateboards',
  standalone: true,
  imports: [RouterLink, CommonModule, ProductCardComponent, SidebarComponent, GridlayoutComponent, ButtonComponent, DropdownComponent, SearchBarComponent,],
  templateUrl: './skateboards.component.html',
  styleUrl: './skateboards.component.css'
})
export class SkateboardsComponent implements OnInit {

  skateboardCollection: any = []
  pages = this.skateboardCollection.length

  @Input() label1: string = 'Type';
  @Input() label2: string = 'Popularity';
  @Input() label3: string = 'Created By';
  @Input() label4: string = 'Date';
  @Input() label5: string = 'Price';

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
  filterOptions4 = [
    {
      id: 0,
      label: 'Latest',
      action: () => { alert(''); this.label1 = 'Classic' }
    },
    {
      id: 1,
      label: 'Oldest',
      action: () => { alert(''); this.label1 = 'Old School' }
    },
  ];
  filterOptions5 = [
    {
      id: 0,
      label: 'High',
      action: () => { alert(''); this.label1 = 'Classic' }
    },
    {
      id: 1,
      label: 'Low',
      action: () => { alert(''); this.label1 = 'Old School' }
    },
  ];

  constructor(private skateboardData: SkateboardService) { }

  ngOnInit(): void {
    this.skateboardData.getAllSkateboards().subscribe((skateboards) => {
      this.skateboardCollection = skateboards;
      console.log(skateboards)
    }
    )
  }


}
