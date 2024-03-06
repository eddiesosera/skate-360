import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gridlayout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gridlayout.component.html',
  styleUrl: './gridlayout.component.css'
})
export class GridlayoutComponent {
  @Input() gap: number = 0

}
