import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
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
export class ProductCardComponent implements AfterViewInit, OnInit {

  // The following link is a reference to state management:
  // https://hackernoon.com/angular-state-management-a-comparison-of-the-different-options-available
  @Input() id: any
  @Input() name: any
  @Input() type: any
  @Input() craftedBy: any
  @Input() avatar: any
  @Input() price: any
  @Input() location: any
  imageDeck = '../../../../assets/img/decks/classic.png';
  cardWidth: any
  cardHeight: any

  constructor(private data: ProductDataService, private elementRef: ElementRef) { };

  ngOnInit(): void {
    this.trackChanges();
    // console.log("pre-Loaded board type: " + this.type)
    if (this.type === 'Classic') {
      this.imageDeck = '../../../../assets/img/decks/classic.png';
      // console.log("Loaded board type: " + this.type)
    } else if (this.type === 'Old School') {
      this.imageDeck = '../../../../assets/img/decks/oldschool.png';
    } else if (this.type === 'Long') {
      this.imageDeck = '../../../../assets/img/decks/long.png';
    }
  }

  ngAfterViewInit(): void {

  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.trackChanges(); // Call trackChanges whenever the window is resized
  }

  trackChanges(): void {
    const responsiveDiv = this.elementRef.nativeElement.querySelector('#product-card');
    this.cardWidth = responsiveDiv.offsetWidth;
    this.cardHeight = responsiveDiv.offsetHeight;
    console.log(`Width: ${this.cardWidth}px, Height: ${this.cardHeight}px`);
  }

}
