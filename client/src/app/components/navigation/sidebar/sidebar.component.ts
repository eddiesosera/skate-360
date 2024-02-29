import { Component } from '@angular/core';
import { TooltipComponent } from '../../feedback/tooltip/tooltip.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [TooltipComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
