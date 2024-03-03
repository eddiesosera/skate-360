import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import simpleParallax from 'simple-parallax-js';
import Atropos, { AtroposInstance, AtroposOptions } from 'atropos';
import { AtroposComponent, AtroposModule } from 'atropos-angular';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [AtroposModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements AfterViewInit {

  letterhead = '../../../../../assets/img/skateLetterFX2.png';
  skateboardImg = '../../../../../assets/img/skateboard.png'
  image1 = document.getElementsByClassName('home-hero-img-letterhead');
  image2 = document.getElementsByClassName('home-hero-img-letterhead-blur');
  myAtropos: AtroposInstance;

  constructor() {
    this.myAtropos = Atropos({
      el: '.home-hero',
      activeOffset: 40,
      shadowScale: 1.05,
      onEnter() {
        console.log('Enter');
      },
      onLeave() {
        console.log('Leave');
      },
      onRotate(x, y) {
        console.log('Rotate', x, y);
      }
    });
  };

  ngAfterViewInit(): void {
    new simpleParallax(this.image1, {
      orientation: 'right'
    });
    new simpleParallax(this.image2, {
      orientation: 'right',
      delay: .6,
      transition: 'cubic-bezier(0,0,0,1)'
    });
  }

}
