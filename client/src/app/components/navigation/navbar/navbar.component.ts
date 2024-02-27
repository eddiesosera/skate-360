import { AfterViewChecked, Component, DoCheck, Input, OnInit } from '@angular/core';
import { SearchBarComponent } from '../../inputs/search-bar/search-bar.component';
import { NavItem } from '../../../models/components/navigation/navbar.models';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';
import { computePosition } from '@floating-ui/dom';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, SearchBarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements OnInit {
  @Input() currentPage: string = ''
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
    console.log(this.currentPage);
  }

}
