import { AfterViewInit, Component } from '@angular/core';
import { ButtonComponent } from '../../../../components/inputs/button/button.component';
import { dummdata } from './dummy data';
import Masonry from 'masonry-layout';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../../../components/data-display/product-card/product-card.component';
import { ProductDataService } from '../../../../services/component/product-data.service';
import { GridlayoutComponent } from '../../../../components/data-display/gridlayout/gridlayout.component';

@Component({
  selector: 'app-our-collection',
  standalone: true,
  imports: [CommonModule, GridlayoutComponent, ProductCardComponent, ButtonComponent],
  templateUrl: './our-collection.component.html',
  styleUrl: './our-collection.component.css'
})
export class OurCollectionComponent implements AfterViewInit {
  skateboardCollection = dummdata

  constructor(private dataService: ProductDataService) { }

  ngAfterViewInit(): void {
    var grid = document.querySelector('.grid');
    var masonry = new Masonry(grid!, {
      itemSelector: '.grid-item',
      percentPosition: true,
      // gutter: 20,
    });

    this.dataService.setData({
      id: 0,
      type: 'Classic LLL',
      craftedBy: '',
      price: 0,
      location: ''
    })
  }

  // this.dataService.setData({ key: 'value' });


}
