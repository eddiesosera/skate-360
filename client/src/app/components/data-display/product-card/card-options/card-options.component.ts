import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { ButtonComponent } from '../../../inputs/button/button.component';

@Component({
  selector: 'app-card-options',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './card-options.component.html',
  styleUrl: './card-options.component.css'
})
export class CardOptionsComponent implements AfterViewInit {
  isOptionVisible: boolean = false

  constructor() {

  }

  ngAfterViewInit(): void {

  }

  viewOptions() {
    this.isOptionVisible = !this.isOptionVisible
  }

}
