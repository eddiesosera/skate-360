import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/navigation/sidebar/sidebar.component';
import { SearchBarComponent } from '../../components/inputs/search-bar/search-bar.component';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [SidebarComponent, SearchBarComponent],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {

}
