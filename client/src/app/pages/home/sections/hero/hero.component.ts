import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import simpleParallax from 'simple-parallax-js';
import VanillaTilt from 'vanilla-tilt';

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
  @ViewChild('heroElement') heroElement: ElementRef;


  constructor(private elementRef: ElementRef) {
    this.heroElement = elementRef.nativeElement;

  };

  ngAfterViewInit(): void {
    new simpleParallax(this.image1, {
      orientation: 'right',
    });
    new simpleParallax(this.image2, {
      orientation: 'right',
      delay: .6,
      transition: 'cubic-bezier(0,0,0,1)'
    });

    VanillaTilt.init(this.heroElement.nativeElement, {
      max: 50,
      speed: 400
    });
  }



}
