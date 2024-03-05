import { Component } from '@angular/core';
import { TooltipComponent } from '../../feedback/tooltip/tooltip.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavItem } from '../../../models/components/navigation/navbar.models';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, TooltipComponent, RouterLink, RouterLinkActive,],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent{

  navItems: NavItem[] =[
    {
      link: 'craft',
      icon: 'ri-tools-fill',
      title:'Craft'
    },
    {
      link: 'skateboards',
      icon:'ri-box-2-line',
      title:'Skateboards'
    },
    {
      link: 'wharehouse',
      icon:'ri-building-2-line',
      title:'Wharehouse'
    },
    {
      link: 'account',
      icon: 'ri-user-3-line',
      title: 'Account',
    },
  ];
}
