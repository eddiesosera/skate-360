import { Component } from '@angular/core';
import { CardOptionsComponent } from './card-options/card-options.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CardOptionsComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

}
