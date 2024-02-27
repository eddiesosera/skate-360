import { AfterViewChecked, Component, DoCheck, Input, OnInit } from '@angular/core';
import { SearchBarComponent } from '../../inputs/search-bar/search-bar.component';
import { NavItem } from '../../../models/components/navigation/navbar.models';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';
import { computePosition } from '@floating-ui/dom';
import { TooltipComponent } from '../../feedback/tooltip/tooltip.component';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, SearchBarComponent, TooltipComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements OnInit, AfterViewChecked {
  @Input() currentPage: string = ''
  tooltipText: string = '';
  isTooltipVisible: boolean = false

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
    console.log(this.isTooltipVisible)
  }

  ngAfterViewChecked(): void {
    console.log(this.isTooltipVisible)
  }

  getPage(): void {
    this.currentPage = this.activatedRoute.snapshot.firstChild?.routeConfig?.path || '';
    console.log(this.currentPage);
  }

  showTooltip() {
    const targetElement = document.getElementById('navbar-item'); // Replace with your element id
    const tooltipElement = document.getElementById('tooltip'); // Replace with your tooltip component id

    computePosition(targetElement!, tooltipElement!)
      .then(({ x, y }) => {
        // this.tooltipText = 'Your tooltip content goes here'; // Set your desired content
        tooltipElement!.style.left = `${x}px`;
        tooltipElement!.style.top = `${y}px`;
        tooltipElement!.style.display = 'block'; // Make tooltip visible
      });
  }

}
