import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ButtonComponent } from '../../../../components/inputs/button/button.component';

@Component({
  selector: 'app-craft-success',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './craft-success.component.html',
  styleUrl: './craft-success.component.css'
})
export class CraftSuccessComponent {
  @Input() isVisible = false;

  constructor(private router: Router) { }
  goToSkateboards(page: string) {
    this.router.navigate(['/' + page]);
    if (page === 'craft/new') {
      this.isVisible = false
    }
  }
}
