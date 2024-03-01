import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../components/inputs/button/button.component';
import { NewsletterComponent } from './sections/newsletter/newsletter.component';
import { OurCollectionComponent } from './sections/our-collection/our-collection.component';
import { LocationsComponent } from './sections/locations/locations.component';
import { HeroComponent } from './sections/hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    ButtonComponent,
    HeroComponent,
    NewsletterComponent,
    OurCollectionComponent,
    LocationsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
