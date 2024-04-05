import { Component, Input, OnInit } from '@angular/core';
import { TooltipComponent } from '../../feedback/tooltip/tooltip.component';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavItem } from '../../../models/components/navigation/navbar.models';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, TooltipComponent, RouterLink, RouterLinkActive,],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  @Input() currentPage: string = '';
  navItems: NavItem[] = [
    {
      link: 'craft/new',
      icon: 'ri-tools-fill',
      title: 'Craft',
    },
    {
      link: 'skateboards',
      icon: 'ri-box-2-line',
      title: 'Skateboards',
    },
    {
      link: 'wharehouse',
      icon: 'ri-building-2-line',
      title: 'Wharehouse',
    }
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe((e) => {
      this.getPage(e);
    });
    this.currentPage = window.location.pathname.substring(1)
    // console.log(window.location.pathname.substring(1))
  }

  getPage(e: any): void {
    let url: string = e.url
    this.currentPage = url.substring(1)
    console.log(this.currentPage)
  }
}
