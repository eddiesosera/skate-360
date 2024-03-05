import { Component, Input, OnInit } from '@angular/core';
import { CardOptionsComponent } from './card-options/card-options.component';
import { ProductDataService } from '../../../services/component/product-data.service';
import { ProductData } from '../../../models/components/data-display/product-data.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CardOptionsComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit {

  // The following link is a reference to state management:
  // https://hackernoon.com/angular-state-management-a-comparison-of-the-different-options-available

  skateboard?: ProductData = {
    id: 0,
    type: 'Classic',
    craftedBy: '',
    price: 0,
    location: ''
  }

  constructor(private data: ProductDataService) { };

  ngOnInit(): void {
    this.skateboard = this.data.getData()
  }

}
