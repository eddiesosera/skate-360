import { CommonModule, } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { CardOptionsComponent } from '../product-card/card-options/card-options.component';


@Component({
  selector: 'app-inventory-card',
  standalone: true,
  imports: [CommonModule, CardOptionsComponent],
  templateUrl: './inventory-card.component.html',
  styleUrl: './inventory-card.component.css'
})
export class InventoryCardComponent {


  @Input() id: any
  @Input() name: any
  @Input() color: any
  @Input() brand: any
  @Input() price: any
  imageDeck = '../../../../assets/img/decks/classic.png'
  cardWidth: any
}
