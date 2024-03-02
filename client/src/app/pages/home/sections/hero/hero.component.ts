import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  letterhead = '../../../../../assets/img/skateLetterFX2.png';
  skateboardImg = '../../../../../assets/img/skateboard.png'

}
