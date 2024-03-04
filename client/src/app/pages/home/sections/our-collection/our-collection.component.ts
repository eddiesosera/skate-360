import { AfterViewInit, Component } from '@angular/core';
import { ButtonComponent } from '../../../../components/inputs/button/button.component';
import { dummdata } from './dummy data';
import Masonry from 'masonry-layout';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../../../components/data-display/product-card/product-card.component';

@Component({
  selector: 'app-our-collection',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, ButtonComponent],
  templateUrl: './our-collection.component.html',
  styleUrl: './our-collection.component.css'
})
export class OurCollectionComponent implements AfterViewInit {
  skateboardCollection = dummdata
  masonry = new Masonry

  ngAfterViewInit(): void {
    var grid = document.querySelector('.grid');
    var masonry = new Masonry(grid!, {
      itemSelector: '.grid-item',
      // columnWidth: 200,
      percentPosition: true,
      gutter: 10
    });
  }

}
