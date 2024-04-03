import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selected-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selected-item.component.html',
  styleUrl: './selected-item.component.css'
})
export class SelectedItemComponent {
  @Input() isSelectorActive = false;

  activateSelector() {
    this.isSelectorActive = !this.isSelectorActive
  }
}
