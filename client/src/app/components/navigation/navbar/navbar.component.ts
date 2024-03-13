import { AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnInit } from '@angular/core';
import { SearchBarComponent } from '../../inputs/search-bar/search-bar.component';
import { NavItem } from '../../../models/components/navigation/navbar.models';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';
import tippy, { Instance, roundArrow } from 'tippy.js';
import 'tippy.js/dist/tippy.css';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, SearchBarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements OnInit {
  @Input() currentPage: string = '';
  @Input() position = 'fixed'
  tooltipText: string = '';
  isTooltipVisible: boolean = false;
  navItems: NavItem[] = [
    {
      link: 'craft',
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
    },
    {
      link: 'account',
      icon: 'ri-user-3-line',
      title: 'Account',
    },
  ];
  navItemHovered: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.getPage();
    });
  }

  getPage(): void {
    this.currentPage = this.activatedRoute.snapshot.firstChild?.routeConfig?.path || '';
  }

  showTooltip(value: string, navbarItem: string) {
    tippy(`#${navbarItem}`, {
      content: value,
      theme: 'dark360',
      // arrow: roundArrow
    });
  }


}
