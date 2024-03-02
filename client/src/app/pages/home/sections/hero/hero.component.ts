import { AfterViewInit, Component } from '@angular/core';
import simpleParallax from 'simple-parallax-js';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements AfterViewInit {

  letterhead = '../../../../../assets/img/skateLetterFX2.png';
  skateboardImg = '../../../../../assets/img/skateboard.png'
  image1 = document.getElementsByClassName('home-hero-img-letterhead');
  image2 = document.getElementsByClassName('home-hero-img-letterhead-blur');


  ngAfterViewInit(): void {
    new simpleParallax(this.image1, {
      orientation: 'right'
    });
    new simpleParallax(this.image2, {
      orientation: 'right'
    });
  }

}
