import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tool-option-card',
  standalone: true,
  imports: [],
  templateUrl: './tool-option-card.component.html',
  styleUrl: './tool-option-card.component.css'
})
export class ToolOptionCardComponent {
  @Input() url = ''
}
