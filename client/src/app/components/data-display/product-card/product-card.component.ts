import { Component, Input, OnInit } from '@angular/core';
import { CardOptionsComponent } from './card-options/card-options.component';
import { ProductDataService } from '../../../services/component/product-data.service';
import { ProductData } from '../../../models/components/data-display/product-data.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, CardOptionsComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit {

  // The following link is a reference to state management:
  // https://hackernoon.com/angular-state-management-a-comparison-of-the-different-options-available
  @Input() id: any
  @Input() type: any
  @Input() craftedBy: any
  @Input() avatar: any
  @Input() price: any
  @Input() location: any
  @Input() skateboard?: ProductData = {
    id: 0,
    type: '',
    craftedBy: '',
    avatar: '',
    price: 0,
    location: ''
  }

  constructor(private data: ProductDataService) { };

  ngOnInit(): void {
    // this.skateboard = this.data.getData()
  }

}
